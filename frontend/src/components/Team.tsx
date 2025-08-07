import { Linkedin, Twitter, Github, Mail } from 'lucide-react';

const Team = () => {
    const teamMembers = [
        {
            id: 1,
            name: 'Sarah Johnson',
            role: 'CEO & Co-Founder',
            bio: 'Visionary leader with 15+ years in tech innovation and business strategy.',
            image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400',
            social: {
                linkedin: '#',
                twitter: '#',
                email: 'sarah@edgertech.com'
            }
        },
        {
            id: 2,
            name: 'Michael Chen',
            role: 'CTO & Co-Founder',
            bio: 'Tech architect specializing in scalable systems and emerging technologies.',
            image: 'https://images.pexels.com/photos/3760790/pexels-photo-3760790.jpeg?auto=compress&cs=tinysrgb&w=400',
            social: {
                linkedin: '#',
                github: '#',
                email: 'michael@edgertech.com'
            }
        },
        {
            id: 3,
            name: 'Emily Rodriguez',
            role: 'Head of Design',
            bio: 'Creative director focused on user-centered design and brand excellence.',
            image: 'https://images.pexels.com/photos/3763152/pexels-photo-3763152.jpeg?auto=compress&cs=tinysrgb&w=400',
            social: {
                linkedin: '#',
                twitter: '#',
                email: 'emily@edgertech.com'
            }
        },
        {
            id: 4,
            name: 'David Kim',
            role: 'Lead Developer',
            bio: 'Full-stack developer with expertise in modern web technologies and cloud platforms.',
            image: 'https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=400',
            social: {
                github: '#',
                linkedin: '#',
                email: 'david@edgertech.com'
            }
        },
        {
            id: 5,
            name: 'Lisa Thompson',
            role: 'Project Manager',
            bio: 'Agile expert ensuring seamless project delivery and client satisfaction.',
            image: 'https://images.pexels.com/photos/3763197/pexels-photo-3763197.jpeg?auto=compress&cs=tinysrgb&w=400',
            social: {
                linkedin: '#',
                email: 'lisa@edgertech.com'
            }
        },
        {
            id: 6,
            name: 'Alex Martinez',
            role: 'Data Scientist',
            bio: 'AI and machine learning specialist driving intelligent automation solutions.',
            image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=400',
            social: {
                github: '#',
                linkedin: '#',
                email: 'alex@edgertech.com'
            }
        }
    ];

    return (
        <section id="team" className="py-20 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Meet Our <span className="text-gray-300">Team</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Our diverse team of experts combines technical excellence with creative innovation
                        to deliver exceptional results for our clients.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {teamMembers.map((member, index) => (
                        <div
                            key={member.id}
                            className="group bg-gray-800 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="relative overflow-hidden">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-60"></div>

                                {/* Social Links Overlay */}
                                <div className="absolute inset-0 bg-gray-900/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <div className="flex space-x-4">
                                        {member.social.linkedin && (
                                            <a
                                                href={member.social.linkedin}
                                                className="bg-gray-700 p-3 rounded-full hover:bg-gray-600 transition-colors duration-300 transform hover:scale-110"
                                            >
                                                <Linkedin className="h-5 w-5 text-white" />
                                            </a>
                                        )}
                                        {member.social.twitter && (
                                            <a
                                                href={member.social.twitter}
                                                className="bg-gray-700 p-3 rounded-full hover:bg-gray-600 transition-colors duration-300 transform hover:scale-110"
                                            >
                                                <Twitter className="h-5 w-5 text-white" />
                                            </a>
                                        )}
                                        {member.social.github && (
                                            <a
                                                href={member.social.github}
                                                className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors duration-300 transform hover:scale-110"
                                            >
                                                <Github className="h-5 w-5 text-white" />
                                            </a>
                                        )}
                                        {member.social.email && (
                                            <a
                                                href={`mailto:${member.social.email}`}
                                                className="bg-gray-700 p-3 rounded-full hover:bg-gray-600 transition-colors duration-300 transform hover:scale-110"
                                            >
                                                <Mail className="h-5 w-5 text-white" />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gray-300 transition-colors duration-300">
                                    {member.name}
                                </h3>
                                <p className="text-gray-300 font-semibold mb-3">
                                    {member.role}
                                </p>
                                <p className="text-gray-400 leading-relaxed">
                                    {member.bio}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-16 p-8 bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl border border-gray-700">
                    <h3 className="text-2xl font-bold text-white mb-4">Join Our Team</h3>
                    <p className="text-gray-400 text-lg mb-6">
                        We're always looking for talented individuals to join our growing team.
                    </p>
                    <button className="bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-white/10 border border-gray-600">
                        View Open Positions
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Team;