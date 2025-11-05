import { ProductContext } from "../context/ProductContext";
import type { Product } from "../context/ProductContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }: { product: Product }) => {
  const navigate = useNavigate();
  const context = useContext(ProductContext);
  if (!context) return null;

  const { deleteProduct } = context;

  return (
    <div style={{ border: "1px solid #ddd", padding: "15px", borderRadius: "10px", textAlign: "center" }}>
      {product.image && (
        <img
          src={product.image}
          alt={product.ten}
          style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "8px", marginBottom: "10px" }}
        />
      )}
      <h3 style={{ fontWeight: "bold" }}>{product.ten}</h3>
      <p>Danh mục: {product.danhMuc}</p>
      <p>Giá: {product.gia.toLocaleString()} VND</p>
      <div style={{ marginTop: "10px", display: "flex", justifyContent: "center", gap: "10px" }}>
        <button onClick={() => navigate(`/products/${product.id}`)} style={{ background: "green", color: "#fff", padding: "5px 10px", border: "none", borderRadius: "4px" }}>Xem</button>
        <button onClick={() => navigate(`/edit/${product.id}`)} style={{ background: "orange", color: "#fff", padding: "5px 10px", border: "none", borderRadius: "4px" }}>Sửa</button>
        <button onClick={() => deleteProduct(product.id)} style={{ background: "red", color: "#fff", padding: "5px 10px", border: "none", borderRadius: "4px" }}>Xóa</button>
      </div>
    </div>
  );
};

export default ProductCard;