import { Routes as ReactRoutes, Route } from 'react-router-dom';
import Home from './pages/Home';

// Doc Pages
import Introduction from './pages/docs/Introduction';
import Installation from './pages/docs/Installation';
import QuickStart from './pages/docs/QuickStart';
import AuthService from './pages/docs/AuthService';
import TokenService from './pages/docs/TokenService';
import GoogleProvider from './pages/docs/GoogleProvider';
import GithubProvider from './pages/docs/GithubProvider';
import FacebookProvider from './pages/docs/FacebookProvider';
import AppleProvider from './pages/docs/AppleProvider';
import GmailProvider from './pages/docs/GmailProvider';
import Middleware from './pages/docs/Middleware';
import Architecture from './pages/docs/Architecture';
import EnvironmentVariables from './pages/docs/EnvironmentVariables';
import ApiExamples from './pages/docs/ApiExamples';
import NpmPublishing from './pages/docs/NpmPublishing';
import Roadmap from './pages/docs/Roadmap';

const docRoutes = [
  { path: "introduction", element: <Introduction /> },
  { path: "installation", element: <Installation /> },
  { path: "quick-start", element: <QuickStart /> },
  { path: "auth-service", element: <AuthService /> },
  { path: "token-service", element: <TokenService /> },
  { path: "google-provider", element: <GoogleProvider /> },
  { path: "github-provider", element: <GithubProvider /> },
  { path: "facebook-provider", element: <FacebookProvider /> },
  { path: "apple-provider", element: <AppleProvider /> },
  { path: "gmail-provider", element: <GmailProvider /> },
  { path: "middleware", element: <Middleware /> },
  { path: "architecture", element: <Architecture /> },
  { path: "environment-variables", element: <EnvironmentVariables /> },
  { path: "api-examples", element: <ApiExamples /> },
  { path: "npm-publishing", element: <NpmPublishing /> },
  { path: "roadmap", element: <Roadmap /> },
];

export default function Routes() {
  return (
    <ReactRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/docs">
        {docRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Route>
    </ReactRoutes>
  );
}