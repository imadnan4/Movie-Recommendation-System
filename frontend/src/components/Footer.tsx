import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-20 pb-8 animate-fadeUp">
      <div className="max-w-4xl mx-auto">
        <div className="backdrop-blur-xl bg-white/10 rounded-2xl p-8 shadow-xl border border-white/20">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">Adnan Ahmad</h3>
            <p className="text-gray-400 mb-4">Machine Learning Engineer & Full Stack Developer</p>
            
            <div className="flex justify-center gap-4 mb-6">
              <a href="https://github.com/imadnan4" 
                 className="p-2 rounded-full hover:bg-white/10 transition-colors"
                 target="_blank" 
                 rel="noopener noreferrer">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/adnan-ahmad-651b99222/" 
                 className="p-2 rounded-full hover:bg-white/10 transition-colors"
                 target="_blank" 
                 rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:priadn544@gmail.com" 
                 className="p-2 rounded-full hover:bg-white/10 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>

            <div className="text-sm text-gray-400">
              <p>© {currentYear} Movie Recommender. All rights reserved.</p>
              <p className="mt-1">Built with React, TypeScript, and TailwindCSS</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}