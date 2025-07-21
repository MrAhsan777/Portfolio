
import React from 'react';
import { GraduationCap, Brain, Code, Zap } from 'lucide-react';

const About = () => {
  const skills = [
    {
      icon: Brain,
      title: 'Artificial Intelligence',
      description: 'Deep expertise in AI algorithms, neural networks, and machine learning frameworks.',
    },
    {
      icon: Code,
      title: 'Machine Learning',
      description: 'Proficient in Python, TensorFlow, PyTorch, and data science libraries.',
    },
    {
      icon: Zap,
      title: 'Data Science',
      description: 'Advanced analytics, statistical modeling, and data visualization techniques.',
    },
    {
      icon: GraduationCap,
      title: 'Continuous Learning',
      description: 'Currently pursuing BSAI at Quest University, staying updated with latest trends.',
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a dedicated AI & Machine Learning Engineer with a passion for creating intelligent solutions 
            that solve real-world problems. Currently in my 2nd year of BSAI at Quest University, 
            I combine academic knowledge with practical experience to deliver innovative AI applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.title}
              className="bg-card border border-border rounded-2xl p-6 card-3d hover:glow-effect transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-4 bg-primary/20 rounded-full mb-4 group-hover:bg-primary/30 transition-colors duration-200">
                  <skill.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {skill.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {skill.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Education Highlight */}
        <div className="mt-16 bg-card border border-border rounded-3xl p-8 card-3d glow-effect">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center">
                <GraduationCap className="w-10 h-10 text-primary" />
              </div>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2 text-gradient">
                Bachelor of Science in Artificial Intelligence
              </h3>
              <p className="text-lg text-muted-foreground mb-2">
                Quest University | 2nd Year Student
              </p>
              <p className="text-foreground">
                Focusing on advanced AI concepts, machine learning algorithms, and practical applications 
                in real-world scenarios. Maintaining excellent academic performance while working on 
                innovative projects and research.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
