
import { Server, Database, Shield, Monitor } from 'lucide-react';

export const AboutSection = () => {
  const highlights = [
    {
      icon: Server,
      title: "Cloud Infrastructure",
      description: "Expert in AWS services and infrastructure automation"
    },
    {
      icon: Database,
      title: "DevOps Practices",
      description: "CI/CD pipelines and deployment automation"
    },
    {
      icon: Shield,
      title: "Security & Monitoring",
      description: "Implementation of secure and monitored systems"
    },
    {
      icon: Monitor,
      title: "Container Orchestration",
      description: "Docker and Kubernetes expertise for scalable applications"
    }
  ];

  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Content */}
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">
                Passionate AWS DevOps Engineer
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm Abutalaha Inamdar, known as <span className="text-primary font-medium">Samad</span> among my peers. 
                With a deep passion for cloud technologies and automation, I specialize in building scalable, 
                secure, and efficient infrastructure solutions on AWS.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My expertise spans across the entire DevOps lifecycle, from infrastructure provisioning 
                with Terraform to implementing robust CI/CD pipelines that enable teams to deliver 
                software faster and more reliably.
              </p>
            </div>

            <div className="pt-4">
              <h4 className="text-xl font-semibold text-foreground mb-4">What I Focus On:</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Infrastructure as Code (IaC) implementation
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Automated CI/CD pipeline development
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Container orchestration and microservices
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Cloud security and monitoring solutions
                </li>
              </ul>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-2 gap-6 animate-slide-in-right">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="skill-card text-center group"
              >
                <item.icon className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
