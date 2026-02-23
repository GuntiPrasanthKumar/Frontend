import React, { useState } from 'react';

const RECIPES = [
  { id: 1, title: 'Avocado Toast with Poached Egg', cal: 350, time: '10 min', category: 'Breakfast' },
  { id: 2, title: 'Mediterranean Quinoa Bowl', cal: 520, time: '20 min', category: 'Lunch' },
  { id: 3, title: 'Grilled Salmon with Asparagus', cal: 610, time: '25 min', category: 'Dinner' }
];

export default function RecipePlanner() {
  const [savedMeals, setSavedMeals] = useState([1]);

  const toggleSave = (id) => {
    setSavedMeals(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  return (
    <div className="module-card">
      <h3>🏆 Milestone Task 5: Recipe & Meal Planner</h3>
      
      <div className="products-grid">
        {RECIPES.map(r => (
          <div key={r.id} className="sub-card">
            <h4>{r.title}</h4>
            <p>🔥 {r.cal} kcal | ⏱️ {r.time} | 🏷️ {r.category}</p>
            <button 
              onClick={() => toggleSave(r.id)} 
              className={savedMeals.includes(r.id) ? 'btn-success' : 'btn-outline'}
            >
              {savedMeals.includes(r.id) ? '✓ In Meal Plan' : '+ Add to Plan'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}