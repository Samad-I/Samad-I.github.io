
export const CertificationsSection = () => {
  const certifications = [
    {
      name: "AWS Solution Architect",
      provider: "Amazon Web Services",
      date: "2023",
      badge: "🏆"
    },
    {
      name: "AWS DevOps Engineer",
      provider: "Amazon Web Services", 
      date: "2023",
      badge: "🏆"
    },
    {
      name: "AWS Cloud Practitioner",
      provider: "Amazon Web Services",
      date: "2022", 
      badge: "🏆"
    },
    {
      name: "Certified Kubernetes Administrator",
      provider: "Cloud Native Computing Foundation",
      date: "2022",
      badge: "🏆"
    },
    {
      name: "AWS Certified Cloud Security",
      provider: "Amazon Web Services",
      date: "2023",
      badge: "🏆"
    },
    {
      name: "AWS SysOps Administrator",
      provider: "Amazon Web Services", 
      date: "2022",
      badge: "🏆"
    },
    {
      name: "AWS Certified Developer",
      provider: "Amazon Web Services",
      date: "2022",
      badge: "🏆"
    },
    {
      name: "AWS Certified Solutions Architect Pro",
      provider: "Amazon Web Services",
      date: "2023",
      badge: "🏆"
    }
  ];

  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            AWS Certifications
          </h2>
          <div className="bg-yellow-400 text-yellow-900 inline-block px-6 py-3 rounded-lg font-semibold mb-8">
            🏆 AWS DevOps and Solution Architect
            <br />
            <span className="text-sm">Certified in AWS architecture and DevOps practices</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-all">
              <div className="text-4xl mb-4">{cert.badge}</div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                {cert.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                {cert.provider}
              </p>
              <p className="text-blue-600 dark:text-blue-400 text-sm font-medium">
                {cert.date}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
