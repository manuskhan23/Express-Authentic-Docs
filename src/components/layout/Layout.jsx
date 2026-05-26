import Navbar from './Navbar';
import Sidebar from './Sidebar';
import SearchModal from '../search/SearchModal';
import { useLocation } from 'react-router-dom';

export default function Layout({ children }) {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="relative min-h-screen">
      <Navbar />
      <SearchModal />
      {!isHome && <Sidebar />}
      <main className={`${isHome ? '' : 'md:ml-72 pt-20'} transition-all duration-300`}>
        {children}
      </main>
    </div>
  );
}