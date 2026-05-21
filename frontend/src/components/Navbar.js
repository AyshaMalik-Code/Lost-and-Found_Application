import { Link } from "react-router-dom";
import "../App.css";

function Navbar() {
  return (
    <nav className="nav">
      <h2>🔍 Lost & Found</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/items">Items</Link>
        <Link to="/post">Post</Link>
      </div>
    </nav>
  );
}

export default Navbar;