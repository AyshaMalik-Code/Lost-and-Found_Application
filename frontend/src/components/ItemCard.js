import axios from "axios";
import { useState } from "react";
import "../App.css";

function ItemCard({ item, refresh }) {

  const [editMode, setEditMode] = useState(false);
  const [updated, setUpdated] = useState(item);
  const [newImage, setNewImage] = useState(null);

  // 🗑 DELETE
  const handleDelete = async () => {
    if (!item._id) return alert("Invalid ID ❌");

    try {
      await axios.delete(`http://localhost:5000/api/items/${item._id}`);
      refresh();
    } catch (err) {
      console.log(err);
    }
  };

  // ✏️ UPDATE
  const handleUpdate = async () => {
    if (!item._id) return alert("Invalid ID ❌");

    try {
      const data = new FormData();
      data.append("name", updated.name);
      data.append("location", updated.location);
      data.append("contact", updated.contact);
      data.append("type", updated.type);

      if (newImage) {
        data.append("image", newImage);
      }

      await axios.put(
        `http://localhost:5000/api/items/${item._id}`,
        data
      );

      setEditMode(false);
      refresh();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="card">

      {/* 📸 REAL IMAGE */}
      <img
        src={
          item.image
            ? `http://localhost:5000/uploads/${item.image}`
            : "https://via.placeholder.com/300"
        }
        alt="item"
        style={{ width: "100%", borderRadius: "10px" }}
      />

      {editMode ? (
        <>
          <input
            value={updated.name}
            onChange={e => setUpdated({ ...updated, name: e.target.value })}
          />

          <input
            value={updated.location}
            onChange={e => setUpdated({ ...updated, location: e.target.value })}
          />

          <input
            value={updated.contact}
            onChange={e => setUpdated({ ...updated, contact: e.target.value })}
          />

          <select
            value={updated.type}
            onChange={e => setUpdated({ ...updated, type: e.target.value })}
          >
            <option value="lost">Lost</option>
            <option value="found">Found</option>
          </select>

          {/* 📸 CHANGE IMAGE */}
          <input type="file" onChange={e => setNewImage(e.target.files[0])} />

          <button onClick={handleUpdate}>💾 Save</button>
        </>
      ) : (
        <>
          <h3>{item.name}</h3>

          <p style={{
            color: item.type === "lost" ? "red" : "green",
            fontWeight: "bold"
          }}>
            {item.type === "lost" ? "🔴 Lost" : "🟢 Found"}
          </p>

          <p>📍 {item.location}</p>
          <p>📞 {item.contact}</p>

          <button onClick={() => setEditMode(true)}>✏️ Edit</button>
          <button onClick={handleDelete}>🗑 Delete</button>
        </>
      )}

    </div>
  );
}

export default ItemCard;