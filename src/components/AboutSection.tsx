
import { Cloud, Database, Shield, Users, Award, Target } from 'lucide-react';

export const AboutSection = () => {
  const features = [
    {
      icon: Cloud,
      title: "Cloud Enthusiast",
      description: "Passionate about AWS services and cloud architecture with hands-on experience"
    },
    {
      icon: Database,
      title: "Infrastructure as Code",
      description: "Expert in Terraform and CloudFormation for scalable infrastructure management"
    },
    {
      icon: Shield,
      title: "Container Technologies",
      description: "Proficient in Docker and Kubernetes for modern application deployment"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Strong team player with excellent communication and project management skills"
    },
    {
      icon: Award,
      title: "Certified Professional",
      description: "AWS certified with continuous learning mindset and industry best practices"
    },
    {
      icon: Target,
      title: "Results Driven",
      description: "Focused on delivering efficient, secure, and scalable cloud solutions"
    }
  ];

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-900 transition-colors relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-900/10 dark:to-purple-900/10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 lg:mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Passionate about transforming ideas into scalable cloud solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          <div className="space-y-6">
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base sm:text-lg">
              I'm a B.Tech Electrical Engineering graduate from the 2024 batch with a passion for 
              AWS DevOps and cloud infrastructure. As a fresh graduate, I'm eager to apply my 
              theoretical knowledge and hands-on practice in real-world scenarios.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base sm:text-lg">
              I have been learning and practicing with AWS services like EC2, S3, VPC, IAM, 
              CloudWatch, RDS, DynamoDB, and more. I'm also gaining proficiency in Infrastructure 
              as Code using Terraform and AWS CloudFormation, along with containerization 
              technologies like Docker and Kubernetes.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base sm:text-lg">
              I believe in continuous learning and staying updated with the latest cloud technologies. 
              I'm excited to start my career and contribute to building scalable, secure, and 
              efficient cloud solutions.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-6">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">50+</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Hours of AWS Practice</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">10+</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Projects Completed</div>
              </div>
              <div className="text-center col-span-2 sm:col-span-1">
                <div className="text-2xl sm:text-3xl font-bold text-green-600 dark:text-green-400 mb-2">5+</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">AWS Services Mastered</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="group p-4 lg:p-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
