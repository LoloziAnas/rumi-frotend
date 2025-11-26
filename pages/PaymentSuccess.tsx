import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/Layout';

export const PaymentSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-full bg-background dark:bg-background-dark flex flex-col transition-colors">
      <Header title="AI rumi" />
      <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
         <div className="size-24 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6 animate-bounce">
            <span className="material-symbols-outlined text-5xl">check_circle</span>
         </div>
         <h1 className="text-4xl font-extrabold text-text-primary dark:text-white mb-2 font-serif">Thank You!</h1>
         <h2 className="text-2xl font-bold text-text-primary dark:text-white mb-4 font-serif">Your Order is Confirmed.</h2>
         <p className="text-text-secondary dark:text-gray-400 max-w-md mb-12">Your custom AI tableau is now being processed. A confirmation email with all the details has been sent to your inbox.</p>
         
         <div className="w-full max-w-lg bg-surface dark:bg-surface-dark rounded-xl shadow-soft dark:shadow-none border border-border dark:border-border-dark p-6 mb-8 text-left">
            <div className="flex gap-4 mb-6">
               <div className="flex-1">
                  <p className="text-sm text-text-secondary dark:text-gray-400">Item</p>
                  <p className="font-bold text-lg text-text-primary dark:text-white">Vibrant Abstract Forms</p>
                  <p className="text-xs text-text-secondary dark:text-gray-400">Order #AI-8675309</p>
               </div>
               <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyl4wwHoA9Vn0Ze68WGwdIBYLV6YnjJ4bwPXGy3flMXmz0vPZ9fzBQc4C_TcgBhwDLG9Dplbic_zfJrn_VIY52BqBZ8aOVZdqm-DInk-gNI5RO9l0Ve1UaMfI9bwoezm9hAQOCg5BL0DSv-TeOvdgSkDGlY_8wruDZHBBSaDMFQ3Baj5uGW_TlvVSgRV0699Tpqk6u3ff4WQ2VyBmn9N3j7uQfQPX1u_pyZlWVKTkKzSi4aoAqRIcsrHFkgJliPCY43GQTkIYIZqI" className="w-24 h-16 object-cover rounded" alt="Art" />
            </div>
            <div className="border-t border-border dark:border-border-dark pt-4 space-y-2">
               <div className="flex justify-between text-sm text-text-primary dark:text-white">
                  <span className="text-text-secondary dark:text-gray-400">Date</span>
                  <span className="font-bold">Oct 26, 2023</span>
               </div>
               <div className="flex justify-between text-sm text-text-primary dark:text-white">
                  <span className="text-text-secondary dark:text-gray-400">Total</span>
                  <span className="font-bold">$79.99</span>
               </div>
            </div>
         </div>

         <div className="flex flex-col sm:flex-row gap-4 w-full max-w-lg">
            <button onClick={() => navigate('/orders')} className="flex-1 bg-primary text-white py-3 rounded-xl font-bold shadow-soft hover:bg-primary-dark hover:shadow-glow transition-all">Track Your Order</button>
            <button onClick={() => navigate('/create')} className="flex-1 bg-white dark:bg-gray-800 text-text-primary dark:text-white border border-border dark:border-border-dark py-3 rounded-xl font-bold hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">Continue Designing</button>
         </div>
      </div>
    </div>
  );
};