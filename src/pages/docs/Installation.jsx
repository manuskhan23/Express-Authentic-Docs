import DocLayout from './DocLayout';
import CodeBlock from '../../components/ui/CodeBlock';

export default function Installation() {
  return (
    <DocLayout>
      <h1 className="text-4xl font-bold mb-6">Installation</h1>
      <p className="text-lg text-light-muted dark:text-dark-muted mb-8">
        Set up the package in your project with just a couple of commands.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Install Package</h2>
      <CodeBlock code="npm install express-authentic" language="bash" />

      <h2 className="text-2xl font-semibold mt-8 mb-4">Install Peer Dependencies</h2>
      <p className="text-light-muted dark:text-dark-muted mb-4">
        You must also install the required peer dependencies for the package to function correctly.
      </p>
      <CodeBlock code="npm install express bcrypt jsonwebtoken nodemailer dotenv" language="bash" />
    </DocLayout>
  );
}