import { useState } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A fully featured e-commerce solution with advanced analytics and AI-powered recommendations.',
      category: 'web',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=500',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      demo: '#',
      github: '#'
    },
    {
      id: 2,
      title: 'Healthcare Management System',
      description: 'Comprehensive healthcare management platform with patient tracking and telemedicine features.',
      category: 'web',
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=500',
      technologies: ['Vue.js', 'Python', 'PostgreSQL', 'Docker'],
      demo: '#',
      github: '#'
    },
    {
      id: 3,
      title: 'Smart Finance App',
      description: 'Mobile application for personal finance management with AI-driven insights and budgeting.',
      category: 'mobile',
      image: 'https://images.pexels.com/photos/4386476/pexels-photo-4386476.jpeg?auto=compress&cs=tinysrgb&w=500',
      technologies: ['React Native', 'Firebase', 'TensorFlow', 'Plaid API'],
      demo: '#',
      github: '#'
    },
    {
      id: 4,
      title: 'IoT Dashboard',
      description: 'Real-time monitoring dashboard for IoT devices with predictive maintenance capabilities.',
      category: 'dashboard',
      image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=500',
      technologies: ['Angular', 'Node.js', 'InfluxDB', 'MQTT'],
      demo: '#',
      github: '#'
    },
    {
      id: 5,
      title: 'Fitness Tracker App',
      description: 'Cross-platform fitness tracking application with social features and workout planning.',
      category: 'mobile',
      image: 'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=500',
      technologies: ['Flutter', 'Dart', 'Firebase', 'Google Fit API'],
      demo: '#',
      github: '#'
    },
    {
      id: 6,
      title: 'Analytics Platform',
      description: 'Business intelligence platform with advanced data visualization and reporting capabilities.',
      category: 'dashboard',
      image: 'https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=500',
      technologies: ['D3.js', 'Python', 'Apache Spark', 'Redis'],
      demo: '#',
      github: '#'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Applications' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'dashboard', label: 'Dashboards' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="text-gray-300">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Explore our portfolio of successful projects that showcase our expertise 
            in delivering innovative technology solutions.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeFilter === category.id
                  ? 'bg-gray-700 text-white shadow-lg shadow-white/10 border border-gray-600'
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white border border-gray-700'
              }`}
            >
              <Filter className="inline h-4 w-4 mr-2" />
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="bg-gray-900 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-60"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gray-300 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm font-medium border border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <a
                    href={project.demo}
                    className="flex items-center text-gray-300 hover:text-white transition-colors duration-300 font-semibold"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    className="flex items-center text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-white/10 border border-gray-600">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;