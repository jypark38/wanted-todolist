import React from "react";
import { buttonProps } from "../../interface/propsType";
import styles from "./FilterButton.module.css";
import { useAppSelector } from "@/store/hooks";

const FilterButton = ({ option, handleClick }: buttonProps) => {
  const currentStatus = useAppSelector((state) => state.filter);

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
