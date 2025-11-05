import { useState } from "react";
import type { Product } from "../context/ProductContext";

interface Props {
  initialValue?: Product;
  onSubmit: (p: Product) => void;
}

const ProductForm = ({ initialValue, onSubmit }: Props) => {
  const [ten, setTen] = useState(initialValue?.ten || "");
  const [danhMuc, setDanhMuc] = useState(initialValue?.danhMuc || "");
  const [gia, setGia] = useState(initialValue?.gia || 0);
  const [soLuong, setSoLuong] = useState(initialValue?.soLuong || 0);
  const [moTa, setMoTa] = useState(initialValue?.moTa || "");
  const [image, setImage] = useState(initialValue?.image || "");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const errs: any = {};
    if (ten.trim().length < 3) errs.ten = "Tên phải có ít nhất 3 ký tự";
    if (gia <= 0) errs.gia = "Giá phải là số dương";
    if (soLuong <= 0 || !Number.isInteger(soLuong))
      errs.soLuong = "Số lượng phải là số nguyên dương";
    if (!danhMuc) errs.danhMuc = "Phải chọn danh mục";
    if (!image) errs.image = "Vui lòng nhập URL hình ảnh";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    onSubmit({
      id: initialValue?.id || Date.now(),
      ten,
      danhMuc,
      gia,
      soLuong,
      moTa,
      image
    });
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <div>
        <label>Tên sản phẩm</label>
        <input
          value={ten}
          onChange={e => setTen(e.target.value)}
          placeholder="Tên sản phẩm"
          style={{ border: "1px solid #ccc", padding: "5px", width: "100%" }}
        />
        {errors.ten && <p style={{ color: "red" }}>{errors.ten}</p>}
      </div>

      <div>
        <label>Danh mục</label>
        <select
          value={danhMuc}
          onChange={e => setDanhMuc(e.target.value)}
          style={{ border: "1px solid #ccc", padding: "5px", width: "100%" }}
        >
          <option value="">-- Chọn danh mục --</option>
          <option value="Điện tử">Điện tử</option>
          <option value="Quần áo">Quần áo</option>
          <option value="Đồ ăn">Đồ ăn</option>
          <option value="Sách">Sách</option>
          <option value="Khác">Khác</option>
        </select>
        {errors.danhMuc && <p style={{ color: "red" }}>{errors.danhMuc}</p>}
      </div>

      <div>
        <label>Giá</label>
        <input
          type="number"
          value={gia}
          onChange={e => setGia(Number(e.target.value))}
          placeholder="Giá"
          style={{ border: "1px solid #ccc", padding: "5px", width: "100%" }}
        />
        {errors.gia && <p style={{ color: "red" }}>{errors.gia}</p>}
      </div>

      <div>
        <label>Số lượng</label>
        <input
          type="number"
          value={soLuong}
          onChange={e => setSoLuong(Number(e.target.value))}
          placeholder="Số lượng"
          style={{ border: "1px solid #ccc", padding: "5px", width: "100%" }}
        />
        {errors.soLuong && <p style={{ color: "red" }}>{errors.soLuong}</p>}
      </div>

      <div>
        <label>Hình ảnh (URL)</label>
        <input
          type="text"
          value={image}
          onChange={e => setImage(e.target.value)}
          placeholder="https://example.com/image.jpg"
          style={{ border: "1px solid #ccc", padding: "5px", width: "100%" }}
        />
        {errors.image && <p style={{ color: "red" }}>{errors.image}</p>}
      </div>

      <div>
        <label>Mô tả</label>
        <textarea
          value={moTa}
          onChange={e => setMoTa(e.target.value)}
          placeholder="Mô tả"
          style={{ border: "1px solid #ccc", padding: "5px", width: "100%" }}
        />
      </div>

      <button
        style={{
          backgroundColor: "#5bc0de",
          color: "white",
          padding: "8px",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Lưu
      </button>
    </form>
  );
};

export default ProductForm;