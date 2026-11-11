from fastapi import FastAPI, Depends, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from typing import List
import models, schemas, database

app = FastAPI(title="Finance Health API", version="1.0.0")

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Database dependency
def get_db():
    db = database.SessionLocal()
    try:
        yield db
    finally:
        db.close()

# ---- Articles ----
@app.get("/api/articles", response_model=List[schemas.ArticleResponse])
def get_articles(skip: int = 0, limit: int = 10, db: Session = Depends(get_db)):
    articles = db.query(models.Article).offset(skip).limit(limit).all()
    return articles

@app.get("/api/articles/{article_id}", response_model=schemas.ArticleResponse)
def get_article(article_id: int, db: Session = Depends(get_db)):
    article = db.query(models.Article).filter(models.Article.id == article_id).first()
    if not article:
        raise HTTPException(status_code=404, detail="Article not found")
    return article

@app.post("/api/articles", response_model=schemas.ArticleResponse)
def create_article(article: schemas.ArticleCreate, db: Session = Depends(get_db)):
    db_article = models.Article(**article.dict())
    db.add(db_article)
    db.commit()
    db.refresh(db_article)
    return db_article

# ---- Membership / Users ----
@app.post("/api/users/register", response_model=schemas.UserResponse)
def register_user(user: schemas.UserCreate, db: Session = Depends(get_db)):
    existing = db.query(models.User).filter(models.User.email == user.email).first()
    if existing:
        raise HTTPException(status_code=400, detail="Email already registered")
    
    hashed_password = models.get_password_hash(user.password)
    db_user = models.User(
        email=user.email,
        full_name=user.full_name,
        hashed_password=hashed_password,
        membership_plan=user.membership_plan,
    )
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

@app.get("/api/users/{user_id}", response_model=schemas.UserResponse)
def get_user(user_id: int, db: Session = Depends(get_db)):
    user = db.query(models.User).filter(models.User.id == user_id).first()
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return user

@app.put("/api/users/{user_id}/plan", response_model=schemas.UserResponse)
def update_membership_plan(user_id: int, plan: schemas.PlanUpdate, db: Session = Depends(get_db)):
    user = db.query(models.User).filter(models.User.id == user_id).first()
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    user.membership_plan = plan.plan
    db.commit()
    db.refresh(user)
    return user

# ---- Subscriptions ----
@app.post("/api/subscriptions", response_model=schemas.SubscriptionResponse)
def create_subscription(subscription: schemas.SubscriptionCreate, db: Session = Depends(get_db)):
    db_sub = models.Subscription(**subscription.dict())
    db.add(db_sub)
    db.commit()
    db.refresh(db_sub)
    return db_sub

@app.get("/api/subscriptions", response_model=List[schemas.SubscriptionResponse])
def get_subscriptions(db: Session = Depends(get_db)):
    return db.query(models.Subscription).all()

# ---- Newsletter ----
@app.post("/api/newsletter/subscribe")
def subscribe_newsletter(email: schemas.NewsletterSubscribe, db: Session = Depends(get_db)):
    existing = db.query(models.NewsletterSubscriber).filter(
        models.NewsletterSubscriber.email == email.email
    ).first()
    if existing:
        raise HTTPException(status_code=400, detail="Already subscribed")
    
    subscriber = models.NewsletterSubscriber(email=email.email)
    db.add(subscriber)
    db.commit()
    return {"message": "Successfully subscribed to newsletter"}

# ---- Health Check ----
@app.get("/api/health")
def health_check():
    return {"status": "healthy", "service": "Finance Health API"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)