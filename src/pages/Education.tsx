import React from 'react';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

const Education = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
      <div className="pt-16 pb-24">
        <div className="container mx-auto px-6 pt-16">
          <h1 className="text-4xl font-bold mb-4 text-white text-center">Education & Achievements</h1>
          <p className="text-xl text-purple-200 text-center mb-16">
            Academic background and professional certifications
          </p>

          <div className="max-w-4xl mx-auto space-y-8">
            {/* Education */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-purple-500/20">
              <div className="flex items-center mb-6">
                <GraduationCap className="w-8 h-8 text-purple-400" />
                <h2 className="text-2xl font-bold ml-3 text-white">Education</h2>
              </div>
              <div className="border-l-4 border-purple-400 pl-6 ml-3">
                <h3 className="text-xl font-semibold text-white">
                  Bachelor of Technology in Computer Science & Engineering
                </h3>
                <p className="text-purple-400 mt-2">Lovely Professional University, Punjab, India</p>
                <p className="text-purple-200 mt-1">2018 - 2022</p>
                <p className="text-gray-300 mt-4">
                  Comprehensive study of computer science fundamentals, algorithms, and advanced programming concepts,
                  with a focus on machine learning and artificial intelligence applications.
                </p>
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-purple-500/20">
              <div className="flex items-center mb-6">
                <BookOpen className="w-8 h-8 text-purple-400" />
                <h2 className="text-2xl font-bold ml-3 text-white">Certifications</h2>
              </div>
              <div className="border-l-4 border-purple-400 pl-6 ml-3">
                <h3 className="text-xl font-semibold text-white">Coding Ninjas</h3>
                <p className="text-purple-400 mt-2">Data Science Specialization</p>
                <ul className="mt-4 space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                    Python Programming & OOP Concepts
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                    Data Structures & Algorithms
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                    Machine Learning Fundamentals
                  </li>
                </ul>
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-purple-500/20">
              <div className="flex items-center mb-6">
                <Award className="w-8 h-8 text-purple-400" />
                <h2 className="text-2xl font-bold ml-3 text-white">Achievements</h2>
              </div>
              <div className="border-l-4 border-purple-400 pl-6 ml-3">
                <h3 className="text-xl font-semibold text-white">Extra Mile Award</h3>
                <p className="text-gray-300 mt-4">
                  Recognized for exceptional dedication and consistently delivering high-quality results.
                  Demonstrated outstanding problem-solving abilities and commitment to project success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;