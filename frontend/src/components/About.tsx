import { useEffect, useState } from 'react';
import { Users, Award, Clock, Target } from 'lucide-react';

const About = () => {
  const [counters, setCounters] = useState({
    projects: 0,
    clients: 0,
    years: 0,
    awards: 0
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateCounters();
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('about');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const animateCounters = () => {
    const targets = { projects: 250, clients: 100, years: 8, awards: 15 };
    const duration = 2000;
    const steps = 60;
    
    Object.keys(targets).forEach((key) => {
      let current = 0;
      const increment = targets[key as keyof typeof targets] / steps;
      const timer = setInterval(() => {
        current += increment;
        if (current >= targets[key as keyof typeof targets]) {
          current = targets[key as keyof typeof targets];
          clearInterval(timer);
        }
        setCounters(prev => ({ ...prev, [key]: Math.floor(current) }));
      }, duration / steps);
    });
  };

  return (
    <section id="about" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="text-gray-300">EdgeTech</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We are a forward-thinking technology company dedicated to delivering innovative solutions 
            that empower businesses to thrive in the digital age.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white mb-6">Our Mission</h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              At EdgeTech, we believe in pushing the boundaries of what's possible. Our team of experts 
              combines cutting-edge technology with creative problem-solving to deliver solutions that 
              not only meet today's challenges but anticipate tomorrow's opportunities.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              We specialize in custom software development, cloud solutions, AI integration, and digital 
              transformation services that help businesses stay ahead of the competition.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-300 mb-2">{counters.projects}+</div>
                <div className="text-gray-400">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-300 mb-2">{counters.clients}+</div>
                <div className="text-gray-400">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-300 mb-2">{counters.years}+</div>
                <div className="text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-300 mb-2">{counters.awards}+</div>
                <div className="text-gray-400">Awards Won</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700">
              <Users className="h-12 w-12 text-gray-300 mb-4" />
              <h4 className="text-xl font-semibold text-white mb-2">Expert Team</h4>
              <p className="text-gray-400">Skilled professionals with diverse expertise</p>
            </div>
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700">
              <Award className="h-12 w-12 text-gray-300 mb-4" />
              <h4 className="text-xl font-semibold text-white mb-2">Quality First</h4>
              <p className="text-gray-400">Committed to excellence in every project</p>
            </div>
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700">
              <Clock className="h-12 w-12 text-gray-300 mb-4" />
              <h4 className="text-xl font-semibold text-white mb-2">On Time</h4>
              <p className="text-gray-400">Reliable delivery within deadlines</p>
            </div>
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700">
              <Target className="h-12 w-12 text-gray-300 mb-4" />
              <h4 className="text-xl font-semibold text-white mb-2">Results Driven</h4>
              <p className="text-gray-400">Focused on achieving your business goals</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;