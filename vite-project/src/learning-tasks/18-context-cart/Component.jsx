import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([
    { id: 1, title: 'React Mastery Guide', price: 29.99, qty: 1 }
  ]);

  const addItem = (item) => {
    setCart(prev => {
      const exists = prev.find(i => i.id === item.id);
      if (exists) {
        return prev.map(i => i.id === item.id ? { ...i, qty: i.qty + 1 } : i);
      }
      return [...prev, { ...item, qty: 1 }];
    });
  };

  const removeItem = (id) => setCart(prev => prev.filter(i => i.id !== id));

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, total }}>
      {children}
    </CartContext.Provider>
  );
}

export default function CartContextDemo() {
  return (
    <CartProvider>
      <CartInner />
    </CartProvider>
  );
}

function CartInner() {
  const { cart, addItem, removeItem, total } = useContext(CartContext);

  const sampleProducts = [
    { id: 2, title: 'Frontend Architecture Blueprint', price: 49.99 },
    { id: 3, title: 'TypeScript Pro Edition', price: 34.99 }
  ];

  return (
    <div className="module-card">
      <h3>🛒 Topic 18: Global Cart with Context</h3>
      <div className="products-grid">
        {sampleProducts.map(p => (
          <div key={p.id} className="sub-card">
            <h4>{p.title}</h4>
            <p>$${p.price.toFixed(2)}</p>
            <button onClick={() => addItem(p)} className="btn-small">+ Add to Cart</button>
          </div>
        ))}
      </div>

      <div className="cart-summary-box">
        <h4>Cart ({cart.reduce((a, b) => a + b.qty, 0)} items)</h4>
        {cart.map(item => (
          <div key={item.id} className="cart-row">
            <span>{item.title} (x{item.qty}) - $${(item.price * item.qty).toFixed(2)}</span>
            <button onClick={() => removeItem(item.id)} className="btn-del">✕</button>
          </div>
        ))}
        <h4>Total: $${total.toFixed(2)}</h4>
      </div>
    </div>
  );
}