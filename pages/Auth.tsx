import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../App';

const Logo = () => (
  <svg width="48" height="48" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto mb-4">
    <rect width="32" height="32" rx="8" className="fill-primary"/>
    <path d="M16 6L24 10V22L16 26L8 22V10L16 6Z" fill="white" fillOpacity="0.2"/>
    <path d="M16 10L22 13.5V20.5L16 24L10 20.5V13.5L16 10Z" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
    <path d="M16 14V19M13.5 16.5H18.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const AuthLayout = ({ title, subtitle, children, image }: { title: string, subtitle?: string, children?: React.ReactNode, image: string }) => (
  <div className="min-h-screen flex w-full bg-surface dark:bg-background-dark">
    <div className="hidden lg:flex w-1/2 bg-black relative overflow-hidden">
      <img src={image} className="w-full h-full object-cover opacity-80" alt="Auth Background" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-12">
        <blockquote className="text-white">
          <p className="text-xl font-medium mb-4 font-serif">"The best way to design your home is to visualize it first."</p>
          <footer className="text-sm opacity-80">— AI rumi</footer>
        </blockquote>
      </div>
    </div>
    <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-surface dark:bg-background-dark transition-colors">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
           <Logo />
           <h2 className="text-3xl font-bold text-text-primary dark:text-white font-serif">{title}</h2>
           {subtitle && <p className="mt-2 text-text-secondary dark:text-gray-400">{subtitle}</p>}
        </div>
        {children}
      </div>
    </div>
  </div>
);

const SocialButtons = () => (
  <div className="space-y-3 pt-2">
    <div className="relative">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-border dark:border-border-dark"></div>
      </div>
      <div className="relative flex justify-center text-sm">
        <span className="px-2 bg-surface dark:bg-background-dark text-text-secondary dark:text-gray-400">Or continue with</span>
      </div>
    </div>
    <div className="grid grid-cols-2 gap-3">
      <button type="button" className="flex items-center justify-center gap-2 px-4 py-2 border border-border dark:border-border-dark rounded-lg bg-white dark:bg-surface-dark hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors shadow-sm">
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
        </svg>
        <span className="font-medium text-sm text-text-primary dark:text-white">Google</span>
      </button>
      <button type="button" className="flex items-center justify-center gap-2 px-4 py-2 border border-border dark:border-border-dark rounded-lg bg-white dark:bg-surface-dark hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors shadow-sm">
        <svg className="w-5 h-5 text-text-primary dark:text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.05 20.28c-.98.95-2.05.88-3.08.35-1.09-.54-2.09-.51-3.21.05-1.12.55-2.04.48-2.91-.48-3.56-3.95-2.97-8.98.65-10.43 1.04-.41 2.06-.33 2.88.16.82.47 1.61.54 2.37.05.97-.61 2.33-.61 3.51-.08.68.3 1.25.75 1.7 1.35-3.32.22-4.55-2.5-4.43-4.49 1.94.13 3.34 1.41 3.82 3.52z"/>
        </svg>
        <span className="font-medium text-sm text-text-primary dark:text-white">Apple</span>
      </button>
    </div>
  </div>
);

export const Login = () => {
  const { login } = useApp();
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    login();
    navigate('/home');
  };

  return (
    <AuthLayout 
      title="Welcome Back" 
      image="https://lh3.googleusercontent.com/aida-public/AB6AXuAY79PUZwne0cFx7ApqY0wT1J7gEF-nPg8dr6NPLAxfEnfK3fkYdpDgQ57NNGWpbr69qClwXboAt0I6zNW6SWaiE0FXmpXMgIAFWZM-RFhoyGvyOZoYzPsliWU4Vasrn71BVY0W64USfytM6qrTzlStnDhsbgBvUdD5zbRSkHijB_x-y3Xi9HT_qAQddLotXnfIDVMyUH7KBj_vAErzUXlYHaEqJixnj5utz5RM1MMHjWCC7CTKXYRiLMl9zw4Xj_ZLaB_VfUqkSUQ"
    >
      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-text-primary dark:text-white mb-1">Email</label>
          <input type="email" required className="w-full rounded-lg border-border dark:border-border-dark bg-background dark:bg-background-dark dark:text-white px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary" placeholder="Enter your email" />
        </div>
        <div>
          <label className="block text-sm font-medium text-text-primary dark:text-white mb-1">Password</label>
          <input type="password" required className="w-full rounded-lg border-border dark:border-border-dark bg-background dark:bg-background-dark dark:text-white px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary" placeholder="••••••••" />
          <div className="flex justify-end mt-1">
             <button type="button" onClick={() => navigate('/forgot-password')} className="text-sm text-primary font-semibold hover:underline">Forgot password?</button>
          </div>
        </div>
        <button type="submit" className="w-full bg-primary text-white py-3 rounded-lg font-bold hover:bg-primary-dark transition-colors shadow-soft hover:shadow-glow">Log In</button>
      </form>
      
      <SocialButtons />

      <div className="text-center text-sm text-text-secondary dark:text-gray-400 pt-4">
        Don't have an account? <button onClick={() => navigate('/signup')} className="text-primary font-bold hover:underline">Sign up</button>
      </div>
    </AuthLayout>
  );
};

