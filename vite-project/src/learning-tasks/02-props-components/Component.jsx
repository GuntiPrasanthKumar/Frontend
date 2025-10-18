import React from 'react';

function UserCard({ name = 'Anonymous', role = 'User', avatar, children, onContact }) {
  return (
    <div className="sub-card">
      <div className="avatar-circle">{avatar || name.charAt(0)}</div>
      <div>
        <h4>{name}</h4>
        <span className="sub-badge">{role}</span>
        <div className="card-content">{children}</div>
        <button onClick={() => onContact(name)} className="btn-small">Contact</button>
      </div>
    </div>
  );
}

export default function PropsComponentsDemo() {
  const handleContact = (name) => {
    alert(`Opening contact modal for: ${name}`);
  };

  return (
    <div className="module-card">
      <h3>🧩 Topic 02: Functional Components & Props</h3>
      <p>Components accept arbitrary inputs called props and return React elements describing UI.</p>

      <div className="cards-grid">
        <UserCard name="Sarah Connor" role="Lead Engineer" avatar="👩‍💻" onContact={handleContact}>
          <p>Specializes in React, Next.js, and Design Systems.</p>
        </UserCard>
        
        <UserCard name="David Miller" role="UI/UX Designer" avatar="🎨" onContact={handleContact}>
          <p>Crafting accessible, pixel-perfect user experiences.</p>
        </UserCard>

        <UserCard onContact={handleContact}>
          <p>Default prop fallback in action.</p>
        </UserCard>
      </div>
    </div>
  );
}