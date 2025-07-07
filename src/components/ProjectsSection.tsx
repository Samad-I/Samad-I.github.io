
import { ExternalLink, Github, Eye, ArrowRight } from 'lucide-react';

export const ProjectsSection = () => {
  const projects = [
    {
      title: "E2E Serverless Architecture",
      description: "Built a complete serverless application using AWS Lambda, API Gateway, and DynamoDB with automated CI/CD pipeline for seamless deployment and scaling.",
      technologies: ["AWS Lambda", "API Gateway", "DynamoDB", "CloudFormation"],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop&crop=edges",
      links: [
        { label: "Live Demo", url: "#", icon: Eye },
        { label: "GitHub", url: "#", icon: Github },
        { label: "Architecture", url: "#", icon: ExternalLink }
      ],
      featured: true
    },
    {
      title: "Portfolio Website with React",
      description: "Developed a responsive portfolio website using React, deployed on AWS S3 with CloudFront for global content delivery and optimized performance.",
      technologies: ["React", "AWS S3", "CloudFront", "Route 53"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop&crop=edges",
      links: [
        { label: "Live Demo", url: "#", icon: Eye },
        { label: "GitHub", url: "#", icon: Github }
      ],
      featured: false
    },
    {
      title: "Server Health Management",
      description: "Created automated server monitoring and health management system using CloudWatch, Lambda, and SNS for real-time alerts and proactive maintenance.",
      technologies: ["CloudWatch", "Lambda", "SNS", "Python"],
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop&crop=edges",
      links: [
        { label: "Live Demo", url: "#", icon: Eye },
        { label: "GitHub", url: "#", icon: Github }
      ],
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-900 transition-colors relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 lg:mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Showcasing my expertise in cloud architecture and DevOps solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                project.featured ? 'lg:col-span-2 lg:row-span-2' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 sm:h-56 lg:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {project.featured && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      ⭐ Featured
                    </span>
                  </div>
                )}
              </div>
              
              {/* Project Content */}
              <div className="p-6 lg:p-8">
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4 lg:mb-6 text-sm lg:text-base">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-xs lg:text-sm font-medium transition-all duration-300 hover:scale-105"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Project Links */}
                <div className="flex flex-wrap gap-3">
                  {project.links.map((link, linkIndex) => (
                    <a 
                      key={linkIndex}
                      href={link.url}
                      className="group/link flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-sm lg:text-base transition-all duration-300 hover:scale-105"
                    >
                      <link.icon size={16} className="mr-2 group-hover/link:scale-110 transition-transform duration-300" />
                      {link.label}
                      <ArrowRight size={14} className="ml-1 group-hover/link:translate-x-1 transition-transform duration-300" />
                    </a>
                  ))}
                </div>
              </div>
              
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* View More Projects Button */}
        <div className="text-center mt-12 lg:mt-16">
          <button className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25">
            View All Projects
            <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};