export const Signup = () => {
  const { login } = useApp();
  const navigate = useNavigate();

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    login();
    navigate('/home');
  };

  return (
    <AuthLayout 
      title="Create Account" 
      subtitle="Start generating unique AI artwork for your home."
      image="https://lh3.googleusercontent.com/aida-public/AB6AXuCBJtIeazRv-P0_nJRV9-YsKksaX_i3ZpjmqA8gber9aZgOkzaHAa98PjWZj7FWShigzEdUNzi6xeqcuYFyZfUOcu-_jjzbQRLkBC1VsGAO_nydFGTZYhseUQZVqqbZyhaqb1ZVgrWwnjmqQN3KfH9TSYi3aJf7CglhvJ44xI3JCQCmAqcCb3IyZw8bWasZrHCyYHHQynliOBuyCX_Sse7ZHPpRzwPbuOwm8Gr-0u9ksn6bmdPkB26AKxh2uW1W2Xg4kdZx6shemg4"
    >
      <form onSubmit={handleSignup} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-text-primary dark:text-white mb-1">Full Name</label>
          <input type="text" className="w-full rounded-lg border-border dark:border-border-dark bg-background dark:bg-background-dark dark:text-white px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary" placeholder="Alex Doe" />
        </div>
        <div>
          <label className="block text-sm font-medium text-text-primary dark:text-white mb-1">Email</label>
          <input type="email" className="w-full rounded-lg border-border dark:border-border-dark bg-background dark:bg-background-dark dark:text-white px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary" placeholder="alex@example.com" />
        </div>
        <div>
          <label className="block text-sm font-medium text-text-primary dark:text-white mb-1">Password</label>
          <input type="password" className="w-full rounded-lg border-border dark:border-border-dark bg-background dark:bg-background-dark dark:text-white px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary" placeholder="Create a password" />
        </div>
        <button type="submit" className="w-full bg-primary text-white py-3 rounded-lg font-bold hover:bg-primary-dark transition-colors shadow-soft hover:shadow-glow">Create Account</button>
      </form>
      
      <SocialButtons />
      
      <div className="text-center text-sm text-text-secondary dark:text-gray-400 pt-4">
        Already have an account? <button onClick={() => navigate('/login')} className="text-primary font-bold hover:underline">Log in</button>
      </div>
    </AuthLayout>
  );
};

export const ForgotPassword = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background dark:bg-background-dark flex items-center justify-center p-4 transition-colors">
      <div className="max-w-md w-full bg-surface dark:bg-surface-dark rounded-xl shadow-soft-lg dark:shadow-none border border-border dark:border-border-dark p-8 space-y-6">
        <button onClick={() => navigate('/login')} className="text-text-secondary dark:text-gray-400 hover:text-primary dark:hover:text-primary flex items-center gap-2 mb-4 text-sm font-medium">
          <span className="material-symbols-outlined">arrow_back</span> Back to Login
        </button>
        <div className="text-center">
          <h2 className="text-2xl font-bold text-text-primary dark:text-white font-serif">Reset Password</h2>
          <p className="text-text-secondary dark:text-gray-400 mt-2">Enter your email and we'll send you a link to reset your password.</p>
        </div>
        <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert("Link sent!"); }}>
          <div>
            <label className="block text-sm font-medium text-text-primary dark:text-white mb-1">Email Address</label>
            <input type="email" required className="w-full rounded-lg border-border dark:border-border-dark bg-background dark:bg-background-dark dark:text-white px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary" placeholder="Enter your email" />
          </div>
          <button type="submit" className="w-full bg-primary text-white py-3 rounded-lg font-bold hover:bg-primary-dark transition-colors shadow-soft hover:shadow-glow">Send Reset Link</button>
        </form>
      </div>
    </div>
  );
};