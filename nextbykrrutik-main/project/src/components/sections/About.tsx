import React from 'react';
import { MapPin, GraduationCap, Building, Target, Linkedin } from 'lucide-react';
import AnimatedSection from '../AnimatedSection';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 px-4">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              About Me
            </h2>
            <p className="text-xl text-gray-600">
              Building bridges between technology and business strategy.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection delay={0.2}>
            <div className="space-y-6">
              {/* Enhanced Profile Photo */}
              <div className="flex justify-center lg:justify-start">
                <div className="relative">
                  <img
                    src="/assets/465582915_122136396038360063_8752865613515200579_n.jpg"
                    alt="Krrutik Kini"
                    className="w-56 h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-3xl object-cover shadow-xl border-4 border-white"
                    style={{ objectPosition: 'center top' }}
                  />
                  <div className="absolute -bottom-3 -right-3 w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg border-4 border-white">
                    <div className="text-white text-xl font-bold">KK</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Facts</h3>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-5 h-5 mr-3 text-blue-600" />
                    <span>New York City, NY</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <GraduationCap className="w-5 h-5 mr-3 text-blue-600" />
                    <span>M.S. Management of Technology - NYU</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Building className="w-5 h-5 mr-3 text-blue-600" />
                    <span>B.E. Civil Engineering</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Target className="w-5 h-5 mr-3 text-blue-600" />
                    <span>Seeking PM & Consulting Roles</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Linkedin className="w-5 h-5 mr-3 text-blue-600" />
                    <a 
                      href="https://linkedin.com/in/krrutik" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      linkedin.com/in/krrutik
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <div className="space-y-6">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  I'm Krrutik Kini, a Master's student at NYU studying Management of Technology, 
                  where I'm exploring the fascinating intersection of engineering, business strategy, 
                  and innovation management.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  With a background in Civil Engineering and hands-on experience in project management, 
                  I bring a unique perspective to complex challenges. My work spans from BIM classification 
                  research to strategic consulting, always with a focus on practical solutions that drive results.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  I'm passionate about leveraging technology to solve real-world problems, whether that's 
                  optimizing construction processes, analyzing market dynamics, or developing data-driven 
                  strategies for business growth.
                </p>
              </div>

              <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-600">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">My Mission</h4>
                <p className="text-gray-700 italic">
                  "I build systems, stories, and strategies that bridge the gap between 
                  innovation and implementation, turning complex challenges into actionable solutions."
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-blue-600 mb-1">15+</div>
                  <div className="text-sm text-gray-600">Projects</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-blue-600 mb-1">2+</div>
                  <div className="text-sm text-gray-600">Years Exp.</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-blue-600 mb-1">3</div>
                  <div className="text-sm text-gray-600">Specializations</div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default About;