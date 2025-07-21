
import React from 'react';
import { Github, Linkedin, Instagram, Facebook, Mail, Phone, MapPin, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com',
      icon: Github,
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com',
      icon: Linkedin,
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com',
      icon: Instagram,
    },
    {
      name: 'Facebook',
      url: 'https://facebook.com',
      icon: Facebook,
    },
  ];

  const contactInfo = [
    {
      icon: Mail,
      text: 'ahsan@example.com',
      href: 'mailto:ahsan@example.com',
    },
    {
      icon: Phone,
      text: '+92 XXX XXXXXXX',
      href: 'tel:+92XXXXXXXXX',
    },
    {
      icon: MapPin,
      text: 'Karachi, Pakistan',
      href: '#',
    },
  ];

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand & Description */}
          <div className="col-span-1">
            <div className="mb-4">
              <span className="text-3xl font-bold text-gradient">Muhammad Ahsan</span>
              <p className="text-muted-foreground mt-2">
                AI & ML Engineer passionate about creating intelligent solutions for tomorrow's challenges.
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold text-foreground mb-4">Contact</h3>
            <div className="space-y-3">
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  <contact.icon className="w-4 h-4" />
                  <span>{contact.text}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold text-foreground mb-4">Connect</h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-background border border-border rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-200 glow-effect group"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-muted-foreground text-sm">
              © {currentYear} Muhammad Ahsan. All rights reserved.
            </div>
            <div className="flex items-center gap-1 text-muted-foreground text-sm">
              Made with <Heart className="w-4 h-4 text-red-500" /> using React & Three.js
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
