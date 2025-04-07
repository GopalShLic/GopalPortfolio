
import React, { useState } from 'react';
import { Button } from './ui/button';
import { Calculator, Info } from 'lucide-react';

const CalculatorSection = () => {
  const [age, setAge] = useState(30);
  const [coverageAmount, setCoverageAmount] = useState(1000000);
  const [term, setTerm] = useState(20);
  const [premium, setPremium] = useState<number | null>(null);

  const calculatePremium = () => {
    // This is a simplified premium calculation for demonstration purposes
    // In a real scenario, you'd likely call an API or use a more complex formula
    const basePremium = (coverageAmount / 1000) * 0.5;
    const ageFactor = 1 + (age - 25) * 0.03;
    const termFactor = 1 + term * 0.01;
    
    const calculatedPremium = Math.round(basePremium * ageFactor * termFactor);
    setPremium(calculatedPremium);
  };

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="flex items-center text-navy-500 mb-4">
              <Calculator size={24} className="mr-2" />
              <h2 className="text-3xl font-bold">Insurance Premium Calculator</h2>
            </div>
            <p className="text-gray-600 mb-6">
              Get an estimate of your insurance premium based on your age, coverage amount, and term length. This is just an approximation - contact us for a personalized quote.
            </p>
            <div className="bg-navy-50 p-6 rounded-lg">
              <div className="mb-4">
                <label htmlFor="age" className="block mb-2 font-medium">
                  Your Age
                </label>
                <input
                  type="range"
                  id="age"
                  min="18"
                  max="65"
                  value={age}
                  onChange={(e) => setAge(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between mt-2 text-sm text-gray-600">
                  <span>18</span>
                  <span className="font-medium">{age} years</span>
                  <span>65</span>
                </div>
              </div>
              
              <div className="mb-4">
                <label htmlFor="coverage" className="block mb-2 font-medium">
                  Coverage Amount
                </label>
                <input
                  type="range"
                  id="coverage"
                  min="500000"
                  max="5000000"
                  step="100000"
                  value={coverageAmount}
                  onChange={(e) => setCoverageAmount(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between mt-2 text-sm text-gray-600">
                  <span>₹5 Lakhs</span>
                  <span className="font-medium">₹{(coverageAmount / 100000).toFixed(1)} Lakhs</span>
                  <span>₹50 Lakhs</span>
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="term" className="block mb-2 font-medium">
                  Term Length
                </label>
                <input
                  type="range"
                  id="term"
                  min="5"
                  max="30"
                  step="5"
                  value={term}
                  onChange={(e) => setTerm(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between mt-2 text-sm text-gray-600">
                  <span>5 years</span>
                  <span className="font-medium">{term} years</span>
                  <span>30 years</span>
                </div>
              </div>
              
              <Button 
                className="w-full bg-navy-500 hover:bg-navy-600 text-white"
                onClick={calculatePremium}
              >
                Calculate Premium
              </Button>
              
              {premium !== null && (
                <div className="mt-6 bg-white p-4 rounded-lg text-center">
                  <h3 className="text-xl font-semibold text-navy-600 mb-2">Estimated Monthly Premium</h3>
                  <p className="text-3xl font-bold text-navy-500">₹{premium}/month</p>
                  <p className="text-sm text-gray-500 mt-2">
                    This is an estimate. Contact us for a personalized quote.
                  </p>
                </div>
              )}
            </div>
          </div>
          
          <div className="lg:col-span-7">
            <div className="h-full bg-gradient-to-br from-navy-500 to-navy-700 rounded-lg p-8 flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-white mb-6">Why Calculate Your Premium Today?</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                  <h4 className="text-xl font-semibold text-white mb-3">Financial Planning</h4>
                  <p className="text-gray-100">
                    Understanding your premium helps you plan your finances and budget effectively.
                  </p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                  <h4 className="text-xl font-semibold text-white mb-3">Coverage Optimization</h4>
                  <p className="text-gray-100">
                    Find the right balance between premium costs and adequate coverage for your needs.
                  </p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                  <h4 className="text-xl font-semibold text-white mb-3">Future Readiness</h4>
                  <p className="text-gray-100">
                    Be prepared for life's uncertainties by securing the right insurance coverage.
                  </p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                  <h4 className="text-xl font-semibold text-white mb-3">Family Protection</h4>
                  <p className="text-gray-100">
                    Ensure your loved ones are financially protected in case of unfortunate events.
                  </p>
                </div>
              </div>
              
              <div className="mt-8 flex items-center bg-white/20 p-4 rounded-lg">
                <Info size={24} className="text-white mr-3 flex-shrink-0" />
                <p className="text-gray-100 text-sm">
                  For a more accurate quote based on your specific circumstances, please contact our insurance advisors. We're here to help you find the perfect coverage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalculatorSection;
