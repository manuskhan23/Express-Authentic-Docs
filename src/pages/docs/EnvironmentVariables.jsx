import DocLayout from './DocLayout';
import CodeBlock from '../../components/ui/CodeBlock';

export default function EnvironmentVariables() {
  return (
    <DocLayout>
      <h1 className="text-4xl font-bold mb-6">Environment Variables</h1>
      <p className="text-lg text-light-muted dark:text-dark-muted mb-8">
        Configure your application securely using environment variables.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">.env Configuration</h2>
      <CodeBlock 
        code={`# =========================================
# SERVER CONFIG
# =========================================
PORT=3000

# =========================================
# JWT CONFIG
# =========================================
JWT_SECRET=your_super_secret_jwt_key

# =========================================
# GOOGLE OAUTH
# =========================================
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

# =========================================
# GITHUB OAUTH
# =========================================
GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret

# =========================================
# FACEBOOK OAUTH
# =========================================
FACEBOOK_APP_ID=your_facebook_app_id
FACEBOOK_CLIENT_SECRET=your_facebook_client_secret

# =========================================
# APPLE OAUTH
# =========================================
APPLE_CLIENT_ID=your_apple_client_id
APPLE_CLIENT_SECRET=your_apple_client_secret

# =========================================
# GMAIL PROVIDER
# =========================================
GMAIL_USER=your_email@gmail.com
GMAIL_PASS=your_gmail_app_password`} 
        language="env" 
      />

      <h2 className="text-2xl font-semibold mt-8 mb-4">OAuth Providers Requirements</h2>
      <div className="overflow-x-auto mt-4 border border-light-border dark:border-dark-border rounded-lg">
        <table className="w-full text-left text-sm">
          <thead className="bg-light-card dark:bg-dark-card border-b border-light-border dark:border-dark-border">
            <tr>
              <th className="px-4 py-3 font-semibold">Provider</th>
              <th className="px-4 py-3 font-semibold">Required Credentials</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-light-border dark:border-dark-border">
              <td className="px-4 py-3">Google</td>
              <td className="px-4 py-3 text-light-muted dark:text-dark-muted">clientId + clientSecret</td>
            </tr>
            <tr className="border-b border-light-border dark:border-dark-border">
              <td className="px-4 py-3">Github</td>
              <td className="px-4 py-3 text-light-muted dark:text-dark-muted">clientId + clientSecret</td>
            </tr>
            <tr className="border-b border-light-border dark:border-dark-border">
              <td className="px-4 py-3">Facebook</td>
              <td className="px-4 py-3 text-light-muted dark:text-dark-muted">appId + clientSecret</td>
            </tr>
            <tr>
              <td className="px-4 py-3">Apple</td>
              <td className="px-4 py-3 text-light-muted dark:text-dark-muted">clientId + clientSecret</td>
            </tr>
          </tbody>
        </table>
      </div>
    </DocLayout>
  );
}