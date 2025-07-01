
export const WorkExperienceSection = () => {
  const experiences = [
    {
      title: "Senior DevOps Engineer",
      company: "Tech Solutions Inc.",
      period: "2022 - Present",
      description: "Led cloud infrastructure modernization initiatives, implemented CI/CD pipelines using AWS CodePipeline and Jenkins, and managed containerized applications with Kubernetes on EKS. Achieved 40% reduction in deployment time and 99.9% uptime.",
      technologies: ["AWS", "Kubernetes", "Terraform", "Jenkins", "Docker"]
    },
    {
      title: "DevOps Engineer",
      company: "Innovation Labs",
      period: "2020 - 2022",
      description: "Designed and implemented automated deployment pipelines, managed AWS infrastructure including EC2, S3, RDS, and VPC configurations. Implemented monitoring solutions using CloudWatch and reduced incident response time by 60%.",
      technologies: ["AWS", "CloudFormation", "Python", "CloudWatch", "GitHub Actions"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Work Experience
          </h2>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 transition-colors">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                    {exp.company}
                  </p>
                </div>
                <span className="text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-700 px-4 py-2 rounded-full text-sm">
                  {exp.period}
                </span>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                {exp.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
