export const sidebarConfig = [
  {
    title: "Getting Started",
    pages: [
      { title: "Introduction", slug: "introduction" },
      { title: "Installation", slug: "installation" },
      { title: "Quick Start", slug: "quick-start" }
    ]
  },
  {
    title: "Core Services",
    pages: [
      { title: "AuthService", slug: "auth-service" },
      { title: "TokenService", slug: "token-service" }
    ]
  },
  {
    title: "Providers",
    pages: [
      { title: "Google Provider", slug: "google-provider" },
      { title: "Github Provider", slug: "github-provider" },
      { title: "Facebook Provider", slug: "facebook-provider" },
      { title: "Apple Provider", slug: "apple-provider" },
      { title: "Gmail Provider", slug: "gmail-provider" }
    ]
  },
  {
    title: "Architecture & Config",
    pages: [
      { title: "Middleware", slug: "middleware" },
      { title: "MVC Architecture", slug: "architecture" },
      { title: "Environment Variables", slug: "environment-variables" }
    ]
  },
  {
    title: "Examples & More",
    pages: [
      { title: "API Examples", slug: "api-examples" },
      { title: "NPM Publishing", slug: "npm-publishing" },
      { title: "Roadmap", slug: "roadmap" }
    ]
  }
];

export const allPages = sidebarConfig.flatMap(cat => cat.pages);