import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UiState {
  sidebarOpen: boolean;
  theme: 'light' | 'dark';
  isOffline: boolean;
}

const initialState: UiState = {
  sidebarOpen: true,
  theme: 'light',
  isOffline: false,
};

const setThemeColors = (theme: 'light' | 'dark') => {
  const root = document.documentElement.style;

  // Apply dynamic theme colors
  if (theme === 'light') {
    root.setProperty('--bg-color', '#ffffff');
    root.setProperty('--text-color', '#1a202c');
    root.setProperty('--border-color', '#e2e8f0');
    root.setProperty('--hover-bg-color', '#f1f5f9');
    root.setProperty('--primary-color', '#0ea5e9');
    // Ensure dark mode class is removed
    document.documentElement.classList.remove('dark');
  } else {
    root.setProperty('--bg-color', '#17153B');
    root.setProperty('--text-color', '#f7fafc');
    root.setProperty('--border-color', '#4a5568');
    root.setProperty('--hover-bg-color', '#2d3748');
    root.setProperty('--primary-color', '#38bdf8');
    // Add dark mode class
    document.documentElement.classList.add('dark');
  }
};


const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.sidebarOpen = !state.sidebarOpen;
    },
    toggleTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
      setThemeColors(state.theme); // Update theme colors dynamically
    },
    setOfflineStatus: (state, action: PayloadAction<boolean>) => {
      state.isOffline = action.payload;
    },
  },
});

// Set initial theme colors on load
setThemeColors(initialState.theme);

export const { toggleSidebar, toggleTheme, setOfflineStatus } = uiSlice.actions;
export default uiSlice.reducer;

