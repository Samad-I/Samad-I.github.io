
export const ProjectsSection = () => {
  const projects = [
    {
      title: "E2E2E2 serverless Architecture",
      description: "Built a complete serverless application using AWS Lambda, API Gateway, and DynamoDB with automated CI/CD pipeline.",
      technologies: ["AWS Lambda", "API Gateway", "DynamoDB", "CloudFormation"],
      links: [
        { label: "Live Demo", url: "#" },
        { label: "GitHub", url: "#" },
        { label: "Architecture", url: "#" }
      ]
    },
    {
      title: "Portfolio website using react",
      description: "Developed a responsive portfolio website using React, deployed on AWS S3 with CloudFront for global content delivery.",
      technologies: ["React", "AWS S3", "CloudFront", "Route 53"],
      links: [
        { label: "Live Demo", url: "#" },
        { label: "GitHub", url: "#" }
      ]
    },
    {
      title: "Server Health Management",
      description: "Created automated server monitoring and health management system using CloudWatch, Lambda, and SNS for real-time alerts.",
      technologies: ["CloudWatch", "Lambda", "SNS", "Python"],
      links: [
        { label: "Live Demo", url: "#" },
        { label: "GitHub", url: "#" }
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200/20 dark:border-gray-700/20 group">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-200">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm group-hover:bg-blue-200 dark:group-hover:bg-blue-800/70 transition-colors duration-200"
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
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:underline text-sm font-medium transition-colors duration-200"
                  >
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
