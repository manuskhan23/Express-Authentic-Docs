import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import HeroScene from '../components/three/HeroScene';
import CodeBlock from '../components/ui/CodeBlock';
import { FiShield, FiLock, FiLayout, FiPackage, FiCode, FiSend } from 'react-icons/fi';

const features = [
  { icon: <FiShield />, title: 'JWT Authentication', desc: 'Secure token generation and verification out of the box.' },
  { icon: <FiLock />, title: 'OAuth Providers', desc: 'Google, Github, Facebook, Apple integrations ready.' },
  { icon: <FiCode />, title: 'Middleware Protection', desc: 'Easily protect your Express routes with a single line.' },
  { icon: <FiLayout />, title: 'MVC Architecture', desc: 'Strict separation of concerns for scalable apps.' },
  { icon: <FiPackage />, title: 'ES Modules & TS', desc: 'Modern import/export syntax with full TypeScript support.' },
  { icon: <FiSend />, title: 'Gmail OTP', desc: 'Built-in email OTP provider using nodemailer.' },
];

const quickStartCode = `import { AuthService, GoogleProvider } from "express-authentic";

const auth = new AuthService();
const google = new GoogleProvider({ 
  clientId: "ID", 
  clientSecret: "SECRET" 
});

await auth.register({ email: "test@mail.com", password: "123456" });`;

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <section className="relative min-h-screen flex items-center justify-center text-center px-4">
        <HeroScene />
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-6 px-4 py-1.5 rounded-full text-sm font-medium bg-light-primary/10 text-light-primary dark:bg-dark-primary/20 dark:text-dark-accent border border-light-primary/20 dark:border-dark-primary/30">
              Open Source • Production Ready
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              Authentication infrastructure for{' '}
              <span className="bg-gradient-to-r from-light-primary to-light-accent dark:from-dark-primary dark:to-dark-accent bg-clip-text text-transparent">
                modern Express.js
              </span> apps.
            </h1>
            <p className="text-lg md:text-xl text-light-muted dark:text-dark-muted mb-10 max-w-2xl mx-auto">
              Production-ready authentication & OAuth utility package using JWT, bcrypt, OAuth providers, and TypeScript support.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/docs/introduction" className="px-8 py-3 rounded-lg bg-light-primary dark:bg-dark-primary text-white font-medium hover:opacity-90 transition-opacity shadow-[0_0_20px_rgba(124,58,237,0.3)]">
                Get Started
              </Link>
              <a href="https://github.com/manuskhan23/Express-Authentic" target="_blank" rel="noreferrer" className="px-8 py-3 rounded-lg glass font-medium hover:bg-light-border dark:hover:bg-dark-border transition-colors">
                GitHub →
              </a>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-light-muted dark:text-dark-muted z-10">
          ↓
        </div>
      </section>

      <section className="py-24 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything you need</h2>
            <p className="text-light-muted dark:text-dark-muted text-lg">Built for the modern web. Secure by default.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="p-6 rounded-xl glass glow-border transition-all duration-300 group"
              >
                <div className="text-3xl mb-4 text-light-primary dark:text-dark-accent group-hover:scale-110 transition-transform inline-block">
                  {feat.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feat.title}</h3>
                <p className="text-light-muted dark:text-dark-muted text-sm leading-relaxed">{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 relative">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Developer Experience First</h2>
            <p className="text-light-muted dark:text-dark-muted text-lg">Simple, intuitive API that gets out of your way.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <CodeBlock code={quickStartCode} language="javascript" />
          </motion.div>
        </div>
      </section>

      <footer className="border-t border-light-border dark:border-dark-border py-12 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-2">
            <img src="/logo.png" alt="Logo" className="h-6 w-6 rounded-md" />
            <span className="font-bold bg-gradient-to-r from-light-primary to-light-accent dark:from-dark-primary dark:to-dark-accent bg-clip-text text-transparent">
              express-authentic
            </span>
          </div>
          <p className="text-sm text-light-muted dark:text-dark-muted">
            MIT License • Built by M Anus Khan
          </p>
          <div className="flex space-x-4">
            <a href="https://github.com/manuskhan23/Express-Authentic" className="text-light-muted dark:text-dark-muted hover:text-light-text dark:hover:text-dark-text transition-colors">
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}