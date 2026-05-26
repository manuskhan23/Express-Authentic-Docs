import DocLayout from './DocLayout';
import CodeBlock from '../../components/ui/CodeBlock';

export default function FacebookProvider() {
  return (
    <DocLayout>
      <h1 className="text-4xl font-bold mb-6">Facebook OAuth Provider</h1>
      <p className="text-lg text-light-muted dark:text-dark-muted mb-8">
        Integrate Facebook OAuth into your Express application easily.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Usage</h2>
      <CodeBlock 
        code={`import { FacebookProvider } from "express-authentic";

const facebook = new FacebookProvider({
  appId: "FACEBOOK_APP_ID",
  clientSecret: "FACEBOOK_CLIENT_SECRET"
});`} 
        language="javascript" 
      />
    </DocLayout>
  );
}