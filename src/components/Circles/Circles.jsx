import React from 'react';
import './Circles.css';

const Circles = ({ selections, handleSelection }) => {
  return (
    <div className="circles">
      {selections.map((selection, idx) =>
        <div 
          key={idx}
          className={selection ? 'selected' : ''}
          onClick={() => handleSelection(idx)}
        >
          {idx + 1}
        </div>  
      )}
    </div>
  );
};

export default Circles;
