import  { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";

export default function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const ctx = useContext(ProductContext);
  const navigate = useNavigate();

  if (!ctx) return null;
  const product = ctx.products.find((p) => p.id === Number(id));
  if (!product) return <div>Không tìm thấy sản phẩm</div>;

  return (
    <div className="p-4 border rounded">
      <h2 className="text-2xl font-bold mb-2">{product.ten}</h2>
      <p className="mb-1"><strong>Danh mục:</strong> {product.danhMuc}</p>
      <p className="mb-1"><strong>Giá:</strong> {product.gia.toLocaleString()} VND</p>
      <p className="mb-1"><strong>Số lượng:</strong> {product.soLuong}</p>
      <p className="mb-2"><strong>Mô tả:</strong> {product.moTa}</p>

      <div className="flex gap-2">
        <button
          className="bg-yellow-500 text-white px-3 py-1 rounded"
          onClick={() => navigate(`/edit/${product.id}`)}
        >
          Sửa
        </button>
        <button
          className="bg-gray-400 text-white px-3 py-1 rounded"
          onClick={() => navigate("/")}
        >
          Quay lại
        </button>
      </div>
    </div>
  );
}