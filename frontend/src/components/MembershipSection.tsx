import React, { useState } from 'react';

interface Plan {
  id: number;
  name: string;
  price: string;
  period: string;
  features: string[];
  popular: boolean;
  color: string;
}

const plans: Plan[] = [
  {
    id: 1,
    name: 'Basic',
    price: 'Free',
    period: 'forever',
    features: [
      'Access to free articles',
      'Weekly newsletter',
      'Basic financial calculator',
      'Community forum access',
    ],
    popular: false,
    color: 'from-gray-500 to-gray-600',
  },
  {
    id: 2,
    name: 'Premium',
    price: '$9.99',
    period: '/month',
    features: [
      'All Basic features',
      'Exclusive articles & guides',
      'Advanced investment tools',
      'Portfolio tracker',
      'Monthly webinars',
      'Priority email support',
    ],
    popular: true,
    color: 'from-green-600 to-blue-600',
  },
  {
    id: 3,
    name: 'Elite',
    price: '$24.99',
    period: '/month',
    features: [
      'All Premium features',
      '1-on-1 financial coaching',
      'Custom investment plans',
      'Tax optimization tools',
      'Early access to new features',
      'Dedicated account manager',
    ],
    popular: false,
    color: 'from-blue-700 to-blue-900',
  },
];

const MembershipSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [selectedPlan, setSelectedPlan] = useState<number | null>(null);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Subscribed with: ${email}`);
    setEmail('');
  };

  return (
    <section className="bg-gradient-to-br from-green-900 via-blue-900 to-green-900 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Membership & Subscription Plans
          </h2>
          <p className="text-green-200 text-lg max-w-2xl mx-auto">
            Choose the plan that fits your financial journey. Upgrade or downgrade anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative bg-white rounded-2xl p-8 shadow-xl transition-all duration-300 hover:scale-105 ${
                plan.popular ? 'ring-4 ring-green-400' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-green-500 to-blue-500 text-white text-sm font-bold px-4 py-1 rounded-full">
                  MOST POPULAR
                </div>
              )}
              <div className={`bg-gradient-to-r ${plan.color} text-white text-center py-3 rounded-lg mb-6`}>
                <h3 className="text-xl font-bold">{plan.name}</h3>
              </div>
              <div className="text-center mb-6">
                <span className="text-4xl font-bold text-gray-800">{plan.price}</span>
                <span className="text-gray-500">{plan.period}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-600">
                    <span className="text-green-500 font-bold">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => setSelectedPlan(plan.id)}
                className={`w-full py-3 rounded-lg font-semibold transition-all ${
                  plan.popular
                    ? 'bg-gradient-to-r from-green-600 to-blue-600 text-white hover:from-green-700 hover:to-blue-700'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {plan.price === 'Free' ? 'Get Started' : 'Subscribe Now'}
              </button>
            </div>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-white text-center mb-2">
            Stay Updated with Financial Tips
          </h3>
          <p className="text-green-200 text-center mb-6">
            Get the latest financial tips delivered to your inbox every week.
          </p>
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-green-400 outline-none"
              required
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-600 hover:to-blue-600 transition-all"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default MembershipSection;