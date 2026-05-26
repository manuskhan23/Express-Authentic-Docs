import DocLayout from './DocLayout';
import CodeBlock from '../../components/ui/CodeBlock';

export default function Architecture() {
  return (
    <DocLayout>
      <h1 className="text-4xl font-bold mb-6">MVC Architecture</h1>
      <p className="text-lg text-light-muted dark:text-dark-muted mb-8">
        This package follows strict MVC architecture to ensure scalability and separation of concerns.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Folder Structure</h2>
      <CodeBlock 
        code={`src/
├── controllers/
├── services/
├── providers/
├── middlewares/
├── routes/
├── utils/
├── config/
├── types/
├── app.ts
├── server.ts
└── index.ts`} 
        language="text" 
      />

      <h2 className="text-2xl font-semibold mt-8 mb-4">TypeScript Rules</h2>
      <ul className="list-disc list-inside space-y-2 text-light-text dark:text-dark-text">
        <li>Runtime code only inside <code className="px-1 py-0.5 bg-light-card dark:bg-dark-card rounded text-sm">/src</code></li>
        <li>Compiled JavaScript only inside <code className="px-1 py-0.5 bg-light-card dark:bg-dark-card rounded text-sm">/dist</code></li>
        <li>No mixed JS + TS runtime</li>
        <li>Types only inside <code className="px-1 py-0.5 bg-light-card dark:bg-dark-card rounded text-sm">/types</code></li>
        <li>No logic inside <code className="px-1 py-0.5 bg-light-card dark:bg-dark-card rounded text-sm">.d.ts</code> files</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Build System</h2>
      <CodeBlock 
        code={`{
  "rootDir": "./src",
  "outDir": "./dist"
}`} 
        language="json" 
      />
    </DocLayout>
  );
}