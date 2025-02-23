import React from 'react';
import { Brain, FileCode2, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Movie Recommendation System',
      icon: <Brain className="w-6 h-6 text-purple-400" />,
      tech: 'Python, Scikit-learn, Flask',
      description: [
        'Built a recommendation system using collaborative filtering',
        'Integrated web interface with sub-second response times',
        'Implemented user preference analysis and similarity matching'
      ],
      image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Gender Voice Recognition',
      icon: <FileCode2 className="w-6 h-6 text-purple-400" />,
      tech: 'Python, TensorFlow, Librosa',
      description: [
        '92% accuracy in gender classification from voice inputs',
        'Processed 3,000+ samples for feature extraction',
        'Implemented real-time voice analysis pipeline'
      ],
      image: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Breast Cancer Detection',
      icon: <Brain className="w-6 h-6 text-purple-400" />,
      tech: 'Python, Scikit-learn',
      description: [
        '95% accuracy in tumor classification',
        'Improved early detection rates by 20%',
        'Optimized model for medical dataset analysis'
      ],
      image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Face Mask Detection',
      icon: <FileCode2 className="w-6 h-6 text-purple-400" />,
      tech: 'Python, OpenCV, TensorFlow',
      description: [
        '90% detection accuracy on 5,000+ images',
        '30 FPS real-time processing performance',
        'Implemented custom CNN architecture'
      ],
      image: 'https://images.unsplash.com/photo-1584634731339-252c581abfc5?auto=format&fit=crop&q=80&w=800'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
      <div className="pt-16 pb-24">
        <div className="container mx-auto px-6 pt-16">
          <h1 className="text-4xl font-bold mb-4 text-white text-center">Featured Projects</h1>
          <p className="text-xl text-purple-200 text-center mb-16">
            Showcasing my expertise in ML and AI applications
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="group bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden border border-purple-500/20"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    {project.icon}
                    <h2 className="text-2xl font-bold ml-3 text-white">{project.title}</h2>
                  </div>
                  <p className="text-purple-400 mb-4">{project.tech}</p>
                  <ul className="space-y-2">
                    {project.description.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3"></div>
                        <span className="text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="mt-6 flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors">
                    <span>View Details</span>
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;