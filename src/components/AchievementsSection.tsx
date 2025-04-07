
import React from 'react';
import { Award, TrendingUp, Trophy, Medal, Star } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

const achievements = [
  {
    icon: <Trophy size={40} className="text-insurance-accent" />,
    year: "2023",
    title: "Top Insurance Agent of the Year",
    description: "Recognized for exceptional performance in policy sales and customer satisfaction.",
    organization: "Insurance Excellence Awards"
  },
  {
    icon: <Award size={40} className="text-insurance-accent" />,
    year: "2022",
    title: "Million Dollar Round Table (MDRT)",
    description: "Qualified for the prestigious MDRT, representing the top life insurance and financial services professionals worldwide.",
    organization: "MDRT Association"
  },
  {
    icon: <Medal size={40} className="text-insurance-accent" />,
    year: "2021",
    title: "Customer Service Excellence",
    description: "Awarded for maintaining highest standards of customer service and client satisfaction.",
    organization: "Insurance Consumer Forum"
  },
  {
    icon: <TrendingUp size={40} className="text-insurance-accent" />,
    year: "2020",
    title: "100% Club Member",
    description: "Recognized for consistently exceeding sales targets and business growth metrics.",
    organization: "Insurance Leaders Association"
  },
  {
    icon: <Star size={40} className="text-insurance-accent" />,
    year: "2019",
    title: "Best Newcomer Award",
    description: "Recognized as the most promising new insurance agent with outstanding first-year performance.",
    organization: "Insurance Industry Association"
  }
];

const AchievementsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Agent Quote */}
        <div className="mb-16 text-center">
          <blockquote className="italic text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
            "These achievements reflect my commitment to providing the best insurance solutions and service to my clients. 
            Each award represents the trust and confidence my clients have placed in me to protect what matters most to them."
          </blockquote>
          <div className="mt-6">
            <p className="font-semibold text-navy-700">John Doe</p>
            <p className="text-gray-500">Senior Insurance Consultant</p>
          </div>
        </div>
        
        {/* Achievements Timeline */}
        <div className="space-y-12 relative">
          {/* Timeline connector */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-navy-100 hidden md:block"></div>
          
          {achievements.map((achievement, index) => (
            <div key={index} className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              {/* Year badge */}
              <div className="md:w-1/2 flex flex-col items-center md:items-end md:pr-12 mb-4 md:mb-0">
                <div className="bg-navy-500 text-white py-2 px-6 rounded-full font-bold text-xl">
                  {achievement.year}
                </div>
              </div>
              
              {/* Achievement card */}
              <div className="md:w-1/2 md:pl-12 w-full">
                <Card className="border-l-4 border-l-insurance-accent hover:shadow-lg transition-shadow">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className="p-2 bg-navy-50 rounded-full">{achievement.icon}</div>
                    <div>
                      <CardTitle>{achievement.title}</CardTitle>
                      <CardDescription>{achievement.organization}</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{achievement.description}</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
