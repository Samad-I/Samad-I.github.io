
import { Cloud, Database, Shield } from 'lucide-react';

export const AboutSection = () => {
  const features = [
    {
      icon: Cloud,
      title: "Cloud Enthusiast",
      description: "Passionate about AWS services and cloud architecture with hands-on experience in EC2, S3, VPC, and more"
    },
    {
      icon: Database,
      title: "Infrastructure as Code",
      description: "Proficient in Terraform and CloudFormation for scalable, maintainable infrastructure solutions"
    },
    {
      icon: Shield,
      title: "Container Technologies",
      description: "Experienced with Docker and Kubernetes for modern application deployment and orchestration"
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-gray-900 transition-all duration-300 relative overflow-hidden">
      {/* Professional background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-blue-400/5 to-purple-600/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gradient-to-br from-indigo-400/5 to-cyan-600/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                I'm a <span className="font-semibold text-blue-600 dark:text-blue-400">B.Tech Electrical Engineering graduate</span> from the 2024 batch with a passion for 
                AWS DevOps and cloud infrastructure. As a fresh graduate, I'm eager to apply my 
                theoretical knowledge and hands-on practice in real-world scenarios.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                I have been learning and practicing with <span className="font-semibold text-purple-600 dark:text-purple-400">AWS services</span> like EC2, S3, VPC, IAM, 
                CloudWatch, RDS, DynamoDB, and more. I'm also gaining proficiency in Infrastructure 
                as Code using Terraform and AWS CloudFormation, along with containerization 
                technologies like Docker and Kubernetes.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                I believe in <span className="font-semibold text-indigo-600 dark:text-indigo-400">continuous learning</span> and staying updated with the latest cloud technologies. 
                I'm excited to start my career and contribute to building scalable, secure, and 
                efficient cloud solutions.
              </p>
            </div>
          </div>

          <div className="grid gap-6 animate-fade-in">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="group flex items-start p-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-xl border border-gray-200/50 dark:border-gray-700/50 shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 backdrop-blur-sm"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
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
