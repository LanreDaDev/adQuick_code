import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { optionStatusAction } from "../../actions/index";
import { ReactComponent as CheckMark } from "./checkmark.svg";
function MultiSelect({ optionStatusAction, optionStatus }) {
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
    // console.log(optionStatus);
    setIsOpen(optionStatus);
  }, [optionStatus]);

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
      //   setIsOpen(false);
      optionStatusAction(false);
    } else {
      //   setIsOpen(true);
      optionStatusAction(true);
    }
  };
  const buttonClassName = isOpen
    ? "MultiSelect_Component__isOpen"
    : "MultiSelect_Component__isClose";

  const buttonName =
    selectedIndexes.length < 1
      ? "Media Type"
      : selectedIndexes.length === 1
      ? `${selectedIndexes[0]} only`
      : `Media Type + ${selectedIndexes.length}`;
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

  const MultiSelect_Component__OptionsStatus = isOpen ? (
    <div className="MultiSelect_Component__Options">{OptionsComponent}</div>
  ) : null;

  return (
    <div className="MultiSelect_Component">
      <div className="MultiSelect_Button">
        <button className={buttonClassName} onClick={isOpenStatus}>
          {buttonName}
        </button>
      </div>
      {MultiSelect_Component__OptionsStatus}
    </div>
  );
}
const mapStateToProps = (state) => ({
  optionStatus: state.optionStatus,
});
export default connect(mapStateToProps, { optionStatusAction })(MultiSelect);
