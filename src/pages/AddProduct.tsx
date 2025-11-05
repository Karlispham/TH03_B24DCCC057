import  { useContext } from "react";
import ProductForm from "../components/ProductForm";
import { ProductContext} from "../context/ProductContext";
import type { Product } from "../context/ProductContext";
import { useNavigate } from "react-router-dom";

export default function AddProductPage() {
  const ctx = useContext(ProductContext);
  const navigate = useNavigate();

  if (!ctx) return null;

  const handleAdd = (p: Product) => {
    ctx.addProduct(p);
    navigate("/");
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Thêm sản phẩm</h2>
      <ProductForm onSubmit={handleAdd} />
    </div>
  );
}

