import React, { useState } from 'react';
import { Download, MapPin, Mail, Phone, ExternalLink, Calendar, Building, Linkedin } from 'lucide-react';
import Modal from '../Modal';
import AnimatedSection from '../AnimatedSection';

const Resume: React.FC = () => {
  const [showEducationModal, setShowEducationModal] = useState(false);
  const [showExperienceModal, setShowExperienceModal] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownloadResume = async () => {
    setIsDownloading(true);
    try {
      // Create a link element and trigger download
      const link = document.createElement('a');
      link.href = '/assets/Krutik_Kini_Resume.pdf';
      link.download = 'Krrutik_Kini_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading resume:', error);
    } finally {
      setTimeout(() => setIsDownloading(false), 1000);
    }
  };

  const educationData = [
    {
      institution: 'New York University',
      degree: "Master's in Management of Technology",
      duration: 'May 2026',
      logo: '/assets/1631334386646.jpeg', // NYU official logo
      courses: ['Project Management', 'Operations Management', 'Global Innovation', 'Economics and Strategy', 'Marketing'],
      description: 'Focusing on the intersection of technology and business strategy, with emphasis on innovation management and strategic decision-making in technology-driven environments.'
    },
    {
      institution: 'University of Mumbai',
      degree: "Bachelor's in Civil Engineering",
      duration: 'May 2022',
      logo: '/assets/1745775498816.jpeg', // Mumbai University official logo
      courses: ['Project Management', 'Construction Management', 'Business and Communication Ethics'],
      description: 'Comprehensive engineering education with focus on construction technology, project management, and sustainable infrastructure development.'
    }
  ];

  const experienceData = [
    {
      title: 'Research Assistant',
      company: 'NYU Marron Institute',
      location: 'New York, US',
      duration: 'May 2025 – Present',
      logo: '🔬', // Placeholder logo
      responsibilities: [
        'Reviewing and classifying subway station plans using AutoCAD and Revit',
        'Contributing to global subway infrastructure analysis and land use planning',
        'Developing standardized classification systems for urban infrastructure projects',
        'Collaborating with faculty on research publications and presentations'
      ]
    },
    {
      title: 'Structural Design Engineer / Project Engineer',
      company: 'Quality Engineers & Contractors',
      location: 'Mumbai, India',
      duration: 'July 2022 – April 2024',
      logo: '🏗️', // Placeholder logo
      responsibilities: [
        'Led a 10-person cross-functional team on Mumbai Highway and Metro Line 9 projects',
        'Reduced Chennai Bridge costs by 12% via optimized BOQ (Bill of Quantities)',
        'Designed Spine & Wing girder bridge in Midas Civil software',
        'Improved modeling efficiency by 38% using custom STAAD Pro Excel automation',
        'Managed project timelines and coordinated with multiple stakeholders',
        'Ensured compliance with safety standards and quality control measures'
      ]
    },
    {
      title: 'Structural Design Intern',
      company: 'Trimiti Engineers',
      location: 'Mumbai',
      duration: 'Sept 2021 – Jan 2022',
      logo: '📐', // Placeholder logo
      responsibilities: [
        'Designed 72m Bowstring girder in STAAD Pro structural analysis software',
        'Drafted precise structural drawings using AutoCAD',
        'Automated retaining wall design in Excel (cut workload by 30%)',
        'Assisted senior engineers in project planning and design optimization',
        'Conducted structural analysis and prepared technical reports'
      ]
    },
    {
      title: 'Site Intern',
      company: 'B.G. Shirke Construction',
      location: 'Navi Mumbai',
      duration: 'June 2021 – Aug 2021',
      logo: '🏢', // Placeholder logo
      responsibilities: [
        'Supervised precast production, quality control, and plant operations',
        'Reviewed site logs and coordinated construction drawings',
        'Hands-on experience with sub/super-structure & foundation phases',
        'Monitored construction progress and ensured adherence to project specifications',
        'Assisted in material testing and quality assurance procedures'
      ]
    }
  ];

  return (
    <>
      <section id="resume" className="py-20 bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Resume
              </h2>
              <p className="text-xl text-gray-600">
                A comprehensive overview of my education, experience, and skills.
              </p>
              <button
                onClick={handleDownloadResume}
                disabled={isDownloading}
                className="mt-6 inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Download className="w-4 h-4 mr-2" />
                {isDownloading ? 'Downloading...' : 'Download Resume'}
              </button>
            </div>
          </AnimatedSection>

          <div className="space-y-12">
            {/* Education Section */}
            <AnimatedSection delay={0.2}>
              <div>
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl font-bold text-gray-900">Education</h3>
                  <button
                    onClick={() => setShowEducationModal(true)}
                    className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
                  >
                    View Details →
                  </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {educationData.map((edu, index) => (
                    <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm border border-gray-200 overflow-hidden">
                            <img 
                              src={edu.logo} 
                              alt={`${edu.institution} logo`}
                              className="w-full h-full object-contain p-1"
                            />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-gray-900 mb-1">{edu.degree}</h4>
                          <p className="text-blue-600 font-medium mb-1">{edu.institution}</p>
                          <div className="flex items-center text-gray-600 mb-3">
                            <Calendar className="w-4 h-4 mr-1" />
                            <span className="text-sm">{edu.duration}</span>
                          </div>
                          <p className="text-gray-600 text-sm">
                            Key Courses: {edu.courses.slice(0, 2).join(', ')}
                            {edu.courses.length > 2 && '...'}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Experience Section - Vertical Timeline */}
            <AnimatedSection delay={0.4}>
              <div>
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl font-bold text-gray-900">Professional Experience</h3>
                  <button
                    onClick={() => setShowExperienceModal(true)}
                    className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
                  >
                    View Details →
                  </button>
                </div>
                
                <div className="relative">
                  {/* Timeline line */}
                  <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>
                  
                  <div className="space-y-8">
                    {experienceData.map((exp, index) => (
                      <div key={index} className="relative flex items-start space-x-6">
                        {/* Timeline dot */}
                        <div className="flex-shrink-0 relative">
                          <div className={`w-4 h-4 rounded-full ${index === 0 ? 'bg-blue-600' : 'bg-blue-400'} border-4 border-white shadow-sm`}></div>
                        </div>
                        
                        {/* Content */}
                        <div className="flex-1 bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <h4 className="text-xl font-semibold text-gray-900 mb-1">{exp.title}</h4>
                              <p className={`font-medium mb-2 ${index === 0 ? 'text-blue-600' : 'text-gray-700'}`}>
                                {exp.company}
                              </p>
                              <div className="flex items-center text-gray-600 mb-4 space-x-4">
                                <div className="flex items-center">
                                  <MapPin className="w-4 h-4 mr-1" />
                                  <span className="text-sm">{exp.location}</span>
                                </div>
                                <div className="flex items-center">
                                  <Calendar className="w-4 h-4 mr-1" />
                                  <span className="text-sm">{exp.duration}</span>
                                </div>
                              </div>
                              <ul className="text-gray-600 space-y-2">
                                {exp.responsibilities.slice(0, 3).map((resp, respIndex) => (
                                  <li key={respIndex} className="flex items-start">
                                    <span className="text-blue-600 mr-2 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0"></span>
                                    <span className="text-sm">{resp}</span>
                                  </li>
                                ))}
                                {exp.responsibilities.length > 3 && (
                                  <li className="text-blue-600 text-sm font-medium">
                                    +{exp.responsibilities.length - 3} more responsibilities
                                  </li>
                                )}
                              </ul>
                            </div>
                            
                            {/* Company logo */}
                            <div className="flex-shrink-0 ml-4">
                              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-lg">
                                {exp.logo}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Skills */}
            <AnimatedSection delay={0.6}>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Skills</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Technical</h4>
                    <div className="space-y-2">
                      <span className="inline-block bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm">AutoCAD</span>
                      <span className="inline-block bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm ml-2">Revit</span>
                      <span className="inline-block bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm ml-2">STAAD Pro</span>
                      <span className="inline-block bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm">Midas Civil</span>
                      <span className="inline-block bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm ml-2">SQL</span>
                      <span className="inline-block bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm ml-2">Excel</span>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Management</h4>
                    <div className="space-y-2">
                      <span className="inline-block bg-green-50 text-green-600 px-3 py-1 rounded-full text-sm">Project Management</span>
                      <span className="inline-block bg-green-50 text-green-600 px-3 py-1 rounded-full text-sm ml-2">Team Leadership</span>
                      <span className="inline-block bg-green-50 text-green-600 px-3 py-1 rounded-full text-sm ml-2">Strategy</span>
                      <span className="inline-block bg-green-50 text-green-600 px-3 py-1 rounded-full text-sm">Process Optimization</span>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Tools</h4>
                    <div className="space-y-2">
                      <span className="inline-block bg-purple-50 text-purple-600 px-3 py-1 rounded-full text-sm">Miro</span>
                      <span className="inline-block bg-purple-50 text-purple-600 px-3 py-1 rounded-full text-sm ml-2">Tableau</span>
                      <span className="inline-block bg-purple-50 text-purple-600 px-3 py-1 rounded-full text-sm ml-2">PowerBI</span>
                      <span className="inline-block bg-purple-50 text-purple-600 px-3 py-1 rounded-full text-sm">Microsoft Project</span>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Education Modal */}
      <Modal
        isOpen={showEducationModal}
        onClose={() => setShowEducationModal(false)}
        title="Education Details"
      >
        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
                    <img 
                      src={edu.logo} 
                      alt={`${edu.institution} logo`}
                      className="w-full h-full object-contain p-1"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-semibold text-gray-900 mb-1">{edu.degree}</h4>
                  <p className="text-blue-600 font-medium mb-1">{edu.institution}</p>
                  <div className="flex items-center text-gray-600 mb-3">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{edu.duration}</span>
                  </div>
                  <p className="text-gray-700 mb-3">{edu.description}</p>
                  <div>
                    <h5 className="font-medium text-gray-900 mb-2">Relevant Courses:</h5>
                    <div className="flex flex-wrap gap-2">
                      {edu.courses.map((course, courseIndex) => (
                        <span
                          key={courseIndex}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Modal>

      {/* Experience Modal */}
      <Modal
        isOpen={showExperienceModal}
        onClose={() => setShowExperienceModal(false)}
        title="Professional Experience"
      >
        <div className="space-y-8">
          {experienceData.map((exp, index) => (
            <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Building className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-semibold text-gray-900 mb-1">{exp.title}</h4>
                  <p className="text-blue-600 font-medium mb-1">{exp.company}</p>
                  <div className="flex items-center text-gray-600 mb-3">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>{exp.location}</span>
                    <span className="mx-2">•</span>
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{exp.duration}</span>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-900 mb-2">Key Responsibilities:</h5>
                    <ul className="space-y-1">
                      {exp.responsibilities.map((resp, respIndex) => (
                        <li key={respIndex} className="text-gray-700 flex items-start">
                          <span className="text-blue-600 mr-2 mt-1">•</span>
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Modal>
    </>
  );
};

export default Resume;