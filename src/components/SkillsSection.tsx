
import { Cloud, Zap } from 'lucide-react';

export const SkillsSection = () => {
  const awsServices = [
    "EC2 – Virtual servers",
    "S3 – Storage",
    "VPC – Networking", 
    "IAM – Users, roles, policies",
    "CloudWatch – Monitoring and logging",
    "RDS & DynamoDB – Databases",
    "ELB & Auto Scaling",
    "CloudTrail"
  ];

  const devopsTools = [
    "Docker – Containers",
    "Kubernetes (EKS) – Container orchestration", 
    "Terraform / AWS CloudFormation – Infrastructure as Code (IaC)",
    "Jenkins / GitHub Actions / AWS CodePipeline – CI/CD",
    "AWS CodeBuild / CodeDeploy"
  ];

  const skillCategories = [
    {
      title: "AWS Cloud Services",
      icon: Cloud,
      description: "Comprehensive experience with AWS core services",
      skills: awsServices,
      gradient: "from-blue-500 to-blue-600"
    },
    {
      title: "DevOps Tools & Practices", 
      icon: Zap,
      description: "Modern DevOps toolchain and automation",
      skills: devopsTools,
      gradient: "from-indigo-500 to-indigo-600"
    }
  ];

  return (
    <section id="skills" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Technical Skills</h2>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="skill-card group animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${category.gradient} mr-4`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
                    <p className="text-muted-foreground text-sm">{category.description}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex items-start"
                    >
                      <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span className="text-muted-foreground leading-relaxed">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Tech Badges */}
          <div className="mt-16 text-center animate-fade-in">
            <h3 className="text-2xl font-semibold text-foreground mb-8">Technologies I Work With</h3>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {[
                "AWS", "Docker", "Kubernetes", "Terraform", "Jenkins", "GitHub Actions",
                "CloudFormation", "EC2", "S3", "VPC", "IAM", "CloudWatch", "RDS",
                "DynamoDB", "ELB", "Auto Scaling", "CodePipeline", "CodeBuild", "CodeDeploy"
              ].map((tech, index) => (
                <span
                  key={index}
                  className="tech-badge animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
