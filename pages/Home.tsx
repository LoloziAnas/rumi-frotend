import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Header, Footer } from '../components/Layout';

export const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-full flex flex-col bg-background dark:bg-background-dark transition-colors">
      <Header 
        title="Home" 
        rightElement={
          <button className="p-2 rounded-full text-text-secondary dark:text-gray-400 hover:bg-background dark:hover:bg-gray-800">
            <span className="material-symbols-outlined">notifications</span>
          </button>
        }
      />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8 space-y-12 flex-1 w-full">
        <section className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-text-primary dark:text-white tracking-tight font-serif">Design Your Masterpiece</h1>
          <p className="text-text-secondary dark:text-gray-400 text-lg max-w-2xl">
            Use the power of AI to generate unique wall art and visualize it in your own space.
          </p>
        </section>

        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-text-primary dark:text-white">Recent Creations</h2>
            <button className="text-primary font-bold hover:underline text-sm">View All</button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Create New Card */}
            <div 
              className="border-2 border-dashed border-border dark:border-border-dark rounded-2xl bg-surface dark:bg-surface-dark p-8 flex flex-col items-center justify-center text-center gap-4 min-h-[320px] hover:border-primary dark:hover:border-primary transition-colors cursor-pointer group" 
              onClick={() => navigate('/create')}
            >
               <div className="size-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                 <span className="material-symbols-outlined text-primary text-3xl">add_photo_alternate</span>
               </div>
               <div>
                 <h3 className="text-lg font-bold text-text-primary dark:text-white">Create Your First Artwork</h3>
                 <p className="text-sm text-text-secondary dark:text-gray-400 mt-1">Start generating unique masterpieces.</p>
               </div>
               <button className="mt-2 bg-primary text-white px-6 py-2 rounded-lg text-sm font-bold hover:bg-primary-dark shadow-soft hover:shadow-glow transition-all">Start Creating</button>
            </div>

            {/* Example Card 1 */}
            <ArtworkCard 
              image="https://lh3.googleusercontent.com/aida-public/AB6AXuA2cNfBZbrYA0rRE4Ewz5UouMXOCJjSnZh57gaUpgGvh9X38--CXSBiOOAeU8bo-eDeXWE_2-lbQJzhqmL57XMvVOCe2ztm_WPUPmocMz0mYWcaf2hRdmyjOKp7wXHsQER2gJgshhkVFho1A9wpDMrsi9Ii2gWp-vUxR7ONXZ-HA9__WjufonkXvDbKGSJclybf4KCvybMo8HJGHJ7m7p49uBfPapfh_0CZuj9HCfDRF5m64PfrGfirdA5ewpbHx54duiqjh9nKO-U"
              title="Cyberpunk Cityscape"
              date="2 days ago"
              desc="A neon-lit futuristic city at night, with flying cars."
            />
            
            {/* Example Card 2 */}
            <ArtworkCard 
              image="https://lh3.googleusercontent.com/aida-public/AB6AXuBQRkmEPmVaZ_uNQWoRR6RDtOboJTU6AigG6K2mCFB3353T0WGwyo1fjiLA32TO79oXRHcD5wRmxFP6gWqvBPMEar1FKc8ewF9JV0b4xAHw5GJ1QrsE-Ku80POPB2y2McGJRcIqp4VpQ8IyXnOBdedEiWksJ4fB4qo7JSJe2q4NgMwsYOHhiuEYad4vudIOQJfnZTlMY3VLPyGuKqTOdYWEBHX40bsz8482LtEZYIMQmASAl_z0ydY1exv3XejWY6EGch0YDTwCSeQ"
              title="Enchanted Forest"
              date="5 days ago"
              desc="A mystical forest with glowing mushrooms and ancient trees."
            />
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

const ArtworkCard = ({ image, title, date, desc }: { image: string, title: string, date: string, desc: string }) => (
  <div className="bg-surface dark:bg-surface-dark rounded-2xl overflow-hidden shadow-soft dark:shadow-none border border-transparent dark:border-border-dark hover:shadow-soft-lg dark:hover:border-gray-700 transition-all group">
    <div className="relative aspect-[4/3] overflow-hidden">
      <img src={image} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt={title} />
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 backdrop-blur-sm">
        <button className="p-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/40 transition-colors"><span className="material-symbols-outlined">visibility</span></button>
        <button className="p-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/40 transition-colors"><span className="material-symbols-outlined">edit</span></button>
      </div>
    </div>
    <div className="p-5">
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-bold text-text-primary dark:text-white text-lg">{title}</h3>
        <span className="text-xs text-text-secondary dark:text-gray-500 bg-background dark:bg-gray-800 px-2 py-1 rounded">{date}</span>
      </div>
      <p className="text-sm text-text-secondary dark:text-gray-400 line-clamp-2">{desc}</p>
    </div>
  </div>
);