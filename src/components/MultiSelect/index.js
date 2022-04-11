import React, { useState, useEffect } from "react";
import { ReactComponent as CheckMark } from "./checkmark.svg";
function MultiSelect() {
  const Options = [
    "Airport",
    "Alternative",
    "Billboard",
    "Retail",
    "Sports Venues",
    "Street Furniture",
    "Transit",
    "Wallscape",
    "Wildposting",
  ];
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndexes, setSelectedIndexes] = useState([]);
  useEffect(() => {
    console.log(selectedIndexes);
  }, [selectedIndexes]);

  const updateSelectedIndexes = (index) => {
    if (selectedIndexes.includes(index)) {
      setSelectedIndexes(
        selectedIndexes.filter((indexed) => indexed !== index)
      );
    } else {
      setSelectedIndexes([...selectedIndexes, index]);
    }
  };
  const isOpenStatus = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };
  const buttonClassName = isOpen
    ? "MultiSelect_Component__isOpen"
    : "MultiSelect_Component__isClose";

  const OptionsComponent = Options.map((option, index) => (
    <div
      className="option"
      onClick={() => {
        updateSelectedIndexes(option);
      }}
      key={index}
    >
      {option}
      {selectedIndexes.includes(option) ? <CheckMark /> : null}
    </div>
  ));

  return (
    <div className="MultiSelect_Component">
      <button className={buttonClassName} onClick={isOpenStatus}>
        Media Type
      </button>
      <div className="MultiSelect_Component__Options">{OptionsComponent}</div>
    </div>
  );
}

export default MultiSelect;
