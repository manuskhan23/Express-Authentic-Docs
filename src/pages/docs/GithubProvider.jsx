import DocLayout from './DocLayout';
import CodeBlock from '../../components/ui/CodeBlock';

export default function GithubProvider() {
  return (
    <DocLayout>
      <h1 className="text-4xl font-bold mb-6">Github OAuth Provider</h1>
      <p className="text-lg text-light-muted dark:text-dark-muted mb-8">
        Integrate Github OAuth into your Express application easily.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Usage</h2>
      <CodeBlock 
        code={`import { GithubProvider } from "express-authentic";

const github = new GithubProvider({
  clientId: "GITHUB_CLIENT_ID",
  clientSecret: "GITHUB_CLIENT_SECRET"
});`} 
        language="javascript" 
      />
    </DocLayout>
  );
}