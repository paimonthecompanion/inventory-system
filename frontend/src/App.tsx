import { useEffect, useState } from "react";
import axios from "axios";

interface Product {
  id: number;
  name: string;
  sku: string;
  stock_quantity: number;
  unit_price: number;
}

export default function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Fetch data from the decoupled Python backend
    axios.get("http://127.0.0.1:8000/api/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Warehouse Inventory</h1>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            <strong>{p.name}</strong> ({p.sku}) — {p.stock_quantity} units @ ${p.unit_price}
          </li>
        ))}
      </ul>
    </div>
  );
}