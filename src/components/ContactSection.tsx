
import { Mail, Phone, Globe, Github } from 'lucide-react';

export const ContactSection = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "abutalaha.inamdar@email.com",
      href: "mailto:abutalaha.inamdar@email.com"
    },
    {
      icon: Phone, 
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567"
    },
    {
      icon: Globe,
      label: "Portfolio",
      value: "samad.dev",
      href: "#"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/samad",
      href: "#"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12 animate-fade-in">
            <p className="text-xl text-muted-foreground leading-relaxed mb-6">
              I'm always interested in discussing new opportunities, innovative projects, 
              or collaborating on cloud infrastructure solutions.
            </p>
            <p className="text-lg text-muted-foreground">
              Whether you're looking for an AWS DevOps Engineer or want to chat about 
              the latest cloud technologies, feel free to reach out!
            </p>
          </div>

          {/* Contact Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.href}
                className="skill-card text-center group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <method.icon className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                <h4 className="font-semibold text-foreground mb-2">{method.label}</h4>
                <p className="text-sm text-muted-foreground">{method.value}</p>
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="animate-fade-in">
            <a
              href="mailto:abutalaha.inamdar@email.com"
              className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1"
            >
              Let's Work Together
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-24 pt-8 border-t border-border text-center">
        <p className="text-muted-foreground">
          © 2024 Abutalaha Inamdar. Built with passion for cloud technologies.
        </p>
      </div>
    </section>
  );
};
