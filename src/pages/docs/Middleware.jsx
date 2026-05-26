import DocLayout from './DocLayout';
import CodeBlock from '../../components/ui/CodeBlock';

export default function Middleware() {
  return (
    <DocLayout>
      <h1 className="text-4xl font-bold mb-6">Express Middleware</h1>
      <p className="text-lg text-light-muted dark:text-dark-muted mb-8">
        Protect your routes seamlessly with the built-in authentication middleware.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Usage Example</h2>
      <CodeBlock 
        code={`import express from "express";
import { authMiddleware } from "express-authentic";

const app = express();

app.get(
  "/profile",
  authMiddleware,
  (req, res) => {
    res.json({
      success: true
    });
  }
);`} 
        language="javascript" 
      />
    </DocLayout>
  );
}