
import { Cloud, Database, Shield } from 'lucide-react';

export const AboutSection = () => {
  const features = [
    {
      icon: Cloud,
      title: "Cloud Enthusiast",
      description: "Passionate about AWS services and cloud architecture"
    },
    {
      icon: Database,
      title: "Infrastructure as Code",
      description: "Learning Terraform and CloudFormation for scalable infrastructure"
    },
    {
      icon: Shield,
      title: "Container Technologies",
      description: "Exploring Docker and Kubernetes for modern application deployment"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              I'm a B.Tech Electrical Engineering graduate from the 2024 batch with a passion for 
              AWS DevOps and cloud infrastructure. As a fresh graduate, I'm eager to apply my 
              theoretical knowledge and hands-on practice in real-world scenarios.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              I have been learning and practicing with AWS services like EC2, S3, VPC, IAM, 
              CloudWatch, RDS, DynamoDB, and more. I'm also gaining proficiency in Infrastructure 
              as Code using Terraform and AWS CloudFormation, along with containerization 
              technologies like Docker and Kubernetes.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              I believe in continuous learning and staying updated with the latest cloud technologies. 
              I'm excited to start my career and contribute to building scalable, secure, and 
              efficient cloud solutions.
            </p>
          </div>

          <div className="grid gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start p-6 bg-gray-50 dark:bg-gray-800 rounded-lg transition-colors hover:shadow-lg hover:scale-105 transition-all duration-300">
                <feature.icon className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-4 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
