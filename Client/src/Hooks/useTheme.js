import { useState, useEffect, useCallback } from 'react';

const useTheme = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);

    localStorage.setItem('theme', theme);
  }, [theme]);

  // A stable function to toggle the theme
  const toggleTheme = useCallback(() => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  }, []);

  return { theme, toggleTheme };
};

export default useTheme;
