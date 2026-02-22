import './NavBar.css'
import { NavLink } from 'react-router-dom'; // ✅ fix here

function NavBar() {
  return (
    <nav className="navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/directors">Directors</NavLink>
      <NavLink to="/about">About</NavLink>
    </nav>
  );
}

export default NavBar;
