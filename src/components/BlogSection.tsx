
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Why Life Insurance is Essential for Every Family",
      excerpt: "Learn why having a life insurance policy is crucial for protecting your family's financial future.",
      date: "April 2, 2025",
      category: "Life Insurance",
      image: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"
    },
    {
      id: 2,
      title: "5 Things to Consider When Choosing Health Insurance",
      excerpt: "Important factors to keep in mind when selecting the right health insurance plan for you and your family.",
      date: "March 28, 2025",
      category: "Health Insurance",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 3,
      title: "Planning for Retirement: Start Early for Maximum Benefits",
      excerpt: "Discover how starting your retirement planning early can significantly impact your financial security.",
      date: "March 15, 2025",
      category: "Retirement Planning",
      image: "https://images.unsplash.com/photo-1601581875039-e899893d520c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=988&q=80"
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Latest Insurance Tips & Insights</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Stay informed about the latest trends, tips, and insights in the insurance industry to make better financial decisions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm text-navy-500 font-medium">{post.category}</span>
                  <span className="text-sm text-gray-500">{post.date}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Link to={`/blog/${post.id}`} className="inline-flex items-center text-navy-500 hover:text-navy-700 font-medium">
                  Read More <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link to="/blog" className="inline-flex items-center text-navy-500 hover:text-navy-700 font-medium">
            View All Articles <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
