import DocLayout from './DocLayout';

export default function Introduction() {
  return (
    <DocLayout>
      <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-light-primary to-light-accent dark:from-dark-primary dark:to-dark-accent bg-clip-text text-transparent">
        Express Authentic
      </h1>
      <p className="text-lg text-light-muted dark:text-dark-muted mb-8">
        Production-ready authentication & OAuth utility package for Express.js using TypeScript, ES Modules, JWT, bcrypt, and OAuth providers.
      </p>
      
      <h2 className="text-2xl font-semibold mt-8 mb-4">Features</h2>
      <ul className="list-disc list-inside space-y-2 text-light-text dark:text-dark-text">
        <li>JWT Authentication</li>
        <li>Password Hashing with bcrypt</li>
        <li>OAuth Provider Classes</li>
        <li>Google OAuth Provider</li>
        <li>Github OAuth Provider</li>
        <li>Facebook OAuth Provider</li>
        <li>Apple OAuth Provider</li>
        <li>Gmail OTP Provider</li>
        <li>Express Middleware Protection</li>
        <li>ES Modules Support</li>
        <li>TypeScript Support</li>
        <li>MVC Architecture</li>
        <li>Dist-only npm publishing</li>
      </ul>
    </DocLayout>
  );
}