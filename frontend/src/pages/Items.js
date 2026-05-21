import ItemCard from "../components/ItemCard";
import "../App.css";

function Items() {
  const data = [
    {
      name: "Lost Phone",
      location: "Library",
      contact: "9999999999",
      image: "https://via.placeholder.com/300"
    },
    {
      name: "Found Wallet",
      location: "Canteen",
      contact: "8888888888",
      image: "https://via.placeholder.com/300"
    }
  ];

  return (
    <div className="grid">
      {data.map((item, index) => (
        <ItemCard key={index} item={item} />
      ))}
    </div>
  );
}

export default Items;