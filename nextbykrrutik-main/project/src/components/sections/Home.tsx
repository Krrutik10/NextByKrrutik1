import React from 'react';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from '../AnimatedSection';

interface HomeProps {
  onSectionChange: (section: string) => void;
}

const Home: React.FC<HomeProps> = ({ onSectionChange }) => {
  return (
    <section 
      id="home" 
      className="min-h-screen bg-gray-50 flex items-center justify-center px-4 relative overflow-hidden"
      style={{
        backgroundImage: `
          radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 40% 40%, rgba(120, 119, 198, 0.2) 0%, transparent 50%),
          radial-gradient(circle at 60% 80%, rgba(147, 112, 219, 0.25) 0%, transparent 50%),
          radial-gradient(circle at 90% 60%, rgba(123, 104, 238, 0.2) 0%, transparent 50%)
        `,
        backgroundSize: '100% 100%, 80% 80%, 60% 60%, 70% 70%, 50% 50%',
        backgroundPosition: '0% 0%, 100% 100%, 50% 50%, 0% 100%, 100% 0%',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <AnimatedSection delay={0.2}>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Ideas. Projects.<br />
            <span 
              className="bg-gradient-to-r from-[#0A84FF] via-[#30D5C8] to-[#BF5AF2] bg-clip-text text-transparent"
              style={{
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundImage: 'linear-gradient(90deg, #0A84FF 0%, #30D5C8 50%, #BF5AF2 100%)'
              }}
            >
              What's Next.
            </span>
          </h1>
        </AnimatedSection>
        
        <AnimatedSection delay={0.4}>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed font-medium">
            I'm Krrutik Kini, a Master's student at NYU studying Management of Technology. 
            I build systems, stories, and strategies that bridge the gap between innovation and implementation.
          </p>
        </AnimatedSection>
        
        <AnimatedSection delay={0.6}>
          <button
            onClick={() => onSectionChange('portfolio')}
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white text-lg font-medium rounded-lg hover:bg-blue-700 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Explore My Work
            <ArrowRight className="ml-2" size={20} />
          </button>
        </AnimatedSection>
        
        <AnimatedSection delay={0.8}>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">2+</div>
              <div className="text-gray-700 font-medium">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-gray-700 font-medium">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">3</div>
              <div className="text-gray-700 font-medium">Specializations</div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Home;