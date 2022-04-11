import React, { useState } from "react";

function MultiSelect() {
  const [isOpen, setIsOpen] = useState(false);
  const isOpenStatus = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };
  return (
    <button className={isOpen ? "isOpen" : "isClosed"} onClick={isOpenStatus}>
      Media Type
    </button>
  );
}

export default MultiSelect;
