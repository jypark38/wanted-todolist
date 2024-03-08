import React from "react";
import styles from "./FilterButton.module.css";
import { buttonProps } from "@/interface/propsType";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { filterSelector, setFilter } from "@/store/slice/filterSlice";

const FilterButton = ({ option }: buttonProps) => {
  const currentStatus = useAppSelector(filterSelector);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(setFilter(option));
  };

  if (option === currentStatus) {
    return (
      <button
        className={`${styles.FilterButton} ${styles.Active}`}
        onClick={handleClick}
      >
        {option}
      </button>
    );
  }

  return (
    <button className={styles.FilterButton} onClick={handleClick}>
      {option}
    </button>
  );
};

export default FilterButton;
