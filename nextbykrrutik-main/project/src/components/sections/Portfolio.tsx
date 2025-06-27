import React, { useState } from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import Modal from '../Modal';
import AnimatedSection from '../AnimatedSection';
import type { Project } from '../../types';

const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: '1',
      title: 'Marketing Simulation Project',
      description: 'Comprehensive market analysis and strategy development using advanced simulation tools to optimize product positioning.',
      tags: ['Strategy', 'Analysis', 'Marketing'],
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=600',
      fullDescription: 'Led a comprehensive marketing simulation project analyzing consumer behavior and market dynamics. Developed strategic positioning recommendations using advanced simulation tools and data analytics. The project involved market segmentation analysis, competitive positioning, and ROI optimization strategies that resulted in a 15% improvement in simulated market share.',
      technologies: ['Market Research', 'Data Analysis', 'Strategic Planning', 'Consumer Behavior Analysis'],
      outcomes: ['15% improvement in market share simulation', 'Comprehensive competitive analysis report', 'Strategic positioning framework development']
    },
    {
      id: '2',
      title: 'Economics Research Paper',
      description: 'In-depth analysis of market dynamics and economic trends with focus on technology sector implications.',
      tags: ['Research', 'Economics', 'Analysis'],
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600',
      fullDescription: 'Conducted extensive research on technology sector economic trends and their implications for market dynamics. The paper analyzed the impact of digital transformation on traditional industries and provided insights into emerging market opportunities.',
      technologies: ['Economic Modeling', 'Statistical Analysis', 'Market Research', 'Data Visualization'],
      outcomes: ['Published research findings', 'Economic trend analysis framework', 'Policy recommendation development']
    },
    {
      id: '3',
      title: 'Operations Management Case Study',
      description: 'Process optimization and efficiency analysis for manufacturing operations with measurable improvements.',
      tags: ['Operations', 'Process Improvement', 'Management'],
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=600',
      fullDescription: 'Analyzed manufacturing operations for a mid-size company, identifying bottlenecks and implementing process improvements. Developed lean manufacturing strategies and workflow optimization solutions that significantly improved operational efficiency.',
      technologies: ['Lean Manufacturing', 'Process Mapping', 'Six Sigma', 'Workflow Optimization'],
      outcomes: ['25% reduction in production time', 'Improved quality control processes', 'Cost savings of $50K annually']
    },
    {
      id: '4',
      title: 'BIM Classification Research',
      description: 'Research assistant work on Building Information Modeling classification systems for construction technology.',
      tags: ['BIM', 'Construction', 'Research'],
      image: 'https://images.pexels.com/photos/273209/pexels-photo-273209.jpeg?auto=compress&cs=tinysrgb&w=600',
      fullDescription: 'Contributing to cutting-edge research on Building Information Modeling classification systems at NYU Marron Institute. Working on standardizing BIM data structures for improved interoperability in construction projects.',
      technologies: ['AutoCAD', 'Revit', 'BIM Standards', 'Data Classification'],
      outcomes: ['Standardized classification framework', 'Improved BIM interoperability', 'Research publication contributions']
    },
    {
      id: '5',
      title: 'Data Analysis Dashboard',
      description: 'Interactive dashboard development for real-time data visualization and business intelligence insights.',
      tags: ['Data Analysis', 'Visualization', 'SQL'],
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600',
      fullDescription: 'Developed comprehensive data analysis dashboard for business intelligence applications. Created interactive visualizations and real-time reporting capabilities that enabled data-driven decision making across multiple departments.',
      technologies: ['SQL', 'Tableau', 'Power BI', 'Python', 'Data Modeling'],
      outcomes: ['Real-time business intelligence dashboard', 'Automated reporting system', 'Improved decision-making speed by 40%']
    },
    {
      id: '6',
      title: 'Consulting Sprint at NYU',
      description: 'Strategic consulting project focused on technology implementation and change management solutions.',
      tags: ['Consulting', 'Strategy', 'Technology'],
      image: 'https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=600',
      fullDescription: 'Participated in intensive consulting sprint addressing technology implementation challenges for a Fortune 500 client. Developed comprehensive change management strategy and technology adoption roadmap.',
      technologies: ['Strategic Planning', 'Change Management', 'Technology Assessment', 'Stakeholder Analysis'],
      outcomes: ['Technology adoption roadmap', 'Change management framework', 'Stakeholder engagement strategy']
    },
  ];

  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <section id="portfolio" className="py-20 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Featured Work
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A collection of projects that showcase my expertise in project management, 
                data analysis, and strategic thinking.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <AnimatedSection key={project.id} delay={index * 0.1}>
                <div
                  className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group cursor-pointer"
                  onClick={() => openProjectModal(project)}
                >
                  <div className="aspect-video bg-gray-100 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-blue-50 text-blue-600 text-sm font-medium rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    
                    <button className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors">
                      View Project
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </button>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      <Modal
        isOpen={!!selectedProject}
        onClose={closeModal}
        title={selectedProject?.title || ''}
      >
        {selectedProject && (
          <div className="space-y-6">
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-64 object-cover rounded-lg"
            />
            
            <div className="flex flex-wrap gap-2">
              {selectedProject.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-blue-50 text-blue-600 text-sm font-medium rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Project Overview</h4>
              <p className="text-gray-700 leading-relaxed">{selectedProject.fullDescription}</p>
            </div>

            {selectedProject.technologies && (
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Technologies & Methods</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {selectedProject.outcomes && (
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Key Outcomes</h4>
                <ul className="space-y-1">
                  {selectedProject.outcomes.map((outcome, index) => (
                    <li key={index} className="text-gray-700 flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      {outcome}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </Modal>
    </>
  );
};

export default Portfolio;