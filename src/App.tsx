import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductDetailPage from "./pages/ProductDetail";  
import AddProductPage from "./pages/AddProduct";        
import EditProductPage from "./pages/EditProduct";      
import { ProductProvider } from "./context/ProductContext";
import "./App.css";

export default function App() {
  return (
    <ProductProvider>
      <BrowserRouter>
        <div className="app-container">
          <header className="header">
            <h1 className="app-title">Quản lý sản phẩm</h1>
            <div className="nav-buttons">
              <Link to="/" className="nav-button home-btn">Trang chủ</Link>
              <Link to="/add" className="nav-button add-btn">Thêm sản phẩm</Link>
            </div>
          </header>

          <main className="content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/products/:id" element={<ProductDetailPage />} />
              <Route path="/add" element={<AddProductPage />} />
              <Route path="/edit/:id" element={<EditProductPage />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </ProductProvider>
  );
}