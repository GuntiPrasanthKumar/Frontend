import React, { useState } from 'react';

const PRODUCTS = [
  { id: 101, title: 'Mechanical Keyboard (RGB)', price: 89.99, category: 'Hardware', rating: 4.8 },
  { id: 102, title: 'UltraWide Curved Monitor', price: 349.99, category: 'Hardware', rating: 4.9 },
  { id: 103, title: 'React Design Patterns Book', price: 39.99, category: 'Books', rating: 4.7 },
  { id: 104, title: 'Noise-Cancelling Headphones', price: 199.99, category: 'Audio', rating: 4.6 },
  { id: 105, title: 'Full Stack Web Mastery Course', price: 79.99, category: 'Books', rating: 5.0 }
];

export default function EcommerceCatalog() {
  const [selectedCat, setSelectedCat] = useState('All');
  const [cart, setCart] = useState([]);

  const filtered = selectedCat === 'All' ? PRODUCTS : PRODUCTS.filter(p => p.category === selectedCat);

  const addToCart = (product) => {
    setCart(prev => {
      const exist = prev.find(p => p.id === product.id);
      if (exist) return prev.map(p => p.id === product.id ? { ...p, qty: p.qty + 1 } : p);
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const total = cart.reduce((s, p) => s + p.price * p.qty, 0);

  return (
    <div className="module-card">
      <h3>🏆 Milestone Task 2: E-Commerce Product Catalog</h3>
      <div className="filter-bar">
        {['All', 'Hardware', 'Books', 'Audio'].map(cat => (
          <button 
            key={cat} 
            className={`btn-filter ${selectedCat === cat ? 'active' : ''}`}
            onClick={() => setSelectedCat(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="products-grid">
        {filtered.map(p => (
          <div key={p.id} className="sub-card">
            <h4>{p.title}</h4>
            <p className="price">$${p.price.toFixed(2)} | ⭐ {p.rating}</p>
            <button onClick={() => addToCart(p)} className="btn-primary">+ Add to Cart</button>
          </div>
        ))}
      </div>

      <div className="cart-summary-box mt-3">
        <h4>🛒 Shopping Cart ({cart.reduce((a, b) => a + b.qty, 0)} items) - Total: $${total.toFixed(2)}</h4>
        {cart.map(c => (
          <div key={c.id} className="cart-row">
            <span>{c.title} x {c.qty}</span>
            <span>$${(c.price * c.qty).toFixed(2)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}