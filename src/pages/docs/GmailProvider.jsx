import DocLayout from './DocLayout';
import CodeBlock from '../../components/ui/CodeBlock';

export default function GmailProvider() {
  return (
    <DocLayout>
      <h1 className="text-4xl font-bold mb-6">Gmail OTP Provider</h1>
      <p className="text-lg text-light-muted dark:text-dark-muted mb-8">
        Send one-time passwords via Gmail using Nodemailer under the hood.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Send OTP</h2>
      <CodeBlock 
        code={`import { GmailProvider } from "express-authentic";

const gmail = new GmailProvider({
  user: "your@gmail.com",
  pass: "your-app-password"
});

await gmail.sendOTP(
  "user@gmail.com",
  "123456"
);`} 
        language="javascript" 
      />
    </DocLayout>
  );
}