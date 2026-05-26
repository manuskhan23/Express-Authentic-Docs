import { motion } from 'framer-motion';

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-light-bg dark:bg-dark-bg">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      >
        <img src="/logo.png" alt="Loading" className="h-16 w-16 animate-glow rounded-xl" />
      </motion.div>
    </div>
  );
}