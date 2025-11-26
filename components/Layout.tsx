import React from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useApp, useTheme } from '../App';

const Logo = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="32" height="32" rx="8" className="fill-primary"/>
    <path d="M16 6L24 10V22L16 26L8 22V10L16 6Z" fill="white" fillOpacity="0.2"/>
    <path d="M16 10L22 13.5V20.5L16 24L10 20.5V13.5L16 10Z" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
    <path d="M16 14V19M13.5 16.5H18.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const Sidebar = () => {
  const { user, logout } = useApp();
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path: string) => location.pathname.startsWith(path);

  return (
    <aside className="hidden lg:flex flex-col w-72 bg-surface dark:bg-surface-dark border-r border-border dark:border-border-dark h-screen sticky top-0 z-20 transition-colors">
      <div className="p-6 flex items-center gap-3">
        <Logo />
        <div>
          <h1 className="text-lg font-bold text-text-primary dark:text-text-inverse leading-tight font-serif tracking-tight">AI rumi</h1>
          <p className="text-xs text-text-secondary dark:text-gray-400">Designer</p>
        </div>
      </div>

      <nav className="flex-1 px-4 space-y-1 overflow-y-auto">
        <NavItem to="/home" icon="home" label="Home" active={isActive('/home')} />
        <NavItem to="/create" icon="brush" label="Create New" active={isActive('/create')} />
        <NavItem to="/orders" icon="receipt_long" label="Order History" active={isActive('/orders')} />
        <NavItem to="/profile" icon="person" label="Profile" active={isActive('/profile')} />
        <NavItem to="/settings" icon="settings" label="Settings" active={isActive('/settings')} />
      </nav>

      <div className="px-4 py-2">
         <button 
          onClick={toggleTheme}
          className="flex items-center gap-3 px-3 py-2 w-full rounded-lg text-text-secondary dark:text-gray-400 hover:bg-background dark:hover:bg-gray-800 transition-colors"
         >
           <span className="material-symbols-outlined">{theme === 'dark' ? 'light_mode' : 'dark_mode'}</span>
           <span className="text-sm font-semibold">{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
         </button>
      </div>

      <div className="p-4 border-t border-border dark:border-border-dark mt-auto">
        <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-background dark:hover:bg-gray-800 cursor-pointer transition-colors" onClick={() => navigate('/profile')}>
          <img src={user?.avatar} alt="Profile" className="size-9 rounded-full object-cover ring-2 ring-white dark:ring-gray-700" />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-text-primary dark:text-text-inverse truncate">{user?.name}</p>
            <p className="text-xs text-text-secondary dark:text-gray-400 truncate">{user?.email}</p>
          </div>
          <button onClick={(e) => { e.stopPropagation(); logout(); }} className="text-text-secondary hover:text-red-500 dark:hover:text-red-400">
            <span className="material-symbols-outlined text-[20px]">logout</span>
          </button>
        </div>
      </div>
    </aside>
  );
};

const NavItem = ({ to, icon, label, active }: { to: string, icon: string, label: string, active: boolean }) => (
  <NavLink
    to={to}
    className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all ${
      active 
        ? 'bg-primary text-white shadow-soft dark:shadow-glow' 
        : 'text-text-secondary dark:text-gray-400 hover:bg-background dark:hover:bg-gray-800 hover:text-text-primary dark:hover:text-gray-200'
    }`}
  >
    <span className={`material-symbols-outlined ${active ? 'fill' : ''}`}>{icon}</span>
    <span className="text-sm font-semibold">{label}</span>
  </NavLink>
);

export const Header = ({ title, subtitle, rightElement }: { title: string, subtitle?: string, rightElement?: React.ReactNode }) => (
  <header className="h-20 flex items-center justify-between px-8 bg-surface/80 dark:bg-surface-dark/80 backdrop-blur-md border-b border-border dark:border-border-dark sticky top-0 z-10 transition-colors">
    <div>
      <h1 className="text-xl font-bold text-text-primary dark:text-text-inverse font-serif">{title}</h1>
      {subtitle && <p className="text-sm text-text-secondary dark:text-gray-400">{subtitle}</p>}
    </div>
    <div className="flex items-center gap-4">
      {rightElement}
      <button className="lg:hidden p-2 text-text-secondary dark:text-gray-400">
        <span className="material-symbols-outlined">menu</span>
      </button>
    </div>
  </header>
);

export const Footer = () => (
  <footer className="border-t border-border dark:border-border-dark py-8 px-8 bg-surface dark:bg-surface-dark mt-auto transition-colors">
    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
      <div className="flex items-center gap-2">
        <Logo />
        <span className="font-serif font-bold text-text-primary dark:text-text-inverse">AI rumi</span>
      </div>
      <div className="flex gap-6 text-sm text-text-secondary dark:text-gray-400">
        <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
        <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
        <a href="#" className="hover:text-primary transition-colors">Help Center</a>
      </div>
      <p className="text-xs text-text-secondary dark:text-gray-500">© 2024 AI rumi. All rights reserved.</p>
    </div>
  </footer>
);