import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import './Layout.css';

function Layout() {
  return (
    <div className="layout">
      {/* Ancient map background layer */}
      <div className="ancient-map" aria-hidden="true"></div>
      <Navbar />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
