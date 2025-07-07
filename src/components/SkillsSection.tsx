
export const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Cloud Platforms",
      icon: "☁️",
      skills: [
        { name: "AWS EC2", level: 70 },
        { name: "AWS S3", level: 65 },
        { name: "AWS VPC", level: 63 },
        { name: "AWS IAM", level: 68 }
      ]
    },
    {
      title: "Containerization & Orchestration",
      icon: "🐳",
      skills: [
        { name: "Docker", level: 70 },
        { name: "Kubernetes", level: 60 },
        { name: "EKS", level: 55 }
      ]
    },
    {
      title: "CI/CD & DevOps Tools",
      icon: "🔧",
      skills: [
        { name: "Jenkins", level: 68 },
        { name: "AWS CodePipeline", level: 60 },
        { name: "CodeBuild/Deploy", level: 62 }
      ]
    },
    {
      title: "Infrastructure as Code",
      icon: "📋",
      skills: [
        { name: "Terraform", level: 67 },
        { name: "CloudFormation", level: 63 },
        { name: "Ansible", level: 55 }
      ]
    },
    {
      title: "Monitoring & Observability",
      icon: "📊",
      skills: [
        { name: "CloudWatch", level: 65 },
        { name: "CloudTrail", level: 60 },
        { name: "Prometheus", level: 55 },
        { name: "Grafana", level: 58 }
      ]
    },
    {
      title: "Databases",
      icon: "🗄️",
      skills: [
        { name: "RDS", level: 63 },
        { name: "DynamoDB", level: 60 },
        { name: "ElastiCache", level: 55 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-400/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 lg:mb-6">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            My expertise across cloud technologies and DevOps practices
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="group bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-2xl p-6 lg:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-200/50 dark:border-gray-700/50 relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Card background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-center mb-6">
                  <div className="text-3xl mb-2">{category.icon}</div>
                </div>
                <h3 className="text-lg lg:text-xl font-semibold text-gray-900 dark:text-white mb-6 text-center group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {category.title}
                </h3>
                
                <div className="space-y-4 lg:space-y-5">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="group/skill">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm lg:text-base text-gray-600 dark:text-gray-300 group-hover/skill:text-blue-600 dark:group-hover/skill:text-blue-400 transition-colors duration-300 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-sm lg:text-base text-blue-600 dark:text-blue-400 font-semibold">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 lg:h-3 overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-1000 ease-out hover:from-blue-600 hover:to-purple-700 relative overflow-hidden skill-bar"
                          style={{ width: `${skill.level}%` }}
                        >
                          <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievement section */}
        <div className="mt-16 lg:mt-20 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <span className="mr-2">🏆</span>
            AWS Certified Cloud Practitioner
          </div>
        </div>
      </div>
    </section>
  );
};
