import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import AddItem from "./pages/AddItem";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">🏠 Home</Link>
        <Link to="/add">➕ Add Item</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddItem />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;