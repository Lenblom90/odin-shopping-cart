import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar.js';
import '../styles/App.css';

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <div id="detail">
        <Outlet />
      </div>
    </div>
  );
}
