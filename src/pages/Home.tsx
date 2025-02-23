import React from 'react';
import { Brain, Linkedin, Github, Mail, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
      {/* Hero Section */}
      <div className="min-h-screen flex items-center relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-400 via-transparent to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 py-24 relative z-10">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
            {/* Profile Image */}
            <div className="lg:w-1/3 animate-scale-in">
              <div className="relative">
                <div className="w-64 h-64 mx-auto rounded-full overflow-hidden border-4 border-purple-400/30 shadow-2xl">
                  <img 
                    src="./src/images/profilepic.jpeg" 
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500/20 to-transparent"></div>
              </div>
            </div>

            {/* Content */}
            <div className="lg:w-2/3 text-center lg:text-left">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold text-white animate-slide-up">
                  Hi, I'm <span className="text-purple-400">Rohith Thokala</span>
                </h1>
                
                <p className="text-xl md:text-2xl text-purple-200 animate-slide-up delay-200">
                  Machine Learning Engineer & AI Enthusiast
                </p>

                <p className="text-lg text-gray-300 max-w-2xl animate-slide-up delay-400">
                  Transforming complex data into intelligent solutions. Passionate about building 
                  AI-driven applications that solve real-world problems.
                </p>

                {/* Social Links */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-4 animate-fade-in delay-600">
                  <a
                    href="https://www.linkedin.com/in/rohith-thokala"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all"
                  >
                    <Linkedin className="w-5 h-5" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href="https://github.com/rthokala2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all"
                  >
                    <Github className="w-5 h-5" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href="mailto:Rohithkumar.1601@gmail.com"
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all"
                  >
                    <Mail className="w-5 h-5" />
                    <span>Email</span>
                  </a>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-8 animate-fade-in delay-600">
                  <button 
                    onClick={() => navigate("/projects")} 
                    className="flex items-center gap-2 px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-full font-semibold transition-all transform hover:scale-105"
                  >
                    View Projects
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  <a
                    href="https://drive.google.com/file/d/1AGJvn847hI2Px40yP-xsoGRbU7tERPZs/view"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 border-2 border-purple-400/30 hover:border-purple-400 text-white rounded-full font-semibold transition-all transform hover:scale-105"
                  >
                    Download Resume
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="py-20 bg-white/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-12">
              <Brain className="w-8 h-8 text-purple-400 mr-3" />
              <h2 className="text-3xl font-bold text-white">About Me</h2>
            </div>
            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-xl">
              <p className="text-gray-300 leading-relaxed">
                Enthusiastic and skilled in Python programming, machine learning, and data analysis, 
                I am a recent graduate passionate about bringing strong problem-solving abilities to 
                real-world projects. With hands-on experience in projects like face mask detection 
                and movie recommendation systems, I am adept at applying technical knowledge to build 
                impactful solutions. Known for my attention to detail and adaptability, I am ready 
                to contribute effectively in a dynamic engineering role.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;