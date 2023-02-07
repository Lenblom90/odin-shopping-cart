import { Outlet } from 'react-router-dom';
import NavBar from '../components/Navbar.js';
import '../styles/App.css';

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <div id="detail">
        <Outlet />
      </div>
    </div>
  );
}
