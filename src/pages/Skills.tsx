import React from 'react';
import { Code, Brain, Database, Server } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code className="w-6 h-6 text-purple-400" />,
      skills: ['Python', 'C++', 'Java'],
      description: 'Strong foundation in multiple programming paradigms and languages'
    },
    {
      title: 'Machine Learning & AI',
      icon: <Brain className="w-6 h-6 text-purple-400" />,
      skills: ['TensorFlow', 'Scikit-learn', 'OpenCV', 'Neural Networks'],
      description: 'Expertise in implementing and optimizing machine learning models'
    },
    {
      title: 'Data Analysis',
      icon: <Database className="w-6 h-6 text-purple-400" />,
      skills: ['Pandas', 'NumPy', 'SciPy', 'Data Visualization'],
      description: 'Proficient in data manipulation, analysis, and visualization'
    },
    {
      title: 'Tools & Platforms',
      icon: <Server className="w-6 h-6 text-purple-400" />,
      skills: ['AWS', 'Flask', 'Git', 'Linux/Unix'],
      description: 'Experience with modern development tools and cloud platforms'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
      <div className="pt-16 pb-24">
        <div className="container mx-auto px-6 pt-16">
          <h1 className="text-4xl font-bold mb-4 text-white text-center">Technical Skills</h1>
          <p className="text-xl text-purple-200 text-center mb-16">
            Comprehensive expertise in ML, AI, and software development
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {skillCategories.map((category, index) => (
              <div 
                key={index} 
                className="bg-white/10 backdrop-blur-lg rounded-xl p-8 transform hover:scale-105 transition-all duration-300 border border-purple-500/20"
              >
                <div className="flex items-center mb-6">
                  {category.icon}
                  <h2 className="text-2xl font-bold ml-3 text-white">{category.title}</h2>
                </div>
                <p className="text-purple-200 mb-6">{category.description}</p>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                      <span className="text-gray-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;