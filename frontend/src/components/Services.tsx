import { Code, Cloud, Smartphone, Brain, Shield, Zap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Custom Software Development',
      description: 'Tailored software solutions built to meet your specific business requirements.',
      color: 'blue'
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services for enhanced performance.',
      color: 'purple'
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      color: 'green'
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Intelligent automation and data-driven insights to optimize your operations.',
      color: 'yellow'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets.',
      color: 'red'
    },
    {
      icon: Zap,
      title: 'Digital Transformation',
      description: 'End-to-end digitization to modernize your business processes.',
      color: 'indigo'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'from-gray-800 to-gray-900 border-gray-700 text-gray-300',
      purple: 'from-gray-800 to-gray-900 border-gray-700 text-gray-300',
      green: 'from-gray-800 to-gray-900 border-gray-700 text-gray-300',
      yellow: 'from-gray-800 to-gray-900 border-gray-700 text-gray-300',
      red: 'from-gray-800 to-gray-900 border-gray-700 text-gray-300',
      indigo: 'from-gray-800 to-gray-900 border-gray-700 text-gray-300'
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="text-gray-300">Services</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We offer comprehensive technology services designed to accelerate your business growth 
            and digital transformation journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${getColorClasses(service.color)} p-8 rounded-2xl border hover:scale-105 transition-all duration-300 group cursor-pointer`}
            >
              <service.icon className={`h-12 w-12 ${getColorClasses(service.color).split(' ')[2]} mb-6 group-hover:scale-110 transition-transform duration-300`} />
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gray-300 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
              <div className="mt-6">
                <span className="text-gray-300 font-semibold group-hover:underline transition-all duration-300">
                  Learn More →
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-white/10 border border-gray-600">
            Request a Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;