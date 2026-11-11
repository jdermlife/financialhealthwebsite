from pydantic import BaseModel, EmailStr
from typing import Optional, List
from datetime import datetime
from enum import Enum

class MembershipPlanEnum(str, Enum):
    basic = "basic"
    premium = "premium"
    elite = "elite"

# Article schemas
class ArticleCreate(BaseModel):
    title: str
    slug: str
    excerpt: str
    content: str
    category: str
    author: str = "Admin"
    image_url: Optional[str] = None

class ArticleResponse(BaseModel):
    id: int
    title: str
    slug: str
    excerpt: str
    category: str
    author: str
    image_url: Optional[str]
    created_at: datetime

    class Config:
        from_attributes = True

# User schemas
class UserCreate(BaseModel):
    email: EmailStr
    full_name: str
    password: str
    membership_plan: MembershipPlanEnum = MembershipPlanEnum.basic

class UserResponse(BaseModel):
    id: int
    email: str
    full_name: str
    membership_plan: MembershipPlanEnum
    is_active: bool
    created_at: datetime

    class Config:
        from_attributes = True

# Subscription schemas
class SubscriptionCreate(BaseModel):
    user_id: int
    plan: MembershipPlanEnum
    amount: int

class SubscriptionResponse(BaseModel):
    id: int
    user_id: int
    plan: MembershipPlanEnum
    amount: int
    currency: str
    status: str
    started_at: datetime
    expires_at: Optional[datetime]

    class Config:
        from_attributes = True

class PlanUpdate(BaseModel):
    plan: MembershipPlanEnum

# Newsletter
class NewsletterSubscribe(BaseModel):
    email: EmailStr