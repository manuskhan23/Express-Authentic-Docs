import { Link, useLocation } from 'react-router-dom';
import { sidebarConfig } from '../../data/docs';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';

export default function Sidebar() {
  const location = useLocation();
  const [openSections, setOpenSections] = useState(
    sidebarConfig.map(cat => cat.title)
  );

  const toggleSection = (title) => {
    setOpenSections(prev => 
      prev.includes(title) ? prev.filter(t => t !== title) : [...prev, title]
    );
  };

  return (
    <aside className="hidden md:block fixed left-0 top-16 bottom-0 w-72 overflow-y-auto border-r border-light-border dark:border-dark-border p-6 z-40 bg-light-bg dark:bg-dark-bg">
      <div className="space-y-4">
        {sidebarConfig.map((category) => {
          const isOpen = openSections.includes(category.title);

          return (
            <div key={category.title}>
              <button 
                onClick={() => toggleSection(category.title)}
                className="flex items-center justify-between w-full px-3 py-2 rounded-md text-sm font-semibold text-light-text dark:text-dark-text hover:bg-light-card dark:hover:bg-dark-card transition-colors"
              >
                <span>{category.title}</span>
                <motion.span
                  animate={{ rotate: isOpen ? 0 : -90 }}
                  transition={{ duration: 0.2 }}
                >
                  <FiChevronDown size={14} />
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="ml-4 mt-1 space-y-1 border-l border-light-border dark:border-dark-border pl-3">
                      {category.pages.map((page) => {
                        const isActive = location.pathname === `/docs/${page.slug}`;
                        return (
                          <Link
                            key={page.slug}
                            to={`/docs/${page.slug}`}
                            className={`block px-3 py-1.5 rounded-md text-sm transition-colors ${
                              isActive 
                                ? 'text-light-primary dark:text-dark-accent font-medium bg-light-primary/5 dark:bg-dark-primary/10' 
                                : 'text-light-muted dark:text-dark-muted hover:text-light-text dark:hover:text-dark-text'
                            }`}
                          >
                            {page.title}
                          </Link>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </aside>
  );
}