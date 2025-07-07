
export const ProjectsSection = () => {
  const projects = [
    {
      title: "End-to-End Serverless Architecture",
      description: "Built a complete serverless application using AWS Lambda, API Gateway, and DynamoDB with automated CI/CD pipeline and comprehensive monitoring.",
      technologies: ["AWS Lambda", "API Gateway", "DynamoDB", "CloudFormation", "CloudWatch"],
      status: "Production Ready",
      links: [
        { label: "Live Demo", url: "#", type: "demo" },
        { label: "GitHub", url: "#", type: "code" },
        { label: "Architecture", url: "#", type: "docs" }
      ]
    },
    {
      title: "Portfolio Website with React",
      description: "Developed a responsive portfolio website using React with TypeScript, deployed on AWS S3 with CloudFront for global content delivery and optimized performance.",
      technologies: ["React", "TypeScript", "AWS S3", "CloudFront", "Route 53", "Tailwind CSS"],
      status: "Live",
      links: [
        { label: "Live Demo", url: "#", type: "demo" },
        { label: "GitHub", url: "#", type: "code" }
      ]
    },
    {
      title: "Server Health Management System",
      description: "Created automated server monitoring and health management system using CloudWatch, Lambda, and SNS for real-time alerts with custom dashboards and automated remediation.",
      technologies: ["CloudWatch", "Lambda", "SNS", "Python", "DynamoDB", "Grafana"],
      status: "In Development",
      links: [
        { label: "Live Demo", url: "#", type: "demo" },
        { label: "GitHub", url: "#", type: "code" }
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Production Ready':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400';
      case 'Live':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400';
      case 'In Development':
        return 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400';
    }
  };

  const getLinkIcon = (type: string) => {
    switch (type) {
      case 'demo': return '🚀';
      case 'code': return '💻';
      case 'docs': return '📋';
      default: return '🔗';
    }
  };

  return (
    <section id="projects" className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-gray-900 transition-all duration-300 relative overflow-hidden">
      {/* Professional background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-400/8 to-purple-600/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-purple-400/8 to-pink-600/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Real-world applications showcasing cloud architecture and DevOps expertise
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group bg-gradient-to-br from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 group-hover:scale-150 transition-transform duration-300"></div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                  {project.status}
                </span>
              </div>

              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 leading-tight">
                {project.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-200 px-3 py-1.5 rounded-full text-xs font-medium group-hover:from-blue-200 group-hover:to-purple-200 dark:group-hover:from-blue-800/50 dark:group-hover:to-purple-800/50 transition-all duration-300 hover:scale-105"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-3">
                {project.links.map((link, linkIndex) => (
                  <a 
                    key={linkIndex}
                    href={link.url}
                    className="group/link inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-medium transition-all duration-300 hover:scale-105 px-3 py-2 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20"
                  >
                    <span className="group-hover/link:scale-110 transition-transform duration-300">
                      {getLinkIcon(link.type)}
                    </span>
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
