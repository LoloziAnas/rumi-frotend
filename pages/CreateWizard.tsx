import React, { useState, useEffect } from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import { Header } from '../components/Layout';
import { ArtStyle, FrameType, AspectRatio, GeneratedImage } from '../types';

// Mock Data
const STYLES: ArtStyle[] = [
  { id: '1', name: 'Abstract', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCE517IoKZGCrnBK9kUUA_Yfk4aA5knb2ZgZHG5jsIeU0WgoCy-CJA-PA4PFgAqiV8LOeamriqkYqyt6E4zzKDs5r6i6zd2sE0d5c0-cXkAPUyQ1oOsz5aG72p9lQ7aAWvAD0njIwbPdo1nI2FfVRYBLZLRhRfgQMmlPeYqinH58Z-0GCtcAUh5vN__HFd9qKQ9__ioorXqcRWIanfRcYjylp9HvQUJm6sjJq2dglnVMjA-0kcbIEDJuVoVvwrR_mqjXTDEdLsLnq0', description: 'Vibrant swirls' },
  { id: '2', name: 'Minimalist', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDc5dyG51ieD5xOkttLiBlZhxYH_0BHZVUsjW07WCZIxRWQB-OjjJWrzHGO9Yb8Twzx0d_q5cdGf3hSZhc7ssKoRQvzZk_l_pEPvhBmqwjNZ6-EjD_wSwRiRJgpn5Eqzb7S2qj_UwPJD8eldMpdsWpOltV28UBvwMApHwCAUiVr_Oe3hvQowiNLvnCnndn5BQAeEPAf_vDCYfBhRuUXr7bjKaOVZZiOUs_mRZsdA5_JOitUwzN-a4zIWt2Nx0JnybMWa-MohiFLNE8', description: 'Clean and simple' },
  { id: '3', name: 'Modern', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAdr8BnjPFFzyGv5CL8noNzsUGO7XAIowCA-ouU81eumkgV4DNi0622B_yvhoxuTARz2WeLdnoRnXJ_0VsU_a4TMvfuEZxYTgx0lVxpOLlpHQLGi8TDOZWSif3vnpBrt4b0EKNrbtT9-FP2xzLRQDk4yAwFE7GKedHJeUuqRH9zmzxf81VGr98LxKsxbea2dq6aAPRtX-3RyRqe4rEGxRTvGFbDBPjkFtl3Pk6fYLJHKepiWhZGIt0Cb9I51P3jNAGW4CNNLE1he8U', description: 'Sleek geometric' },
  { id: '4', name: 'Nature', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBOfvZdsuLbNppmipCT9ixsNeX1Z76W9lUdQu_6tpn_-JCu-Vrrc4UDTQpSBfXrTTUsdcqRfgEgz0Dmnr2XbK55otooc50uxZyplHNJvqvDaidGCnfDLmCY_FxQPAiH8Dhf4RK_NNUsI3aqzwBeMkgzE_6MjcDoXk7DsaCc4fJItXx1UD9a325Eb6FI2hbHRLYxh-QaSlyL8MFs9fx56z5pdVMCxM6XZt2wZYLE_5I9rSwJFh5dKToPW9p6zdojH6Y4PFIJu8MOTXc', description: 'Organic forest' },
];

export const CreateWizard = () => {
  return (
    <Routes>
      <Route path="/" element={<UploadStep />} />
      <Route path="/style" element={<ComposeStep />} />
      <Route path="/generate" element={<GenerateStep />} />
      <Route path="/preview" element={<PreviewStep />} />
      <Route path="/export" element={<ExportStep />} />
    </Routes>
  );
};

// --- Step 1: Upload Room ---
const UploadStep = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col h-full bg-background dark:bg-background-dark">
      <Header title="New Project" subtitle="Step 1 of 4: Setup Space" />
      <div className="flex-1 p-8 overflow-y-auto">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-extrabold text-text-primary dark:text-white font-serif">Visualize AI Art in Your Space</h2>
            <p className="text-text-secondary dark:text-gray-400">Upload a clear, well-lit photo of the wall where you want to hang your new artwork.</p>
          </div>

          <div 
            className="border-2 border-dashed border-border dark:border-border-dark rounded-2xl bg-surface dark:bg-surface-dark p-16 flex flex-col items-center justify-center gap-6 hover:border-primary transition-colors cursor-pointer shadow-sm group"
            onClick={() => navigate('style')} 
          >
            <div className="size-20 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-4xl">upload_file</span>
            </div>
            <div className="text-center">
               <p className="text-lg font-bold text-text-primary dark:text-white">Drag & Drop Your Photo Here</p>
               <p className="text-sm text-text-secondary dark:text-gray-400">or click to browse</p>
            </div>
            <div className="flex gap-4">
              <button className="px-4 py-2 bg-secondary/10 text-secondary font-bold rounded-lg hover:bg-secondary/20 flex items-center gap-2 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600">
                <span className="material-symbols-outlined">photo_camera</span> Use Camera
              </button>
              <button className="px-4 py-2 bg-primary text-white font-bold rounded-lg hover:bg-primary-dark flex items-center gap-2 shadow-soft hover:shadow-glow transition-shadow">
                <span className="material-symbols-outlined">folder_open</span> Upload File
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <div className="space-y-4">
                <h3 className="font-bold text-text-primary dark:text-white">Enter Wall Dimensions</h3>
                <div className="flex gap-4">
                   <div className="flex-1">
                     <label className="text-xs font-bold text-text-secondary dark:text-gray-400 uppercase">Width</label>
                     <input type="text" placeholder="cm" className="w-full mt-1 border-border dark:border-border-dark dark:bg-surface-dark dark:text-white rounded-lg focus:ring-primary focus:border-primary" />
                   </div>
                   <div className="flex-1">
                     <label className="text-xs font-bold text-text-secondary dark:text-gray-400 uppercase">Height</label>
                     <input type="text" placeholder="cm" className="w-full mt-1 border-border dark:border-border-dark dark:bg-surface-dark dark:text-white rounded-lg focus:ring-primary focus:border-primary" />
                   </div>
                </div>
             </div>
             <div className="space-y-4">
               <h3 className="font-bold text-text-primary dark:text-white">Options</h3>
               <div className="flex items-center justify-between p-4 bg-surface dark:bg-surface-dark border border-border dark:border-border-dark rounded-lg shadow-sm">
                 <div className="flex items-center gap-3">
                   <span className="material-symbols-outlined text-primary bg-primary/10 p-2 rounded-lg">palette</span>
                   <span className="font-medium text-text-primary dark:text-white">Auto-detect Wall Color Palette</span>
                 </div>
                 <input type="checkbox" className="w-5 h-5 text-primary rounded focus:ring-primary bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600" />
               </div>
             </div>
          </div>
          
          <div className="flex justify-center pt-8 pb-8">
             <button onClick={() => navigate('style')} className="w-full max-w-md bg-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-primary-dark shadow-soft-lg hover:shadow-glow transition-all">
               Next: Compose Art
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Step 2: Compose (Prompt + Style) ---
const ComposeStep = () => {
  const navigate = useNavigate();
  const [selectedStyle, setSelectedStyle] = useState<string>('1');
  const [aspectRatio, setAspectRatio] = useState<AspectRatio>('3:4');
  const [prompt, setPrompt] = useState('');

  return (
    <div className="flex flex-col h-full bg-background dark:bg-background-dark">
      <Header title="Compose Artwork" subtitle="Step 2 of 4: Prompt & Style" />
      <div className="flex-1 flex overflow-hidden">
        {/* Controls Sidebar */}
        <aside className="w-96 bg-surface dark:bg-surface-dark border-r border-border dark:border-border-dark p-6 flex flex-col gap-8 overflow-y-auto">
           <div>
             <h3 className="font-bold text-text-primary dark:text-white mb-3">Describe your vision</h3>
             <textarea 
               className="w-full h-32 rounded-xl border-border dark:border-border-dark bg-background dark:bg-gray-800 text-text-primary dark:text-white p-4 focus:ring-2 focus:ring-primary resize-none"
               placeholder="E.g., A serene japanese garden with cherry blossoms falling into a koi pond, soft lighting..."
               value={prompt}
               onChange={(e) => setPrompt(e.target.value)}
             />
           </div>

           <div>
             <h3 className="font-bold text-text-primary dark:text-white mb-3">Aspect Ratio</h3>
             <div className="grid grid-cols-4 gap-2">
                {(['1:1', '3:4', '4:3', '16:9'] as AspectRatio[]).map((ratio) => (
                  <button
                    key={ratio}
                    onClick={() => setAspectRatio(ratio)}
                    className={`py-2 px-1 rounded-lg text-sm font-medium border transition-all ${
                      aspectRatio === ratio 
                        ? 'border-primary bg-primary/10 text-primary' 
                        : 'border-border dark:border-border-dark text-text-secondary dark:text-gray-400 hover:bg-background dark:hover:bg-gray-800'
                    }`}
                  >
                    {ratio}
                  </button>
                ))}
             </div>
           </div>

           <div>
             <h3 className="font-bold text-text-primary dark:text-white mb-3">Selected Style</h3>
             <div className="p-4 rounded-xl bg-background dark:bg-gray-800 border border-border dark:border-border-dark flex items-center gap-3">
                <img src={STYLES.find(s => s.id === selectedStyle)?.image} className="size-12 rounded-lg object-cover" alt="Selected" />
                <div>
                   <p className="font-bold text-text-primary dark:text-white">{STYLES.find(s => s.id === selectedStyle)?.name}</p>
                   <p className="text-xs text-text-secondary dark:text-gray-400">{STYLES.find(s => s.id === selectedStyle)?.description}</p>
                </div>
             </div>
           </div>

           <button 
             onClick={() => navigate('../generate')} 
             className="mt-auto w-full bg-primary text-white py-4 rounded-xl font-bold hover:bg-primary-dark shadow-soft hover:shadow-glow transition-all disabled:opacity-50 disabled:cursor-not-allowed"
             disabled={!prompt}
           >
             Generate Artwork <span className="ml-2">✨</span>
           </button>
        </aside>

        {/* Style Grid Main Area */}
        <main className="flex-1 p-8 overflow-y-auto">
          <h2 className="text-2xl font-bold mb-6 text-text-primary dark:text-white">Choose an Art Style</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {STYLES.map(style => (
              <div 
                key={style.id} 
                onClick={() => setSelectedStyle(style.id)}
                className={`group relative aspect-[3/4] rounded-xl overflow-hidden cursor-pointer transition-all ${selectedStyle === style.id ? 'ring-4 ring-primary ring-offset-2 dark:ring-offset-background-dark' : 'hover:shadow-soft-xl'}`}
              >
                <img src={style.image} alt={style.name} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-4">
                  <span className="text-white font-bold text-lg">{style.name}</span>
                  <p className="text-gray-300 text-sm">{style.description}</p>
                </div>
                <div className={`absolute top-3 right-3 size-8 rounded-full flex items-center justify-center transition-colors ${selectedStyle === style.id ? 'bg-primary text-white' : 'bg-white/30 backdrop-blur-sm text-white'}`}>
                  <span className="material-symbols-outlined text-sm">{selectedStyle === style.id ? 'check' : ''}</span>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

// --- Step 3: Generating (Loading + Results) ---
const GenerateStep = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleSelect = () => {
    navigate('../preview');
  };

  if (isLoading) {
    return (
      <div className="h-full flex flex-col items-center justify-center bg-background dark:bg-background-dark p-8 text-center">
        <div className="bg-surface dark:bg-surface-dark p-12 rounded-2xl shadow-soft-lg dark:shadow-none border border-border dark:border-border-dark max-w-lg w-full">
           <div className="relative size-24 mx-auto mb-8">
             <div className="absolute inset-0 border-4 border-primary/30 rounded-full"></div>
             <div className="absolute inset-0 border-4 border-t-primary rounded-full animate-spin"></div>
             <div className="absolute inset-0 flex items-center justify-center">
               <span className="material-symbols-outlined text-3xl text-primary animate-pulse">auto_awesome</span>
             </div>
           </div>
           <h2 className="text-2xl font-bold text-text-primary dark:text-white mb-2 font-serif">Dreaming up your art...</h2>
           <p className="text-text-secondary dark:text-gray-400 mt-4 text-sm">Our AI is combining your prompt with the selected style.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full bg-background dark:bg-background-dark">
      <Header title="Select Variation" subtitle="Step 3 of 4: Choose the best result" />
      <div className="p-8 flex-1 overflow-y-auto">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
             {[1, 2, 3, 4].map((i) => (
               <div key={i} className="group relative aspect-[3/4] bg-gray-200 dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-glow transition-all">
                 <img src={`https://source.unsplash.com/random/800x1200?art,abstract&sig=${i}`} className="w-full h-full object-cover" alt="Generated" />
                 
                 {/* Overlay Actions */}
                 <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center gap-3 p-4 backdrop-blur-[2px]">
                    
                    <button 
                      onClick={handleSelect} 
                      className="w-full bg-primary text-white px-4 py-2.5 rounded-xl font-bold transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-primary-dark shadow-lg flex items-center justify-center gap-2"
                    >
                      Select Art
                    </button>
                    
                    <button 
                      onClick={() => navigate('../preview')} 
                      className="w-full bg-white/10 border border-white/20 text-white px-4 py-2.5 rounded-xl font-bold transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75 hover:bg-white/20 flex items-center justify-center gap-2"
                    >
                      <span className="material-symbols-outlined text-sm">fullscreen</span> View in Room
                    </button>

                    <div className="flex gap-4 mt-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100">
                       <button className="p-2 text-gray-300 hover:text-white transition-colors" title="Download">
                         <span className="material-symbols-outlined">download</span>
                       </button>
                       <button className="p-2 text-gray-300 hover:text-red-500 transition-colors" title="Save to Favorites">
                         <span className="material-symbols-outlined">favorite</span>
                       </button>
                    </div>
                 </div>
               </div>
             ))}
          </div>
          <div className="flex justify-center mt-12 gap-4">
             <button onClick={() => window.location.reload()} className="px-6 py-3 rounded-xl border border-border dark:border-border-dark text-text-primary dark:text-white font-bold hover:bg-surface dark:hover:bg-gray-800 transition-colors">
               <span className="material-symbols-outlined align-bottom mr-2">refresh</span> Generate Again
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Step 4: Preview/Editor ---
const PreviewStep = () => {
  const navigate = useNavigate();
  const [frame, setFrame] = useState<FrameType>('black');
  const [scale, setScale] = useState(1);
  
  const getFrameClass = () => {
    switch(frame) {
      case 'black': return 'border-[16px] border-neutral-900 shadow-2xl';
      case 'white': return 'border-[16px] border-white shadow-2xl';
      case 'wood': return 'border-[16px] border-[#d2b48c] shadow-2xl';
      default: return 'shadow-lg';
    }
  };

  return (
    <div className="flex flex-col h-full bg-background dark:bg-background-dark">
      <Header title="Preview in Your Room" subtitle="Step 4 of 4: Finalize & Visualize" />
      <div className="flex-1 flex overflow-hidden flex-col lg:flex-row">
        {/* Main Canvas */}
        <div className="flex-1 relative bg-gray-100 dark:bg-gray-900 overflow-hidden flex items-center justify-center p-8">
           {/* Room Background */}
           <div className="absolute inset-0 z-0">
             <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQKoS1l9YrJVzgyWgzHdjSylItu7xBvo7Mqvx78Ob4dPrsXT0DgqBGzPMuRDNe0RTmK_i84ZZefkVWqSBRYY1uzSMaWC43e8IFBh9HBexlFdq_nTqX7VCdWkHQP1LqA5GpxPQP_ADPOeIASBoCGbJPGnB2rig_U7OqNVLUVcWjtbOZ65Mzl2QhF9T5MoT7UI4dkoBb4rfZeqg4Cfxy_-Z98q3b6gYd_2hXSyqGtttPeJDX_sflaY7gCWk8QB46--kThrOizDRPVhY" className="w-full h-full object-cover" alt="Room" />
             <div className="absolute inset-0 bg-black/10 pointer-events-none"></div>
           </div>
           
           {/* Draggable Artwork Mockup */}
           <div 
             className={`relative z-10 w-[300px] aspect-[3/4] transition-all duration-300 ${getFrameClass()} cursor-move group`}
             style={{ transform: `scale(${scale})` }}
           >
             <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuD56oabj1kSgT3f8GTvRq-pPqKW-xnPIoRxXvvGqLKELOQ20OIzG3gcxErofimh-X_u5TV5L8IVsNT7c3gg3mTKThG8NQZy2RIS8ewlmpba-SmBPC0sx2J9m4rwHbVA8JvVfWlNs2JCbJkMIisMnQLpfqe2QIO1wAPwNqx-E8or41omSkou7WQnrheFyV3fmMDefTItDpcjizPudY1ewhp3UuW7ccqwC4XKuY34ZvekK1WTcKzUWNUHWyn-oa1TRgf-pPcI7hT1yFk" className="w-full h-full object-cover" alt="Art" />
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/60 text-white px-3 py-1 rounded-full text-xs font-bold opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity flex items-center gap-1 backdrop-blur-sm">
               <span className="material-symbols-outlined text-sm">open_with</span> Drag
             </div>
           </div>
        </div>

        {/* Customization Sidebar */}
        <aside className="w-full lg:w-96 bg-surface dark:bg-surface-dark border-l border-border dark:border-border-dark flex flex-col z-20 shadow-xl lg:shadow-none">
          <div className="p-6 border-b border-border dark:border-border-dark">
            <h2 className="text-xl font-bold mb-1 text-text-primary dark:text-white">Customize</h2>
            <p className="text-text-secondary dark:text-gray-400 text-sm">Adjust frame and size</p>
          </div>
          
          <div className="p-6 space-y-8 flex-1 overflow-y-auto">
             <div>
               <h3 className="font-bold mb-3 text-text-primary dark:text-white text-sm uppercase tracking-wider">Frame Style</h3>
               <div className="grid grid-cols-4 gap-2">
                 <FrameOption active={frame === 'black'} onClick={() => setFrame('black')} color="bg-neutral-900" label="Black" />
                 <FrameOption active={frame === 'white'} onClick={() => setFrame('white')} color="bg-white border border-gray-200" label="White" />
                 <FrameOption active={frame === 'wood'} onClick={() => setFrame('wood')} color="bg-[#d2b48c]" label="Wood" />
                 <FrameOption active={frame === 'none'} onClick={() => setFrame('none')} icon="block" label="None" />
               </div>
             </div>

             <div>
               <div className="flex justify-between items-center mb-2">
                 <h3 className="font-bold text-text-primary dark:text-white text-sm uppercase tracking-wider">Size on Wall</h3>
                 <span className="text-xs font-mono bg-background dark:bg-gray-800 px-2 py-1 rounded text-text-primary dark:text-white">{Math.round(scale * 100)}%</span>
               </div>
               <input 
                 type="range" 
                 min="0.5" 
                 max="1.5" 
                 step="0.1" 
                 value={scale} 
                 onChange={(e) => setScale(parseFloat(e.target.value))}
                 className="w-full accent-primary h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer"
               />
               <div className="flex justify-between mt-2 text-xs text-text-secondary dark:text-gray-400">
                  <span>Small (30cm)</span>
                  <span>Large (120cm)</span>
               </div>
             </div>
          </div>

          <div className="p-6 border-t border-border dark:border-border-dark space-y-3 bg-surface dark:bg-surface-dark">
             <button onClick={() => navigate('../export')} className="w-full bg-primary text-white py-4 rounded-xl font-bold shadow-soft hover:shadow-glow hover:bg-primary-dark transition-all">Save & Continue</button>
             <button onClick={() => navigate('../style')} className="w-full bg-background dark:bg-gray-800 text-text-primary dark:text-white py-4 rounded-xl font-bold hover:bg-border dark:hover:bg-gray-700 border border-border dark:border-border-dark transition-colors">Start Over</button>
          </div>
        </aside>
      </div>
    </div>
  );
};

const FrameOption = ({ active, onClick, color, icon, label }: any) => (
  <button onClick={onClick} className={`p-2 rounded-lg border-2 flex flex-col items-center gap-2 transition-all ${active ? 'border-primary bg-primary/5 dark:bg-primary/20' : 'border-transparent hover:bg-background dark:hover:bg-gray-800'}`}>
    <div className={`size-10 rounded-full ${color} flex items-center justify-center shadow-sm`}>
      {icon && <span className="material-symbols-outlined text-gray-400">{icon}</span>}
    </div>
    <span className="text-[10px] font-bold text-text-primary dark:text-gray-300">{label}</span>
  </button>
);

// --- Step 5: Export ---
const ExportStep = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col h-full bg-background dark:bg-background-dark">
      <Header title="Final Artwork" />
      <div className="flex-1 flex flex-col lg:flex-row items-center justify-center p-8 gap-12 max-w-7xl mx-auto w-full">
         <div className="w-full max-w-xl aspect-[3/4] bg-surface dark:bg-surface-dark rounded-2xl shadow-soft-lg dark:shadow-glow overflow-hidden p-8 flex items-center justify-center border border-border dark:border-border-dark">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuD56oabj1kSgT3f8GTvRq-pPqKW-xnPIoRxXvvGqLKELOQ20OIzG3gcxErofimh-X_u5TV5L8IVsNT7c3gg3mTKThG8NQZy2RIS8ewlmpba-SmBPC0sx2J9m4rwHbVA8JvVfWlNs2JCbJkMIisMnQLpfqe2QIO1wAPwNqx-E8or41omSkou7WQnrheFyV3fmMDefTItDpcjizPudY1ewhp3UuW7ccqwC4XKuY34ZvekK1WTcKzUWNUHWyn-oa1TRgf-pPcI7hT1yFk" className="h-full object-cover rounded shadow-2xl border-[12px] border-neutral-900" alt="Final Art" />
         </div>
         
         <div className="w-full max-w-md space-y-8">
            <div>
              <h1 className="text-4xl font-extrabold text-text-primary dark:text-white mb-2 font-serif">Your Artwork is Ready</h1>
              <p className="text-text-secondary dark:text-gray-400">Download your high-resolution file or bring your art to life with a custom canvas print.</p>
            </div>

            <div className="space-y-4">
              <button className="w-full py-4 bg-primary text-white rounded-xl font-bold flex items-center justify-center gap-2 shadow-soft-lg hover:bg-primary-dark hover:shadow-glow transition-all">
                <span className="material-symbols-outlined">download</span> Download High-Res
              </button>
              <button onClick={() => navigate('/success')} className="w-full py-4 bg-white dark:bg-gray-800 text-text-primary dark:text-white border border-border dark:border-border-dark rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <span className="material-symbols-outlined text-primary">shopping_bag</span> Order Canvas Print ($79.99)
              </button>
            </div>

            <div className="border-t border-border dark:border-border-dark pt-8">
              <h3 className="font-bold text-text-primary dark:text-white mb-4">Share</h3>
              <div className="flex gap-4">
                 {['share', 'link', 'mail'].map(icon => (
                   <button key={icon} className="size-12 rounded-lg bg-surface dark:bg-surface-dark border border-border dark:border-border-dark hover:border-primary hover:text-primary dark:hover:border-primary dark:hover:text-primary flex items-center justify-center transition-all text-text-secondary dark:text-gray-400">
                     <span className="material-symbols-outlined">{icon}</span>
                   </button>
                 ))}
              </div>
            </div>
         </div>
      </div>
    </div>
  );
};