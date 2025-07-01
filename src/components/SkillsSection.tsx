
export const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Cloud Platforms",
      skills: [
        { name: "AWS EC2", level: 90 },
        { name: "AWS S3", level: 95 },
        { name: "AWS VPC", level: 85 },
        { name: "AWS IAM", level: 90 }
      ]
    },
    {
      title: "Containerization & Orchestration",
      skills: [
        { name: "Docker", level: 90 },
        { name: "Kubernetes", level: 85 },
        { name: "EKS", level: 80 },
        { name: "Container Registry", level: 85 }
      ]
    },
    {
      title: "CI/CD & DevOps Tools",
      skills: [
        { name: "Jenkins", level: 90 },
        { name: "GitHub Actions", level: 85 },
        { name: "AWS CodePipeline", level: 80 },
        { name: "CodeBuild/Deploy", level: 85 }
      ]
    },
    {
      title: "Infrastructure as Code",
      skills: [
        { name: "Terraform", level: 90 },
        { name: "CloudFormation", level: 85 },
        { name: "Ansible", level: 80 },
        { name: "CloudWatch", level: 85 }
      ]
    },
    {
      title: "Monitoring & Observability",
      skills: [
        { name: "CloudWatch", level: 90 },
        { name: "CloudTrail", level: 85 },
        { name: "Prometheus", level: 75 },
        { name: "Grafana", level: 80 }
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "RDS", level: 85 },
        { name: "DynamoDB", level: 80 },
        { name: "ElastiCache", level: 75 },
        { name: "Aurora", level: 80 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-100 dark:bg-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Skills
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm transition-colors">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-gray-600 dark:text-gray-300">{skill.name}</span>
                      <span className="text-sm text-blue-600 dark:text-blue-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-blue-600 dark:bg-blue-400 h-2 rounded-full transition-all duration-1000"
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
