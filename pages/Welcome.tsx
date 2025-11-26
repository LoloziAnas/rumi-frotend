import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logo = () => (
  <svg width="40" height="40" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="32" height="32" rx="8" className="fill-primary"/>
    <path d="M16 6L24 10V22L16 26L8 22V10L16 6Z" fill="white" fillOpacity="0.2"/>
    <path d="M16 10L22 13.5V20.5L16 24L10 20.5V13.5L16 10Z" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
    <path d="M16 14V19M13.5 16.5H18.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-surface dark:bg-background-dark flex flex-col transition-colors">
      <header className="flex items-center justify-between px-6 py-4 border-b border-border dark:border-border-dark">
        <div className="flex items-center gap-3 text-primary">
          <Logo />
          <span className="font-bold text-xl text-text-primary dark:text-white font-serif">AI rumi</span>
        </div>
        <div className="flex gap-4">
          <button onClick={() => navigate('/login')} className="px-4 py-2 text-sm font-semibold text-text-secondary dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">Log In</button>
          <button onClick={() => navigate('/signup')} className="px-4 py-2 text-sm font-bold bg-primary text-white rounded-lg hover:bg-primary-dark shadow-soft hover:shadow-glow transition-all">Get Started</button>
        </div>
      </header>

      <main className="flex-1 flex flex-col lg:flex-row items-center justify-center p-6 lg:p-20 gap-12 lg:gap-20 relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-secondary/20 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-xl space-y-8 z-10">
          <h1 className="text-5xl lg:text-7xl font-extrabold text-text-primary dark:text-white tracking-tight leading-tight font-serif">
            AI-Powered Art, <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Uniquely Yours.</span>
          </h1>
          <p className="text-xl text-text-secondary dark:text-gray-300 leading-relaxed">
            Generate custom artwork with AI and visualize it in your own space. Create endless art styles from simple text, and fine-tune colors, frames, and sizes to match your decor.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
             <Feature icon="auto_awesome" title="Generate" desc="Endless styles from text" />
             <Feature icon="visibility" title="Visualize" desc="Live room preview" />
             <Feature icon="tune" title="Customize" desc="Fine-tune every detail" />
          </div>
          <div className="pt-8">
            <button onClick={() => navigate('/signup')} className="flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-primary-dark transition-all shadow-soft-lg hover:shadow-glow hover:scale-105">
              Start Creating <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </div>

        <div className="relative w-full max-w-lg aspect-[4/5] lg:aspect-square bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl z-10 border-4 border-white dark:border-gray-700">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD20fCiRMpo_JLCHiiD7RR32Q1GBDT-yeaeORrQqidtfh1zgGqVf2bzVbfC8ksXUusEwZfSHSrnpfNVJ-VKNs_-8b2rNrvnduEjKjdv76B6Z0w2LD4npE-30YNeFw3sXRTWDL7MiArtBVeapy_TFuedaZlVZxwDlDKwnpr3Ht5JMsbncKCVROqRIkIoZx4bE1lxJ-vH9KX-UXhsh0mjAwyMuYO57gabZJyQussgUs24BeaN9AOkbUo-KHxfdYJhqb6Q8a1DhXWHK-Q"
            alt="Room Preview"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-8">
             <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl text-white">
                <p className="font-bold text-lg">See it before you buy it</p>
                <p className="text-sm opacity-90">Augmented reality preview in your actual room.</p>
             </div>
          </div>
        </div>
      </main>
    </div>
  );
};

const Feature = ({ icon, title, desc }: { icon: string, title: string, desc: string }) => (
  <div className="p-4 bg-white/50 dark:bg-surface-dark/50 backdrop-blur-sm rounded-xl border border-border dark:border-border-dark hover:border-primary/50 transition-colors">
    <span className="material-symbols-outlined text-primary mb-2 bg-primary/10 p-2 rounded-lg">{icon}</span>
    <h3 className="font-bold text-text-primary dark:text-white">{title}</h3>
    <p className="text-xs text-text-secondary dark:text-gray-400">{desc}</p>
  </div>
);