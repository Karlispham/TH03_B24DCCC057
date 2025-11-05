import  { useContext } from "react";
import ProductForm from "../components/ProductForm";
import { ProductContext} from "../context/ProductContext";
import type { Product } from "../context/ProductContext";
import { useNavigate, useParams } from "react-router-dom";

export default function EditProductPage() {
  const ctx = useContext(ProductContext);
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  if (!ctx) return null;
  const product = ctx.products.find((p) => p.id === Number(id));
  if (!product) return <div>Không tìm thấy sản phẩm</div>;

  const handleUpdate = (p: Product) => {
    ctx.updateProduct(p);
    navigate(`/products/${p.id}`);
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Chỉnh sửa sản phẩm</h2>
      <ProductForm initialValue={product} onSubmit={handleUpdate} />
    </div>
  );
}