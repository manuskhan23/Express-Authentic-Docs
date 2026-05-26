import DocLayout from './DocLayout';
import CodeBlock from '../../components/ui/CodeBlock';

export default function ApiExamples() {
  return (
    <DocLayout>
      <h1 className="text-4xl font-bold mb-6">API Examples</h1>
      <p className="text-lg text-light-muted dark:text-dark-muted mb-8">
        Example API routes and payload structures for your backend.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Register</h2>
      <p className="text-light-muted dark:text-dark-muted mb-2 font-mono text-sm">POST /api/auth/register</p>
      <h3 className="text-lg font-medium mt-4 mb-2">Body</h3>
      <CodeBlock 
        code={`{
  "email": "test@gmail.com",
  "password": "123456"
}`} 
        language="json" 
      />

      <h2 className="text-2xl font-semibold mt-8 mb-4">Login</h2>
      <p className="text-light-muted dark:text-dark-muted mb-2 font-mono text-sm">POST /api/auth/login</p>
      <h3 className="text-lg font-medium mt-4 mb-2">Body</h3>
      <CodeBlock 
        code={`{
  "email": "test@gmail.com"
}`} 
        language="json" 
      />

      <h2 className="text-2xl font-semibold mt-8 mb-4">Protected Route Example</h2>
      <p className="text-light-muted dark:text-dark-muted mb-2 font-mono text-sm">GET /api/auth/profile</p>
      <h3 className="text-lg font-medium mt-4 mb-2">Headers</h3>
      <CodeBlock 
        code={`Authorization: Bearer YOUR_TOKEN`} 
        language="text" 
      />
    </DocLayout>
  );
}