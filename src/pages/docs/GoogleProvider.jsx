import DocLayout from './DocLayout';
import CodeBlock from '../../components/ui/CodeBlock';

export default function GoogleProvider() {
  return (
    <DocLayout>
      <h1 className="text-4xl font-bold mb-6">Google OAuth Provider</h1>
      <p className="text-lg text-light-muted dark:text-dark-muted mb-8">
        Integrate Google OAuth into your Express application easily.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Usage</h2>
      <CodeBlock 
        code={`import { GoogleProvider } from "express-authentic";

const google = new GoogleProvider({
  clientId: "GOOGLE_CLIENT_ID",
  clientSecret: "GOOGLE_CLIENT_SECRET"
});`} 
        language="javascript" 
      />
    </DocLayout>
  );
}