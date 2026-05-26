import { motion } from 'framer-motion';

export default function DocLayout({ children }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="max-w-4xl mx-auto px-8 py-20"
    >
      <div className="prose-custom">
        {children}
      </div>
    </motion.div>
  );
}