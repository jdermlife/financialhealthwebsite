import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-green-50 via-blue-50 to-green-50 py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="text-green-700">Your Path to</span>{' '}
          <span className="text-blue-700">Financial Health</span>
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
          Discover expert tips, strategies, and guides to help you master personal finance,
          build wealth, and achieve financial freedom.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-green-800 transition-all shadow-lg hover:shadow-xl">
            Get Started Free
          </button>
          <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl">
            View Plans
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {[
            { value: '50K+', label: 'Active Members' },
            { value: '500+', label: 'Articles Published' },
            { value: '95%', label: 'Satisfaction Rate' },
            { value: '$2M+', label: 'Wealth Created' },
          ].map((stat) => (
            <div key={stat.label} className="bg-white rounded-xl p-4 shadow-md">
              <div className="text-2xl font-bold text-green-700">{stat.value}</div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;