import React from 'react';
import { BarChart, PieChart, Users, Target } from 'lucide-react';

export const MarketingDashboard: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 gap-8">
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Marketing Analytics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Users, title: 'Audience Reach', value: '45.2K' },
              { icon: Target, title: 'Conversion Rate', value: '3.8%' },
              { icon: BarChart, title: 'Engagement', value: '12.4K' },
              { icon: PieChart, title: 'ROI', value: '287%' },
            ].map((stat, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center justify-between mb-4">
                  <stat.icon className="text-purple-600" size={24} />
                  <span className="text-2xl font-bold">{stat.value}</span>
                </div>
                <h3 className="text-gray-600">{stat.title}</h3>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};