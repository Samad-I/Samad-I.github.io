
export const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Cloud Platforms",
      skills: [
        { name: "AWS EC2", level: 70 },
        { name: "AWS S3", level: 65 },
        { name: "AWS VPC", level: 63 },
        { name: "AWS IAM", level: 68 }
      ]
    },
    {
      title: "Containerization & Orchestration",
      skills: [
        { name: "Docker", level: 70 },
        { name: "Kubernetes", level: 60 },
        { name: "EKS", level: 55 }
      ]
    },
    {
      title: "CI/CD & DevOps Tools",
      skills: [
        { name: "Jenkins", level: 68 },
        { name: "AWS CodePipeline", level: 60 },
        { name: "CodeBuild/Deploy", level: 62 }
      ]
    },
    {
      title: "Infrastructure as Code",
      skills: [
        { name: "Terraform", level: 67 },
        { name: "CloudFormation", level: 63 },
        { name: "Ansible", level: 55 }
      ]
    },
    {
      title: "Monitoring & Observability",
      skills: [
        { name: "CloudWatch", level: 65 },
        { name: "CloudTrail", level: 60 },
        { name: "Prometheus", level: 55 },
        { name: "Grafana", level: 58 }
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "RDS", level: 63 },
        { name: "DynamoDB", level: 60 },
        { name: "ElastiCache", level: 55 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200/20 dark:border-gray-700/20">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">{skill.name}</span>
                      <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000 hover:from-blue-600 hover:to-purple-700"
                        style={{ width: `${skill.level}%` }}
                      ></div>
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
