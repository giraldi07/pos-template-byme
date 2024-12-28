import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Sun, Moon, Monitor } from 'lucide-react';
import { toggleTheme } from '../../store/slices/uiSlice';
import { RootState } from '../../store';

export default function AppearanceSettings() {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.ui.theme);

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
      <h2 className="text-lg font-semibold mb-4">Appearance</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
            Theme
          </label>
          <div className="grid grid-cols-3 gap-3">
            <button
              onClick={() => dispatch(toggleTheme())}
              className={`p-3 rounded-lg border flex flex-col items-center gap-2
                ${theme === 'light' 
                  ? 'border-blue-500 bg-blue-50 dark:bg-blue-900' 
                  : 'border-gray-200 dark:border-gray-700'}`}
            >
              <Sun size={24} />
              <span className="text-sm">Light</span>
            </button>
            <button
              onClick={() => dispatch(toggleTheme())}
              className={`p-3 rounded-lg border flex flex-col items-center gap-2
                ${theme === 'dark' 
                  ? 'border-blue-500 bg-blue-50 dark:bg-blue-900' 
                  : 'border-gray-200 dark:border-gray-700'}`}
            >
              <Moon size={24} />
              <span className="text-sm">Dark</span>
            </button>
            <button
              className="p-3 rounded-lg border border-gray-200 dark:border-gray-700 
                     flex flex-col items-center gap-2"
            >
              <Monitor size={24} />
              <span className="text-sm">System</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}