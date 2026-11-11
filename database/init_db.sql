-- Create Database
CREATE DATABASE finance101_db;
\c finance101_db;

-- Create User
CREATE USER finance_user WITH PASSWORD 'finance_password';
GRANT ALL PRIVILEGES ON DATABASE finance101_db TO finance_user;

-- Enum Types
CREATE TYPE membership_plan AS ENUM ('basic', 'premium', 'elite');

-- Users Table
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    full_name VARCHAR(255) NOT NULL,
    hashed_password VARCHAR(255) NOT NULL,
    membership_plan membership_plan DEFAULT 'basic',
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE
);

-- Articles Table
CREATE TABLE articles (
    id SERIAL PRIMARY KEY,
    title VARCHAR(500) NOT NULL,
    slug VARCHAR(500) UNIQUE NOT NULL,
    excerpt TEXT NOT NULL,
    content TEXT NOT NULL,
    category VARCHAR(100) NOT NULL,
    author VARCHAR(255) DEFAULT 'Admin',
    image_url VARCHAR(500),
    is_published BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE
);

-- Subscriptions Table
CREATE TABLE subscriptions (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    plan membership_plan NOT NULL,
    amount INTEGER NOT NULL,
    currency VARCHAR(3) DEFAULT 'USD',
    status VARCHAR(50) DEFAULT 'active',
    started_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    expires_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Newsletter Subscribers Table
CREATE TABLE newsletter_subscribers (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    is_active BOOLEAN DEFAULT TRUE,
    subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Indexes
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_articles_slug ON articles(slug);
CREATE INDEX idx_articles_category ON articles(category);
CREATE INDEX idx_subscriptions_user_id ON subscriptions(user_id);
CREATE INDEX idx_newsletter_email ON newsletter_subscribers(email);

-- Seed Data: Sample Articles
INSERT INTO articles (title, slug, excerpt, content, category, author, image_url) VALUES
('How to Start Growing Your Savings in 2026', 'how-to-start-growing-savings-2026',
 'Discover practical steps to build a robust savings plan that works with your lifestyle and income.',
 'Full article content here...', 'SAVINGS', 'Admin', 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400'),

('Hello! Welcome to Finance Health', 'welcome-to-finance-health',
 'Welcome to our blog! Here we share tips, strategies, and guides to help you master personal finance.',
 'Full article content here...', 'INSIGHTS', 'Admin', 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400'),

('Common Personal Finance Mistakes to Avoid', 'common-personal-finance-mistakes',
 'Learn about the most common pitfalls people face when managing their money.',
 'Full article content here...', 'RISKS', 'Admin', 'https://images.unsplash.com/photo-1580519542036-c47de6196ba5?w=400'),

('The Beginner''s Guide to Budgeting', 'beginners-guide-budgeting',
 'A step-by-step guide to creating your first budget and sticking to it.',
 'Full article content here...', 'BUDGETING', 'Admin', 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400'),

('How to Reduce Debt and Build Wealth', 'reduce-debt-build-wealth',
 'Proven methods to eliminate debt faster while building long-term wealth.',
 'Full article content here...', 'INVESTING', 'Admin', 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400'),

('Understanding the Stock Market in 2026', 'understanding-stock-market-2026',
 'An accessible overview of how stock markets work and what trends to watch.',
 'Full article content here...', 'MARKETS', 'Admin', 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400');