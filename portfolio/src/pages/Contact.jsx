import React from 'react';
import { useReveal } from '../components/UI';

export default function Contact() {
  useReveal();

  return (
    <main className="relative z-10 w-full max-w-4xl mx-auto px-4 pt-40 pb-32 min-h-[90vh] flex flex-col justify-center">
      <div className="reveal">
        <h1 className="text-5xl md:text-8xl font-medium tracking-tight mb-8">Let's Connect.</h1>
        <p className="text-2xl text-white/50 mb-16 max-w-2xl">
          I'm currently looking for new opportunities in Software Engineering and Machine Learning. My inbox is always open.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 reveal reveal-delay-1">
        <a href="mailto:rachit.mangawa.ug23@nsut.ac.in" className="group p-8 rounded-4xl bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-[1.02]">
          <h3 className="text-xl font-medium mb-2">Email</h3>
          <p className="text-white/50 group-hover:text-white transition-colors">rachit.mangawa.ug23@nsut.ac.in</p>
        </a>
        <a href="https://www.linkedin.com/in/rachit-mangawa/" target="_blank" rel="noreferrer" className="group p-8 rounded-4xl bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-[1.02]">
          <h3 className="text-xl font-medium mb-2">LinkedIn</h3>
          <p className="text-white/50 group-hover:text-white transition-colors">Connect with me</p>
        </a>
        <a href="https://github.com/IDKHowToCodeFR" target="_blank" rel="noreferrer" className="group p-8 rounded-4xl bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-[1.02]">
          <h3 className="text-xl font-medium mb-2">GitHub</h3>
          <p className="text-white/50 group-hover:text-white transition-colors">View my repositories</p>
        </a>
        <div className="p-8 rounded-4xl bg-white/5 ring-1 ring-white/10">
          <h3 className="text-xl font-medium mb-2">Location</h3>
          <p className="text-white/50">NSUT, New Delhi, India</p>
        </div>
      </div>
    </main>
  );
}
