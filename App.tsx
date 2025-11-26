import React, { useState, createContext, useContext, useEffect } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Sidebar } from './components/Layout';
import { Welcome } from './pages/Welcome';
import { Login, Signup, ForgotPassword } from './pages/Auth';
import { Home } from './pages/Home';
import { CreateWizard } from './pages/CreateWizard';
import { Profile } from './pages/Profile';
import { Settings } from './pages/Settings';
import { OrderTracking } from './pages/OrderTracking';
import { PaymentSuccess } from './pages/PaymentSuccess';
import { User, ThemeContextType } from './types';

// --- Theme Context ---
export const ThemeContext = createContext<ThemeContextType>({ theme: 'light', toggleTheme: () => {} });
export const useTheme = () => useContext(ThemeContext);

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const saved = localStorage.getItem('theme');
    return (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) ? 'dark' : 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// --- App Context ---
interface AppContextType {
  user: User | null;
  login: () => void;
  logout: () => void;
}

const AppContext = createContext<AppContextType>({} as AppContextType);
export const useApp = () => useContext(AppContext);

const ProtectedRoute = ({ children }: { children?: React.ReactNode }) => {
  const { user } = useApp();
  if (!user) return <Navigate to="/login" replace />;
  return (
    <div className="flex min-h-screen w-full bg-background dark:bg-background-dark text-text-primary dark:text-text-inverse">
      <Sidebar />
      <main className="flex-1 h-screen overflow-y-auto relative">
        {children}
      </main>
    </div>
  );
};

export default function App() {
  const [user, setUser] = useState<User | null>(null);

  const login = () => {
    setUser({
      name: "Alex Doe",
      email: "alex.doe@example.com",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDWfgRxpdekFBdgUMVpc17Am96U6YbgdXb_EAZ5kh_AcvY8gICTT3g3ciL6NMdekCWNx0rfaorlq1LwihFK_IN5DOG6OA-JqfRpDDoQ-Iko-PBYRAALm-xltuY9u3RiiUqEAykiMTXOSzfLbt630LEJDDK0SQp65ybMNfJOfO-E3BnrU_EsSDXPUxacNBcUu8CK9UmzySH5WWsy-j6hyTvwj2tcoH3kZOqooStHzZSXvNpvK6j6HooEKz2ePOiWoPpt9y3VNdrqvHI"
    });
  };

  const logout = () => setUser(null);

  return (
    <ThemeProvider>
      <AppContext.Provider value={{ user, login, logout }}>
        <HashRouter>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Welcome />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />

            {/* Protected Routes */}
            <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
            <Route path="/create/*" element={<ProtectedRoute><CreateWizard /></ProtectedRoute>} />
            <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
            <Route path="/settings" element={<ProtectedRoute><Settings /></ProtectedRoute>} />
            <Route path="/orders" element={<ProtectedRoute><OrderTracking /></ProtectedRoute>} />
            <Route path="/success" element={<ProtectedRoute><PaymentSuccess /></ProtectedRoute>} />
            
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </HashRouter>
      </AppContext.Provider>
    </ThemeProvider>
  );
}