
export const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Cloud Platforms",
      icon: "☁️",
      skills: [
        { name: "AWS EC2", level: 75 },
        { name: "AWS S3", level: 70 },
        { name: "AWS VPC", level: 68 },
        { name: "AWS IAM", level: 72 }
      ]
    },
    {
      title: "Containerization & Orchestration",
      icon: "🐳",
      skills: [
        { name: "Docker", level: 75 },
        { name: "Kubernetes", level: 65 },
        { name: "EKS", level: 60 }
      ]
    },
    {
      title: "CI/CD & DevOps Tools",
      icon: "🔧",
      skills: [
        { name: "Jenkins", level: 72 },
        { name: "AWS CodePipeline", level: 65 },
        { name: "CodeBuild/Deploy", level: 67 }
      ]
    },
    {
      title: "Infrastructure as Code",
      icon: "📋",
      skills: [
        { name: "Terraform", level: 70 },
        { name: "CloudFormation", level: 68 },
        { name: "Ansible", level: 60 }
      ]
    },
    {
      title: "Monitoring & Observability",
      icon: "📊",
      skills: [
        { name: "CloudWatch", level: 70 },
        { name: "CloudTrail", level: 65 },
        { name: "Prometheus", level: 60 },
        { name: "Grafana", level: 63 }
      ]
    },
    {
      title: "Databases",
      icon: "🗄️",
      skills: [
        { name: "RDS", level: 68 },
        { name: "DynamoDB", level: 65 },
        { name: "ElastiCache", level: 60 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 transition-all duration-300 relative overflow-hidden">
      {/* Enhanced background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-gradient-to-br from-purple-400/10 to-pink-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Proficiency in modern cloud technologies and DevOps practices
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="group bg-white/90 dark:bg-gray-900/90 backdrop-blur-md rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 border border-gray-200/50 dark:border-gray-700/50 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-6">
                <span className="text-3xl mr-3 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </span>
                <h3 className="text-lg lg:text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {category.title}
                </h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group/skill">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-gray-600 dark:text-gray-300 group-hover/skill:text-blue-600 dark:group-hover/skill:text-blue-400 transition-colors duration-200">
                        {skill.name}
                      </span>
                      <span className="text-sm font-bold text-blue-600 dark:text-blue-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden shadow-inner">
                      <div 
                        className="bg-gradient-to-r from-blue-500 via-purple-500 to-purple-600 h-2.5 rounded-full transition-all duration-1000 hover:from-blue-600 hover:via-purple-600 hover:to-purple-700 shadow-sm relative overflow-hidden animate-skill-fill"
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${(index * 0.1) + (skillIndex * 0.2)}s`,
                          animationDuration: '1.5s',
                          animationFillMode: 'both'
                        }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
