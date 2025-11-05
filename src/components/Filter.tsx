import React from 'react';

interface FilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  minPrice: string;
  maxPrice: string;
  onMinPriceChange: (value: string) => void;
  onMaxPriceChange: (value: string) => void;
}

const Filter: React.FC<FilterProps> = ({
  selectedCategory,
  onCategoryChange,
  minPrice,
  maxPrice,
  onMinPriceChange,
  onMaxPriceChange
}) => {
  const categories = ['Tất cả', 'Điện tử', 'Quần áo', 'Đồ ăn', 'Sách', 'Khác'];

  return (
    <div style={styles.container}>
      <div style={styles.filterGroup}>
        <label>Danh mục:</label>
        <select 
          value={selectedCategory} 
          onChange={(e) => onCategoryChange(e.target.value)}
          style={styles.select}
        >
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <div style={styles.filterGroup}>
        <label>Giá từ:</label>
        <input
          type="number"
          value={minPrice}
          onChange={(e) => onMinPriceChange(e.target.value)}
          placeholder="0"
          style={styles.input}
        />
      </div>

      <div style={styles.filterGroup}>
        <label>Đến:</label>
        <input
          type="number"
          value={maxPrice}
          onChange={(e) => onMaxPriceChange(e.target.value)}
          placeholder="Không giới hạn"
          style={styles.input}
        />
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    gap: '20px',
    marginBottom: '20px',
    flexWrap: 'wrap' as const
  },
  filterGroup: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '5px'
  },
  select: {
    padding: '8px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontSize: '14px'
  },
  input: {
    padding: '8px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontSize: '14px',
    width: '150px'
  }
};

export default Filter;