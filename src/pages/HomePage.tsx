import { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import ProductList from "../components/ProductList";
import SearchBar from "../components/SearchBar";
import Filter from "../components/Filter";
import Pagination from "../components/Pagination";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const context = useContext(ProductContext);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Tất cả");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  if (!context) return null;
  const { products } = context;

  const filtered = products.filter(p => {
    const matchSearch = p.ten.toLowerCase().includes(search.toLowerCase());
    const matchCategory = category === "Tất cả" || p.danhMuc === category;
    const matchMin = minPrice ? p.gia >= Number(minPrice) : true;
    const matchMax = maxPrice ? p.gia <= Number(maxPrice) : true;
    return matchSearch && matchCategory && matchMin && matchMax;
  });

  const perPage = 6;
  const totalPages = Math.ceil(filtered.length / perPage);
  const paginated = filtered.slice((page - 1) * perPage, page * perPage);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Danh sách sản phẩm</h1>
      <button
        onClick={() => navigate("/add")}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
      >
        + Thêm sản phẩm
      </button>

      <SearchBar 
        searchTerm={search} 
        onSearchChange={setSearch} 
      />
      
      <Filter
        selectedCategory={category}
        onCategoryChange={setCategory}
        minPrice={minPrice}
        maxPrice={maxPrice}
        onMinPriceChange={setMinPrice}
        onMaxPriceChange={setMaxPrice}
      />

      <ProductList products={paginated} />
      
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={setPage}
        totalProducts={filtered.length}
      />
    </div>
  );
};

export default HomePage;