
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

// Plan data for different insurance types
const plans = {
  'life-insurance': [
    {
      title: 'Term Life Insurance',
      description: 'Pure protection plan that provides financial security to your family.',
      features: [
        'High coverage at affordable premiums',
        'Income tax benefits under Section 80C',
        'Option to add critical illness cover',
        'Death benefit paid as lump sum'
      ]
    },
    {
      title: 'Whole Life Insurance',
      description: 'Lifelong protection combined with savings benefit for you and your family.',
      features: [
        'Coverage until age 100',
        'Builds cash value over time',
        'Loan facility against policy',
        'Tax benefits on premiums paid'
      ]
    },
    {
      title: 'Endowment Plan',
      description: 'Combination of protection and savings to help you meet your financial goals.',
      features: [
        'Maturity benefits along with life cover',
        'Regular savings discipline',
        'Guaranteed additions',
        'Bonus declarations based on performance'
      ]
    }
  ],
  'health-insurance': [
    {
      title: 'Comprehensive Health Plan',
      description: 'Complete healthcare protection for you and your family against medical expenses.',
      features: [
        'Hospitalization coverage',
        'Pre and post hospitalization expenses',
        'Cashless treatment at network hospitals',
        'Annual health check-up'
      ]
    },
    {
      title: 'Critical Illness Cover',
      description: 'Financial protection against serious illnesses with lump sum benefit.',
      features: [
        'Covers major critical illnesses',
        'Lump sum payout on diagnosis',
        'No restriction on usage of funds',
        'Tax benefits on premium payment'
      ]
    },
    {
      title: 'Hospital Cash Plan',
      description: 'Daily cash benefit during hospitalization to cover additional expenses.',
      features: [
        'Fixed daily cash benefit',
        'Covers hospital stay due to accident or illness',
        'Additional ICU benefit',
        'No bills required for claim'
      ]
    }
  ],
  'pension-plans': [
    {
      title: 'Immediate Annuity Plan',
      description: 'Start receiving pension immediately after making a lump sum payment.',
      features: [
        'Guaranteed regular income for life',
        'Option for pension to spouse after death',
        'Multiple annuity options',
        'Return of purchase price option'
      ]
    },
    {
      title: 'Deferred Annuity Plan',
      description: 'Build a retirement corpus during working years and receive pension later.',
      features: [
        'Flexible premium payment options',
        'Tax benefits during accumulation phase',
        'Guaranteed additions',
        'Option to surrender in case of emergency'
      ]
    },
    {
      title: 'National Pension Scheme',
      description: 'Government backed pension scheme with market-linked returns.',
      features: [
        'Low-cost structure',
        'Choice of investment options',
        'Additional tax benefits under Section 80CCD(1B)',
        'Option for partial withdrawal'
      ]
    }
  ],
  'child-plans': [
    {
      title: 'Child Education Plan',
      description: 'Secure your child\'s educational needs with guaranteed payouts.',
      features: [
        'Guaranteed education payouts',
        'Waiver of premium on parent\'s death',
        'Flexibility to choose payout timing',
        'Additional loyalty additions'
      ]
    },
    {
      title: 'Child Marriage Plan',
      description: 'Build a corpus for your child\'s marriage or other major life events.',
      features: [
        'Lump sum benefit at maturity',
        'Life cover for parent',
        'Guaranteed additions',
        'Flexible premium payment terms'
      ]
    },
    {
      title: 'Child Career Plan',
      description: 'Plan for your child\'s higher education and career establishment costs.',
      features: [
        'Structured payouts aligned with education needs',
        'Protection against unfortunate events',
        'Additional rider benefits',
        'Tax benefits under Section 80C'
      ]
    }
  ]
};

const PlansOffered = () => {
  const { planType } = useParams();
  const isMobile = useIsMobile();
  
  const planData = planType && plans[planType as keyof typeof plans] 
    ? plans[planType as keyof typeof plans] 
    : [];
  
  // Getting the title from URL param (convert kebab-case to title case)
  const getPageTitle = () => {
    if (!planType) return 'Plans';
    return planType.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ') + ' Plans';
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="bg-navy-50 py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-4">
            <Link to="/services" className="flex items-center text-navy-500 hover:text-navy-700 mr-3">
              <ChevronLeft size={20} />
              <span>Back to Services</span>
            </Link>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gradient">{getPageTitle()}</h1>
          <p className="text-gray-600 text-center max-w-3xl mx-auto">
            Explore our comprehensive range of {getPageTitle().toLowerCase()} designed to provide financial security and peace of mind.
          </p>
        </div>
      </div>
      
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4">
          {planData.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {planData.map((plan, index) => (
                <Card key={index} className="h-full flex flex-col">
                  <CardHeader>
                    <CardTitle>{plan.title}</CardTitle>
                    <CardDescription>{plan.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <h4 className="text-lg font-medium mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-navy-500 mr-2">•</span>
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Link to="/contact" className="w-full">
                      <Button className="w-full bg-navy-500 hover:bg-navy-600">Request Consultation</Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <h3 className="text-2xl font-semibold mb-4">No plans found for this category</h3>
              <p className="text-gray-600 mb-8">Please check back later or contact us for more information.</p>
              <Link to="/services">
                <Button>Return to Services</Button>
              </Link>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PlansOffered;
