
import React from 'react';
import { Github, ExternalLink, Brain, Database, Bot } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Face-Detection App',
      description: 'Facial recognition app with streamlit for gui , it has both live and custom features and based on known_faces it detects the faces and tell who he is or if he dont known any faces it simply said unknown face its still under development but here are some results',
      image: '3.jpg',
      technologies: ['Python', 'Yolo V5', 'Stremlit'],
      github: 'https://github.com/MrAhsan777/face-detection-app---python',
      demo: 'https://demo.com',
      icon: Bot,
    },
    {
      title: 'Predictive Analytics Dashboard',
      description: 'Data visualization and predictive modeling platform that analyzes trends and forecasts future outcomes using machine learning algorithms.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'Dash'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      icon: Database,
    },
    {
      title: 'Computer Vision System',
      description: 'Real-time object detection and classification system using deep learning techniques for automated visual analysis.',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop',
      technologies: ['Python', 'OpenCV', 'PyTorch', 'YOLO'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      icon: Brain,
    },
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            My <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore my portfolio of AI and machine learning projects that demonstrate 
            practical applications of cutting-edge technology and innovative problem-solving approaches.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="bg-card border border-border rounded-2xl overflow-hidden card-3d hover:glow-effect transition-all duration-300 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <project.icon className="w-12 h-12 text-primary" />
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-gradient transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-background border border-border rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-200 text-sm font-medium"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-200 text-sm font-medium"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Projects Button */}
        <div className="text-center mt-12">
          <a
  href="https://github.com/MrAhsan777?tab=repositories"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 bg-card border border-border px-8 py-4 rounded-full font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-200 glow-effect"
>
  <Github className="w-5 h-5" />
  View All Projects on GitHub
</a>

        </div>
      </div>
    </section>
  );
};

export default Projects;
