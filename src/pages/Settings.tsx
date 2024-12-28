import React from 'react';
import BusinessSettings from '../components/settings/BusinessSettings';
import AppearanceSettings from '../components/settings/AppearanceSettings';
import NotificationSettings from '../components/settings/NotificationSettings';

export default function Settings() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Settings</h1>
        <p className="text-gray-500 dark:text-gray-400">Manage your application preferences</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <BusinessSettings />
        <AppearanceSettings />
        <NotificationSettings />
      </div>
    </div>
  );
}