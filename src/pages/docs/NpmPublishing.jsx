import DocLayout from './DocLayout';
import CodeBlock from '../../components/ui/CodeBlock';

export default function NpmPublishing() {
  return (
    <DocLayout>
      <h1 className="text-4xl font-bold mb-6">NPM Publishing</h1>
      <p className="text-lg text-light-muted dark:text-dark-muted mb-8">
        Guidelines for building and publishing the package.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Publishing Setup</h2>
      <p className="text-light-muted dark:text-dark-muted mb-4">
        Only the <code className="px-1 py-0.5 bg-light-card dark:bg-dark-card rounded text-sm">dist/</code> folder is published to NPM to keep the package size minimal.
      </p>
      <CodeBlock 
        code={`"files": [
  "dist"
]`} 
        language="json" 
      />

      <h2 className="text-2xl font-semibold mt-8 mb-4">Scripts</h2>
      <ul className="list-disc list-inside space-y-2 text-light-text dark:text-dark-text mb-8">
        <li><code className="px-1 py-0.5 bg-light-card dark:bg-dark-card rounded text-sm">npm run dev</code> - Development</li>
        <li><code className="px-1 py-0.5 bg-light-card dark:bg-dark-card rounded text-sm">npm run build</code> - TypeScript Build</li>
        <li><code className="px-1 py-0.5 bg-light-card dark:bg-dark-card rounded text-sm">npm start</code> - Production</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-8 mb-4">Build Output</h2>
      <p className="text-light-muted dark:text-dark-muted mb-4">
        Compiled output will be generated inside the <code className="px-1 py-0.5 bg-light-card dark:bg-dark-card rounded text-sm">dist/</code> directory.
      </p>
    </DocLayout>
  );
}