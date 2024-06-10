import React, { useState } from "react";
import './CircleSelector.css';
import Circles from "../../components/Circles/Circles";
import Selectors from "../../components/Selectors/Selectors";

const CircleSelector = () => {
  const [selections, setSelections] = useState([false, false, false, false]);

  const handleSelection = (selectedIdx) => {
    const newSelections = selections.map((_, idx) => idx === selectedIdx);
    setSelections(newSelections);
  };

  return (
    <main>
      <Circles selections={selections} handleSelection={handleSelection} />
      <Selectors selections={selections} handleSelection={handleSelection} />
    </main>
  );
};

export default CircleSelector;
