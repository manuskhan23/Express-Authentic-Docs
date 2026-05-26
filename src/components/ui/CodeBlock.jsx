import { useState } from 'react';
import { FiCopy, FiCheck } from 'react-icons/fi';

export default function CodeBlock({ code, language = 'javascript' }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group rounded-lg overflow-hidden border border-light-border dark:border-dark-border my-4">
      <div className="flex items-center justify-between px-4 py-2 bg-light-card dark:bg-dark-card border-b border-light-border dark:border-dark-border">
        <span className="text-xs text-light-muted dark:text-dark-muted font-mono">{language}</span>
        <button onClick={handleCopy} className="flex items-center space-x-1 text-xs text-light-muted dark:text-dark-muted hover:text-light-text dark:hover:text-dark-text transition-colors">
          {copied ? <FiCheck className="text-green-400" /> : <FiCopy />}
          <span>{copied ? 'Copied!' : 'Copy'}</span>
        </button>
      </div>
      <pre className="p-4 bg-light-bg dark:bg-dark-bg overflow-x-auto text-sm font-mono text-light-text dark:text-dark-text">
        <code>{code}</code>
      </pre>
    </div>
  );
}