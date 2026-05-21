import { useEffect, useState } from "react";
import axios from "axios";
import ItemCard from "../components/ItemCard";
import "../App.css";

function Home() {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const fetchItems = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/items");
      setItems(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  // 🔥 FILTER + SEARCH LOGIC
  const filteredItems = items.filter(item => {
    return (
      (filter === "all" || item.type === filter) &&
      item.name.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className="container">
      <h1>🔍 Lost & Found</h1>

      {/* 🔍 SEARCH */}
      <input
        className="search-box"
        placeholder="Search item..."
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* 🎯 FILTER */}
      <div>
        <button className="filter-btn" onClick={() => setFilter("all")}>
          All
        </button>
        <button className="filter-btn" onClick={() => setFilter("lost")}>
          Lost
        </button>
        <button className="filter-btn" onClick={() => setFilter("found")}>
          Found
        </button>
      </div>

      {/* 🧭 GRID */}
      <div className="grid">
        {filteredItems.length === 0 ? (
          <p>No items found 😢</p>
        ) : (
          filteredItems.map(item => (
            <ItemCard key={item._id} item={item} refresh={fetchItems} />
          ))
        )}
      </div>
    </div>
  );
}

export default Home;