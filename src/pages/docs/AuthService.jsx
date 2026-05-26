import DocLayout from './DocLayout';
import CodeBlock from '../../components/ui/CodeBlock';

export default function AuthService() {
  return (
    <DocLayout>
      <h1 className="text-4xl font-bold mb-6">AuthService</h1>
      <p className="text-lg text-light-muted dark:text-dark-muted mb-8">
        Handle user registration and login securely with bcrypt hashing.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Register User</h2>
      <CodeBlock 
        code={`import { AuthService } from "express-authentic";

const authService = new AuthService();

const user = await authService.register({
  email: "test@gmail.com",
  password: "123456"
});

console.log(user);`} 
        language="javascript" 
      />

      <h2 className="text-2xl font-semibold mt-8 mb-4">Login User</h2>
      <CodeBlock 
        code={`const login = await authService.login({
  email: "test@gmail.com"
});

console.log(login);`} 
        language="javascript" 
      />
    </DocLayout>
  );
}