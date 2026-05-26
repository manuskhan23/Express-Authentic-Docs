import DocLayout from './DocLayout';
import CodeBlock from '../../components/ui/CodeBlock';

export default function TokenService() {
  return (
    <DocLayout>
      <h1 className="text-4xl font-bold mb-6">TokenService</h1>
      <p className="text-lg text-light-muted dark:text-dark-muted mb-8">
        Manage JWTs effortlessly with built-in generation and verification.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Generate JWT Token</h2>
      <CodeBlock 
        code={`import { TokenService } from "express-authentic";

const token = TokenService.generateToken({
  email: "user@gmail.com"
});

console.log(token);`} 
        language="javascript" 
      />

      <h2 className="text-2xl font-semibold mt-8 mb-4">Verify JWT Token</h2>
      <CodeBlock 
        code={`const decoded = TokenService.verifyToken(token);

console.log(decoded);`} 
        language="javascript" 
      />
    </DocLayout>
  );
}