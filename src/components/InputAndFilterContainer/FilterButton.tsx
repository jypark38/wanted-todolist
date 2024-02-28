import React from "react";
import styles from "./FilterButton.module.css";
import { buttonProps } from "@/interface/propsType";
import { useAppSelector } from "@/store/hooks";
import { memoizedFilterSelector } from "@/store/slice/filterSlice";

const FilterButton = ({ option, handleClick }: buttonProps) => {
  const currentStatus = useAppSelector(memoizedFilterSelector);

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
