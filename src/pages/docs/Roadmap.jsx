import DocLayout from './DocLayout';

export default function Roadmap() {
  const items = [
    "Refresh Tokens",
    "OAuth Redirect Flow",
    "Session Management",
    "Redis Support",
    "Rate Limiting",
    "Email Verification",
    "Password Reset",
    "Multi-provider Login Linking",
    "OAuth Callback Handlers",
    "Better Error System"
  ];

  return (
    <DocLayout>
      <h1 className="text-4xl font-bold mb-6">Roadmap</h1>
      <p className="text-lg text-light-muted dark:text-dark-muted mb-8">
        Upcoming features and improvements planned for <code className="px-1 py-0.5 bg-light-card dark:bg-dark-card rounded text-sm">express-authentic</code>.
      </p>

      <ul className="space-y-3 mt-6">
        {items.map((item, index) => (
          <li key={index} className="flex items-center space-x-3 text-light-text dark:text-dark-text">
            <span className="h-2 w-2 rounded-full bg-light-primary dark:bg-dark-accent"></span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div className="mt-12 p-6 rounded-xl glass border border-light-border dark:border-dark-border">
        <h3 className="text-xl font-semibold mb-2">Docs</h3>
        <p className="text-light-muted dark:text-dark-muted text-sm">
          Official documentation website is currently under development. Until then:
        </p>
        <ul className="list-disc list-inside mt-3 space-y-1 text-sm text-light-muted dark:text-dark-muted">
          <li>Read README examples</li>
          <li>Explore source code</li>
          <li>Use TypeScript IntelliSense</li>
        </ul>
        <p className="mt-4 text-xs text-light-muted dark:text-dark-muted italic">
          Because developers collectively decided documentation is something you write after surviving production incidents.
        </p>
      </div>
    </DocLayout>
  );
}