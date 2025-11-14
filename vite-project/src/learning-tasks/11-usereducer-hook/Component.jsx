import React, { useReducer } from 'react';

const initialState = { count: 0, step: 1, logs: [] };

function counterReducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { 
        ...state, 
        count: state.count + state.step,
        logs: [`Incremented by ${state.step}`, ...state.logs].slice(0, 4)
      };
    case 'DECREMENT':
      return { 
        ...state, 
        count: state.count - state.step,
        logs: [`Decremented by ${state.step}`, ...state.logs].slice(0, 4)
      };
    case 'SET_STEP':
      return { ...state, step: action.payload };
    case 'RESET':
      return { ...initialState, logs: ['Counter reset to zero'] };
    default:
      return state;
  }
}

export default function UseReducerDemo() {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div className="module-card">
      <h3>⚙️ Topic 11: State Transitions with useReducer</h3>
      <p>Ideal for complex state objects and state logic involving multiple sub-values.</p>

      <div className="demo-box">
        <div className="counter-display">
          <span className="count-number">{state.count}</span>
          <span className="count-label">Reducer Count (Step: {state.step})</span>
        </div>

        <div className="btn-group">
          <button onClick={() => dispatch({ type: 'DECREMENT' })} className="btn-danger">-</button>
          <button onClick={() => dispatch({ type: 'INCREMENT' })} className="btn-success">+</button>
          <button onClick={() => dispatch({ type: 'RESET' })} className="btn-outline">Reset</button>
        </div>

        <div className="step-options">
          {[1, 5, 10, 25].map(stepVal => (
            <button 
              key={stepVal}
              onClick={() => dispatch({ type: 'SET_STEP', payload: stepVal })}
              className={`btn-pill ${state.step === stepVal ? 'active' : ''}`}
            >
              Step: {stepVal}
            </button>
          ))}
        </div>

        <div className="action-log">
          <h5>Recent Dispatched Actions:</h5>
          <ul>
            {state.logs.map((log, i) => <li key={i}>{log}</li>)}
          </ul>
        </div>
      </div>
    </div>
  );
}