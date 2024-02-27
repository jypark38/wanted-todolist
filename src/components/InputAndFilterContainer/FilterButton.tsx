import React from "react";
import { buttonProps } from "../../interface/propsType";

const FilterButton = ({ option, handleClick }: buttonProps) => {
  return <button onClick={handleClick}>{option}</button>;
};

export default FilterButton;
