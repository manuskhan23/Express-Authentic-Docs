import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { SearchProvider } from './context/SearchContext';
import Layout from './components/layout/Layout';
import Routes from './routes';
import LoadingScreen from './components/ui/LoadingScreen';
import { useState, useEffect } from 'react';
import MouseGlow from './components/effects/MouseGlow';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <ThemeProvider>
      <SearchProvider>
        {loading ? (
          <LoadingScreen />
        ) : (
          <Router>
            <MouseGlow />
            <Layout>
              <Routes />
            </Layout>
          </Router>
        )}
      </SearchProvider>
    </ThemeProvider>
  );
}