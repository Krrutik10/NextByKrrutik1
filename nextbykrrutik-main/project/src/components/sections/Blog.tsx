import React, { useState } from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import Modal from '../Modal';
import AnimatedSection from '../AnimatedSection';
import type { BlogPost } from '../../types';

const Blog: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'The Future of Construction Technology',
      preview: 'Exploring how BIM, IoT, and AI are revolutionizing the construction industry. From smart buildings to predictive maintenance, technology is reshaping how we build.',
      date: '2024-01-15',
      readTime: '5 min read',
      fullContent: `The construction industry is experiencing a digital transformation that's fundamentally changing how we design, build, and maintain structures. Building Information Modeling (BIM) has evolved from a simple 3D visualization tool to a comprehensive data management platform that enables better collaboration and decision-making throughout the project lifecycle.

      Internet of Things (IoT) sensors are now being embedded in construction materials and equipment, providing real-time data on everything from concrete curing to equipment performance. This data-driven approach is enabling predictive maintenance strategies that can prevent costly delays and safety incidents.

      Artificial Intelligence is beginning to play a crucial role in project planning and risk assessment. Machine learning algorithms can analyze historical project data to predict potential issues and optimize resource allocation. This is particularly valuable in large infrastructure projects where small inefficiencies can compound into significant cost overruns.

      The integration of these technologies is creating new opportunities for construction professionals who can bridge the gap between traditional building practices and digital innovation. As we move forward, the most successful projects will be those that effectively leverage these tools while maintaining focus on quality, safety, and sustainability.`
    },
    {
      id: '2',
      title: 'Project Management in the Digital Age',
      preview: 'How digital tools and methodologies are transforming project management practices. Discussing agile approaches, collaborative platforms, and data-driven decisions.',
      date: '2024-01-08',
      readTime: '7 min read',
      fullContent: `Project management has undergone a radical transformation in the digital age. Traditional waterfall methodologies are giving way to more flexible, iterative approaches that can adapt to changing requirements and market conditions.

      Digital collaboration platforms have broken down geographical barriers, enabling distributed teams to work together seamlessly. Tools like Slack, Microsoft Teams, and specialized project management software have made it possible to maintain clear communication and accountability across time zones and cultures.

      Data analytics is revolutionizing how we track project progress and predict outcomes. Real-time dashboards provide stakeholders with immediate visibility into project health, while predictive analytics can identify potential risks before they become critical issues.

      The rise of agile methodologies in non-software projects has shown that iterative development and continuous feedback can improve outcomes across industries. This approach emphasizes adaptability, customer collaboration, and responding to change over following rigid plans.

      As project managers, we must embrace these digital tools while remembering that successful projects ultimately depend on effective leadership, clear communication, and strong stakeholder relationships. Technology amplifies our capabilities, but it doesn't replace the fundamental human elements of project success.`
    },
    {
      id: '3',
      title: 'Bridging Engineering and Business Strategy',
      preview: 'My journey from civil engineering to management of technology. Insights on how technical background enhances business strategy and decision-making.',
      date: '2024-01-01',
      readTime: '6 min read',
      fullContent: `My transition from civil engineering to management of technology has provided unique insights into how technical expertise can enhance business strategy and decision-making. Engineers are trained to think systematically, analyze complex problems, and develop practical solutions – skills that are invaluable in business strategy.

      Technical professionals bring a different perspective to strategic planning. We understand the constraints and possibilities of technology implementation, which helps in making realistic assessments of what's achievable within given timeframes and budgets.

      The engineering mindset of continuous improvement and optimization translates well to business process improvement. The same analytical approach used to optimize structural designs can be applied to optimize business operations, supply chains, and organizational structures.

      Risk assessment is another area where engineering background provides significant value. Engineers are trained to identify potential failure points and design systems with appropriate safety margins. This translates to better risk management in business contexts.

      However, the transition also requires developing new skills in areas like stakeholder management, financial analysis, and market dynamics. The key is to leverage your technical foundation while building complementary business skills.

      For other engineers considering a similar path, I recommend starting with projects that bridge technical and business domains. This helps develop the language and perspective needed to communicate effectively with business stakeholders while maintaining your technical credibility.`
    },
    {
      id: '4',
      title: 'Data Analytics for Infrastructure Projects',
      preview: 'Leveraging data analytics to optimize infrastructure projects. Case studies on predictive modeling, resource allocation, and performance tracking.',
      date: '2023-12-20',
      readTime: '8 min read',
      fullContent: `Data analytics is transforming how we approach infrastructure projects, from initial planning through long-term maintenance. The ability to collect, analyze, and act on data throughout the project lifecycle is creating new opportunities for optimization and risk mitigation.

      Predictive modeling is particularly valuable in infrastructure projects where delays and cost overruns can have significant economic and social impacts. By analyzing historical project data, weather patterns, and resource availability, we can develop more accurate project timelines and budgets.

      Resource allocation optimization using data analytics can significantly improve project efficiency. Machine learning algorithms can analyze patterns in resource utilization to identify optimal scheduling and allocation strategies. This is particularly important in large projects where small improvements in efficiency can result in substantial cost savings.

      Performance tracking through IoT sensors and automated data collection provides real-time insights into project progress and quality. This enables proactive management rather than reactive problem-solving, which is crucial for maintaining project schedules and budgets.

      Case studies from recent infrastructure projects show that data-driven approaches can reduce project timelines by 15-20% while improving quality outcomes. The key is implementing robust data collection systems from the project's inception and having the analytical capabilities to turn data into actionable insights.

      As infrastructure projects become more complex and stakeholder expectations continue to rise, data analytics will become an essential tool for project success. The organizations that invest in these capabilities now will have a significant competitive advantage in future projects.`
    },
  ];

  const openPostModal = (post: BlogPost) => {
    setSelectedPost(post);
  };

  const closeModal = () => {
    setSelectedPost(null);
  };

  return (
    <>
      <section id="blog" className="py-20 bg-gray-50 px-4">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Ideas & Insights
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Thoughts on technology, management, and the intersection of innovation and implementation.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <AnimatedSection key={post.id} delay={index * 0.1}>
                <article
                  className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group cursor-pointer"
                  onClick={() => openPostModal(post)}
                >
                  <div className="p-8">
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{new Date(post.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}</span>
                      <span className="mx-2">•</span>
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{post.readTime}</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {post.preview}
                    </p>
                    
                    <button className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors">
                      Read More
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </button>
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Post Modal */}
      <Modal
        isOpen={!!selectedPost}
        onClose={closeModal}
        title={selectedPost?.title || ''}
      >
        {selectedPost && (
          <div className="space-y-6">
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <Calendar className="w-4 h-4 mr-2" />
              <span>{new Date(selectedPost.date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</span>
              <span className="mx-2">•</span>
              <Clock className="w-4 h-4 mr-2" />
              <span>{selectedPost.readTime}</span>
            </div>
            
            <div className="prose prose-lg max-w-none">
              {selectedPost.fullContent?.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-gray-700 leading-relaxed mb-4">
                  {paragraph.trim()}
                </p>
              ))}
            </div>
          </div>
        )}
      </Modal>
    </>
  );
};

export default Blog;