import React from 'react';
import './Selectors.css';

const Selectors = ({ selections, handleSelection }) => {
  return (
    <div className="selectors">
      {selections.map((selection, idx) =>
        <button 
          key={idx}
          className={selection ? 'selected' : ''}
          onClick={() => handleSelection(idx)}
        >
          Button {idx + 1}
        </button>  
      )}
    </div>
  );
};

export default Selectors;
