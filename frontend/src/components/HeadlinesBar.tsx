import React from 'react';

const headlines = [
  { id: 1, title: "The Beginner's Guide to Budgeting", icon: '📊' },
  { id: 2, title: 'Top Investment Strategies for 2026', icon: '📈' },
  { id: 3, title: 'Emergency Fund: Why You Need One', icon: '🛡️' },
];

const HeadlinesBar: React.FC = () => {
  return (
    <div className="bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-4 overflow-x-auto">
        <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-4 py-2 rounded-lg font-bold text-sm whitespace-nowrap flex items-center gap-1">
          <span>⚡</span> HEADLINES
        </div>
        {headlines.map((item, index) => (
          <React.Fragment key={item.id}>
            <div className="flex items-center gap-2 whitespace-nowrap text-sm text-gray-700 hover:text-green-700 cursor-pointer transition-colors">
              <span>{item.icon}</span>
              <span>{item.title}</span>
            </div>
            {index < headlines.length - 1 && (
              <div className="w-px h-6 bg-gray-300" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default HeadlinesBar;