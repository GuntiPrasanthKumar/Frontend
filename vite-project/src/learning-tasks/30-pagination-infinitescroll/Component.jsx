import React, { useState } from 'react';

const ALL_DATA = Array.from({ length: 25 }, (_, i) => ({
  id: i + 1,
  title: `Lesson Module #${i + 1}: Modern Frontend Architecture`,
  status: i % 2 === 0 ? 'Published' : 'Draft'
}));

export default function PaginationDemo() {
  const [page, setPage] = useState(1);
  const pageSize = 5;
  const totalPages = Math.ceil(ALL_DATA.length / pageSize);

  const currentSlice = ALL_DATA.slice((page - 1) * pageSize, page * pageSize);

  return (
    <div className="module-card">
      <h3>📄 Topic 30: Pagination & Infinite Scroll Algorithms</h3>
      
      <ul className="skill-list">
        {currentSlice.map(item => (
          <li key={item.id} className="skill-item">
            <span><strong>#{item.id}</strong> {item.title}</span>
            <span className="badge-category">{item.status}</span>
          </li>
        ))}
      </ul>

      <div className="pagination-bar">
        <button disabled={page === 1} onClick={() => setPage(p => p - 1)} className="btn-small">◀ Previous</button>
        <span>Page {page} of {totalPages}</span>
        <button disabled={page === totalPages} onClick={() => setPage(p => p + 1)} className="btn-small">Next ▶</button>
      </div>
    </div>
  );
}