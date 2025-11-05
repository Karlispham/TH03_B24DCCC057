import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  totalProducts: number;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  totalProducts
}) => {
  return (
    <div style={styles.container}>
      <p>Tổng số sản phẩm: {totalProducts} | Trang {currentPage} / {totalPages}</p>
      <div style={styles.buttons}>
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          style={styles.button}
        >
          ← Previous
        </button>
        
        {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            style={{
              ...styles.button,
              backgroundColor: page === currentPage ? '#007bff' : '#fff',
              color: page === currentPage ? '#fff' : '#000'
            }}
          >
            {page}
          </button>
        ))}

        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          style={styles.button}
        >
          Next →
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    marginTop: '30px',
    textAlign: 'center' as const
  },
  buttons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    marginTop: '10px',
    flexWrap: 'wrap' as const
  },
  button: {
    padding: '8px 15px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    backgroundColor: '#fff',
    cursor: 'pointer',
    fontSize: '14px'
  }
};

export default Pagination;