
import React from 'react';
import { ArrowDown, Github, Linkedin, Instagram, Facebook } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
                <span className="text-gradient">Muhammad</span>
                <br />
                <span className="text-foreground">Ahsan</span>
              </h1>
              <div className="text-xl md:text-2xl lg:text-3xl font-semibold mb-6">
                <span className="text-primary">AI & ML</span>
                <span className="text-foreground"> Engineer</span>
              </div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Passionate AI & Machine Learning Engineer currently pursuing BSAI at Quest University. 
                Specializing in cutting-edge artificial intelligence solutions and innovative data-driven applications.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 justify-center lg:justify-start mb-8">
              <a 
                href="https://github.com/MrAhsan777" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-card border border-border rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-200 glow-effect group"
              >
                <Github className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
              </a>
              <a 
                href="https://www.linkedin.com/in/ahsanarain777/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-card border border-border rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-200 glow-effect group"
              >
                <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
              </a>
              <a 
                href="https://www.instagram.com/ahsanarain_777/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-card border border-border rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-200 glow-effect group"
              >
                <Instagram className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
              </a>
              <a 
                href="https://web.facebook.com/ahsan.arain.39501/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-card border border-border rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-200 glow-effect group"
              >
                <Facebook className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
              </a>
            </div>

            {/* CTA Button */}
            <button
              onClick={scrollToAbout}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary/90 transition-all duration-200 glow-effect animate-pulse-glow"
            >
              Explore My Work
              <ArrowDown className="w-5 h-5 animate-bounce" />
            </button>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary glow-effect card-3d">
                <img
                  src="/image-uploads/64ff281e-f82d-4847-809f-cd959c9ffb49.png"
                  alt="Muhammad Ahsan"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full animate-float"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-primary/30 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
