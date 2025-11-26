import React from 'react';
import { Header } from '../components/Layout';
import { useApp } from '../App';

export const Profile = () => {
  const { user } = useApp();

  return (
    <div className="bg-background dark:bg-background-dark min-h-full pb-10 transition-colors">
      <Header title="My Profile" />
      <div className="max-w-4xl mx-auto p-8 space-y-6">
        <div className="bg-surface dark:bg-surface-dark rounded-xl shadow-soft dark:shadow-none border border-border dark:border-border-dark p-8">
          <div className="flex items-center gap-6">
            <div className="size-24 rounded-full overflow-hidden ring-4 ring-background dark:ring-gray-800">
               <img src={user?.avatar} alt={user?.name} className="w-full h-full object-cover" />
            </div>
            <div>
               <h2 className="text-2xl font-bold text-text-primary dark:text-white">{user?.name}</h2>
               <p className="text-text-secondary dark:text-gray-400">{user?.email}</p>
            </div>
          </div>
          
          <hr className="my-8 border-border dark:border-border-dark" />
          
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
               <label className="block text-sm font-medium text-text-primary dark:text-white mb-1">Full Name</label>
               <input type="text" defaultValue={user?.name} className="w-full rounded-lg border-border dark:border-border-dark bg-background dark:bg-background-dark dark:text-white px-4 py-2.5 focus:ring-primary focus:border-primary" />
            </div>
            <div>
               <label className="block text-sm font-medium text-text-primary dark:text-white mb-1">Email</label>
               <input type="email" defaultValue={user?.email} className="w-full rounded-lg border-border dark:border-border-dark bg-background dark:bg-background-dark dark:text-white px-4 py-2.5 focus:ring-primary focus:border-primary" />
            </div>
          </form>
        </div>

        <div className="bg-surface dark:bg-surface-dark rounded-xl shadow-soft dark:shadow-none border border-border dark:border-border-dark p-8">
           <h3 className="text-lg font-bold mb-1 text-text-primary dark:text-white">Security</h3>
           <p className="text-sm text-text-secondary dark:text-gray-400 mb-6">Update your password for enhanced security.</p>
           <div className="flex items-center justify-between p-4 bg-background dark:bg-gray-800 rounded-lg border border-border dark:border-border-dark">
              <div>
                 <p className="font-medium text-text-primary dark:text-white">Password</p>
                 <p className="text-xs text-text-secondary dark:text-gray-400">Last updated 3 months ago</p>
              </div>
              <button className="text-sm font-bold text-text-primary dark:text-white border border-border dark:border-border-dark bg-surface dark:bg-surface-dark px-4 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">Change Password</button>
           </div>
        </div>

        <div className="bg-surface dark:bg-surface-dark rounded-xl shadow-soft dark:shadow-none border border-border dark:border-border-dark p-8">
           <h3 className="text-lg font-bold mb-4 text-text-primary dark:text-white">Preferences</h3>
           <div className="flex items-center justify-between">
              <div>
                 <p className="font-medium text-text-primary dark:text-white">Email Notifications</p>
                 <p className="text-sm text-text-secondary dark:text-gray-400">Receive updates about your orders and new features.</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-200 dark:bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </label>
           </div>
        </div>

        <div className="flex justify-end gap-4 pt-4">
           <button className="px-6 py-2.5 rounded-lg border border-border dark:border-border-dark font-medium bg-surface dark:bg-surface-dark text-text-primary dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800">Cancel</button>
           <button className="px-6 py-2.5 rounded-lg bg-primary text-white font-bold hover:bg-primary-dark shadow-soft hover:shadow-glow transition-all">Save Changes</button>
        </div>
      </div>
    </div>
  );
};