
import React from 'react';
import { Award, Calendar, ExternalLink } from 'lucide-react';

const Certificates = () => {
  const certificates = [
    {
      title: 'Machine Learning Specialization',
      issuer: 'Stanford University | Coursera',
      date: '2024',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
      description: 'Comprehensive course covering supervised learning, unsupervised learning, and best practices in machine learning.',
      credentialUrl: 'https://coursera.org',
    },
    {
      title: 'Deep Learning Specialization',
      issuer: 'DeepLearning.AI | Coursera',
      date: '2024',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop',
      description: 'Advanced deep learning techniques including neural networks, CNNs, RNNs, and transformer models.',
      credentialUrl: 'https://coursera.org',
    },
    {
      title: 'AI for Everyone',
      issuer: 'DeepLearning.AI | Coursera',
      date: '2023',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop',
      description: 'Foundational understanding of AI technologies and their applications in business and society.',
      credentialUrl: 'https://coursera.org',
    },
    {
      title: 'Python for Data Science',
      issuer: 'IBM | Coursera',
      date: '2023',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
      description: 'Comprehensive Python programming course focused on data analysis and visualization techniques.',
      credentialUrl: 'https://coursera.org',
    },
  ];

  return (
    <section id="certificates" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Certificates & <span className="text-gradient">Achievements</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Continuous learning and professional development through industry-recognized certifications 
            from leading institutions and technology companies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificates.map((cert, index) => (
            <div
              key={cert.title}
              className="bg-card border border-border rounded-2xl overflow-hidden card-3d hover:glow-effect transition-all duration-300 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="md:flex">
                {/* Certificate Image */}
                <div className="md:w-1/3 relative overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-48 md:h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Award className="w-8 h-8 text-primary" />
                  </div>
                </div>

                {/* Certificate Content */}
                <div className="md:w-2/3 p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-gradient transition-colors duration-200">
                      {cert.title}
                    </h3>
                    <div className="flex items-center gap-1 text-primary text-sm font-medium">
                      <Calendar className="w-4 h-4" />
                      {cert.date}
                    </div>
                  </div>

                  <p className="text-primary font-medium mb-3">
                    {cert.issuer}
                  </p>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {cert.description}
                  </p>

                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-200 text-sm font-medium"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Credential
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievement Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-card border border-border rounded-2xl p-6 text-center card-3d glow-effect">
            <div className="text-3xl font-bold text-gradient mb-2">10+</div>
            <div className="text-muted-foreground">Certificates Earned</div>
          </div>
          <div className="bg-card border border-border rounded-2xl p-6 text-center card-3d glow-effect">
            <div className="text-3xl font-bold text-gradient mb-2">3+</div>
            <div className="text-muted-foreground">Years of Learning</div>
          </div>
          <div className="bg-card border border-border rounded-2xl p-6 text-center card-3d glow-effect">
            <div className="text-3xl font-bold text-gradient mb-2">5+</div>
            <div className="text-muted-foreground">Specializations</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
