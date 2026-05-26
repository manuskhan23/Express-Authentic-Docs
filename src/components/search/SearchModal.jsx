import { useEffect, useState } from 'react';
import { useSearch } from '../../context/SearchContext';
import { useNavigate } from 'react-router-dom';
import { allPages } from '../../data/docs';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSearch, FiX } from 'react-icons/fi';

export default function SearchModal() {
  const { isOpen, setIsOpen, query, setQuery } = useSearch();
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!query) {
      setResults([]);
      return;
    }
    const lowerQuery = query.toLowerCase();
    const found = allPages.filter(page => 
      page.title.toLowerCase().includes(lowerQuery)
    );
    setResults(found);
  }, [query]);

  const handleSelect = (slug) => {
    navigate(`/docs/${slug}`);
    setIsOpen(false);
    setQuery('');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-start justify-center pt-[20vh] bg-black/50 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        >
          <motion.div 
            initial={{ scale: 0.95, y: -20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: -20 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-2xl rounded-xl glass shadow-2xl overflow-hidden"
          >
            <div className="flex items-center border-b border-light-border dark:border-dark-border p-4">
              <FiSearch className="mr-2 text-light-muted dark:text-dark-muted" />
              <input 
                type="text" 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search documentation..."
                className="flex-1 bg-transparent outline-none text-light-text dark:text-dark-text placeholder:text-light-muted dark:placeholder:text-dark-muted"
                autoFocus
              />
              <button onClick={() => setIsOpen(false)} className="p-1 rounded hover:bg-light-border dark:hover:bg-dark-border">
                <FiX className="text-light-muted dark:text-dark-muted" />
              </button>
            </div>
            <div className="max-h-80 overflow-y-auto p-2">
              {results.length === 0 && query && (
                <div className="p-4 text-center text-light-muted dark:text-dark-muted">No results found.</div>
              )}
              {results.map((res) => (
                <button 
                  key={res.slug} 
                  onClick={() => handleSelect(res.slug)}
                  className="w-full text-left p-3 rounded-lg hover:bg-light-border dark:hover:bg-dark-border transition-colors flex items-center"
                >
                  <div>
                    <p className="font-medium text-light-text dark:text-dark-text">{res.title}</p>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}