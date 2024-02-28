import React from "react";
import { buttonProps } from "../../interface/propsType";
import styles from "./FilterButton.module.css";
import { useAppSelector } from "@/store/hooks";
import { filterSelector } from "@/store/slice/filterSlice";

const FilterButton = ({ option, handleClick }: buttonProps) => {
  const currentStatus = useAppSelector(filterSelector);

  let classname = `${styles.FilterButton}`;
  if (option === currentStatus) {
    classname += ` ${styles.Active}`;
  }

  return (
    <button onClick={handleClick} className={classname}>
      {option}
    </button>
  );
};

export default FilterButton;
