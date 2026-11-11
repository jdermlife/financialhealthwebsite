import React from 'react';

interface Article {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  categoryColor: string;
  author: string;
  date: string;
  image: string;
}

const articles: Article[] = [
  {
    id: 1,
    title: 'How to Start Growing Your Savings in 2026',
    excerpt: 'Discover practical steps to build a robust savings plan that works with your lifestyle and income...',
    category: 'SAVINGS',
    categoryColor: 'bg-green-600',
    author: 'Admin',
    date: 'April 10, 2026',
    image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400&h=250&fit=crop',
  },
  {
    id: 2,
    title: 'Hello! Welcome to Financial Health',
    excerpt: 'Welcome to our blog! Here we share tips, strategies, and guides to help you master personal finance...',
    category: 'INSIGHTS',
    categoryColor: 'bg-blue-600',
    author: 'Admin',
    date: 'April 8, 2026',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop',
  },
  {
    id: 3,
    title: 'Common Personal Finance Mistakes to Avoid',
    excerpt: 'Learn about the most common pitfalls people face when managing their money and how to steer clear...',
    category: 'RISKS',
    categoryColor: 'bg-red-600',
    author: 'Admin',
    date: 'April 5, 2026',
    image: 'https://images.unsplash.com/photo-1580519542036-c47de6196ba5?w=400&h=250&fit=crop',
  },
  {
    id: 4,
    title: "The Beginner's Guide to Budgeting",
    excerpt: 'A step-by-step guide to creating your first budget and sticking to it without feeling overwhelmed...',
    category: 'BUDGETING',
    categoryColor: 'bg-green-600',
    author: 'Admin',
    date: 'April 1, 2026',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop',
  },
  {
    id: 5,
    title: 'How to Reduce Debt and Build Wealth',
    excerpt: 'Proven methods to eliminate debt faster while simultaneously building long-term wealth and financial security...',
    category: 'INVESTING',
    categoryColor: 'bg-blue-600',
    author: 'Admin',
    date: 'March 28, 2026',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop',
  },
  {
    id: 6,
    title: 'Understanding the Stock Market in 2026',
    excerpt: 'An accessible overview of how stock markets work and what trends to watch for in the coming year...',
    category: 'MARKETS',
    categoryColor: 'bg-green-700',
    author: 'Admin',
    date: 'March 22, 2026',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=250&fit=crop',
  },
];

const ArticleCard: React.FC<{ article: Article }> = ({ article }) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
      <div className="relative overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <span className={`absolute bottom-3 left-3 ${article.categoryColor} text-white text-xs font-bold px-3 py-1 rounded`}>
          {article.category}
        </span>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-green-700 transition-colors">
          {article.title}
        </h3>
        <p className="text-gray-500 text-sm mb-4 line-clamp-2">{article.excerpt}</p>
        <div className="flex justify-between items-center text-xs text-gray-400">
          <span className="text-green-600 font-medium">By {article.author}</span>
          <span>{article.date}</span>
        </div>
      </div>
    </div>
  );
};

const ArticleGrid: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </section>
  );
};

export default ArticleGrid;