import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { useSearch } from '../../context/SearchContext';
import { FiSun, FiMoon, FiSearch, FiGithub, FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const { darkMode, setDarkMode } = useTheme();
  const { setIsOpen } = useSearch();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === '/' || (e.metaKey && e.key === 'k')) {
        e.preventDefault();
        setIsOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [setIsOpen]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-2 glass shadow-lg' : 'py-4 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <img src="/logo.png" alt="Logo" className="h-8 w-8 rounded-md" />
          <span className="font-bold text-xl hidden sm:block bg-gradient-to-r from-light-primary to-light-accent dark:from-dark-primary dark:to-dark-accent bg-clip-text text-transparent">
            express-authentic
          </span>
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          <Link to="/docs/introduction" className="text-light-muted dark:text-dark-muted hover:text-light-text dark:hover:text-dark-text transition-colors">Docs</Link>
          <button onClick={() => setIsOpen(true)} className="flex items-center space-x-2 px-3 py-1.5 rounded-lg glass text-sm text-light-muted dark:text-dark-muted hover:text-light-text dark:hover:text-dark-text transition-colors">
            <FiSearch />
            <span>Search...</span>
            <kbd className="px-1.5 py-0.5 text-xs rounded bg-light-border dark:bg-dark-border">/</kbd>
          </button>
        </div>

        <div className="flex items-center space-x-4">
          <motion.button 
            whileTap={{ rotate: 180 }}
            onClick={() => setDarkMode(!darkMode)} 
            className="p-2 rounded-lg hover:bg-light-border dark:hover:bg-dark-border transition-colors"
          >
            {darkMode ? <FiSun className="text-yellow-400" /> : <FiMoon className="text-indigo-600" />}
          </motion.button>
          <a href="https://github.com/manuskhan23/Express-Authentic" target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:bg-light-border dark:hover:bg-dark-border transition-colors">
            <FiGithub />
          </a>
          <button className="md:hidden p-2" onClick={() => setMobileMenu(!mobileMenu)}>
            {mobileMenu ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenu && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass mt-2 mx-4 rounded-lg overflow-hidden"
          >
            <div className="p-4 space-y-3">
              <Link to="/docs/introduction" onClick={() => setMobileMenu(false)} className="block text-light-muted dark:text-dark-muted">Docs</Link>
              <button onClick={() => { setIsOpen(true); setMobileMenu(false); }} className="block text-light-muted dark:text-dark-muted">Search</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}