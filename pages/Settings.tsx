import React from 'react';
import { Header } from '../components/Layout';
import { useTheme } from '../App';

export const Settings = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="bg-background dark:bg-background-dark min-h-full pb-10 transition-colors">
      <Header title="Settings" />
      <div className="max-w-4xl mx-auto p-8 space-y-8">
        
        <section>
          <h2 className="text-xl font-bold mb-4 text-text-primary dark:text-white">Appearance</h2>
          <div className="bg-surface dark:bg-surface-dark rounded-xl shadow-soft dark:shadow-none border border-border dark:border-border-dark p-6">
             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <button 
                  onClick={() => theme === 'dark' && toggleTheme()}
                  className={`p-4 rounded-xl border-2 flex flex-col items-center gap-3 transition-all ${theme === 'light' ? 'border-primary bg-primary/5' : 'border-border dark:border-border-dark hover:border-primary/50'}`}
                >
                   <div className="w-full h-16 rounded-lg shadow-sm border border-border bg-white"></div>
                   <span className={`text-sm font-bold ${theme === 'light' ? 'text-primary' : 'text-text-primary dark:text-gray-400'}`}>Light Mode</span>
                </button>
                <button 
                  onClick={() => theme === 'light' && toggleTheme()}
                  className={`p-4 rounded-xl border-2 flex flex-col items-center gap-3 transition-all ${theme === 'dark' ? 'border-primary bg-primary/5' : 'border-border dark:border-border-dark hover:border-primary/50'}`}
                >
                   <div className="w-full h-16 rounded-lg shadow-sm border border-border bg-slate-900"></div>
                   <span className={`text-sm font-bold ${theme === 'dark' ? 'text-primary' : 'text-text-primary dark:text-gray-400'}`}>Dark Mode</span>
                </button>
             </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4 text-text-primary dark:text-white">Data Management</h2>
          <div className="bg-surface dark:bg-surface-dark rounded-xl shadow-soft dark:shadow-none border border-border dark:border-border-dark p-6">
             <h3 className="font-bold mb-2 text-text-primary dark:text-white">Saved Room Photos</h3>
             <p className="text-sm text-text-secondary dark:text-gray-400 mb-4">Manage your uploaded room photos for previews.</p>
             <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="relative aspect-video rounded-lg overflow-hidden group">
                   <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQKoS1l9YrJVzgyWgzHdjSylItu7xBvo7Mqvx78Ob4dPrsXT0DgqBGzPMuRDNe0RTmK_i84ZZefkVWqSBRYY1uzSMaWC43e8IFBh9HBexlFdq_nTqX7VCdWkHQP1LqA5GpxPQP_ADPOeIASBoCGbJPGnB2rig_U7OqNVLUVcWjtbOZ65Mzl2QhF9T5MoT7UI4dkoBb4rfZeqg4Cfxy_-Z98q3b6gYd_2hXSyqGtttPeJDX_sflaY7gCWk8QB46--kThrOizDRPVhY" className="w-full h-full object-cover" alt="Room" />
                   <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 bg-white rounded-full text-red-500 hover:bg-red-50"><span className="material-symbols-outlined">delete</span></button>
                   </div>
                </div>
                <div className="aspect-video rounded-lg border-2 border-dashed border-border dark:border-border-dark flex flex-col items-center justify-center text-text-secondary dark:text-gray-400 cursor-pointer hover:border-primary hover:text-primary transition-colors">
                   <span className="material-symbols-outlined text-3xl mb-1">add_photo_alternate</span>
                   <span className="text-xs font-bold">Upload New</span>
                </div>
             </div>
          </div>
        </section>

        <section>
          <div className="bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/30 rounded-xl p-6 flex items-center justify-between">
             <div>
                <h3 className="text-red-800 dark:text-red-400 font-bold">Delete Account</h3>
                <p className="text-red-600 dark:text-red-500 text-sm">Permanently delete your account and all data.</p>
             </div>
             <button className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-red-700">Delete</button>
          </div>
        </section>

      </div>
    </div>
  );
};