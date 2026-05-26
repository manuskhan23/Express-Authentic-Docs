import DocLayout from './DocLayout';
import CodeBlock from '../../components/ui/CodeBlock';

export default function QuickStart() {
  return (
    <DocLayout>
      <h1 className="text-4xl font-bold mb-6">Quick Start</h1>
      <p className="text-lg text-light-muted dark:text-dark-muted mb-8">
        Get up and running in minutes.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Import Package</h2>
      <CodeBlock 
        code={`import {
  AuthService,
  TokenService,
  GoogleProvider,
  GithubProvider,
  FacebookProvider,
  AppleProvider,
  GmailProvider
} from "express-authentic";`} 
        language="javascript" 
      />

      <h2 className="text-2xl font-semibold mt-8 mb-4">Project Structure</h2>
      <p className="text-light-muted dark:text-dark-muted mb-4">
        When implementing your application, it is recommended to follow this MVC structure:
      </p>
      <CodeBlock 
        code={`src/
├── config/
├── controllers/
├── middlewares/
├── providers/
│   ├── oauth/
│   └── mail/
├── routes/
├── services/
├── types/
├── utils/
├── app.ts
├── server.ts
└── index.ts`} 
        language="text" 
      />
    </DocLayout>
  );
}