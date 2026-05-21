import { useState } from "react";
import axios from "axios";

function AddItem() {
  const [form, setForm] = useState({
    name: "",
    location: "",
    contact: "",
    type: ""
  });

  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("name", form.name);
    data.append("location", form.location);
    data.append("contact", form.contact);
    data.append("type", form.type);
    data.append("image", image);

    await axios.post("http://localhost:5000/api/items", data);

    alert("Item Added ✅");
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h2>Add Item</h2>

        <input placeholder="Item Name"
          onChange={e => setForm({ ...form, name: e.target.value })}
        />

        <input placeholder="Location"
          onChange={e => setForm({ ...form, location: e.target.value })}
        />

        <input placeholder="Contact"
          onChange={e => setForm({ ...form, contact: e.target.value })}
        />

        <select onChange={e => setForm({ ...form, type: e.target.value })}>
          <option value="">Select Type</option>
          <option value="lost">Lost</option>
          <option value="found">Found</option>
        </select>

        {/* 📸 IMAGE INPUT */}
        <input type="file" onChange={e => setImage(e.target.files[0])} />

        <button type="submit">🚀 Add Item</button>
      </form>
    </div>
  );
}

export default AddItem;