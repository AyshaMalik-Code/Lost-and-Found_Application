import "../App.css";

function Post() {
  return (
    <div className="form-container">
      <h2>Post Item</h2>

      <input placeholder="Item Name" />
      <input placeholder="Location" />
      <input placeholder="Contact" />

      <select>
        <option>Lost</option>
        <option>Found</option>
      </select>

      <input type="file" />

      <button>Submit</button>
    </div>
  );
}

export default Post;