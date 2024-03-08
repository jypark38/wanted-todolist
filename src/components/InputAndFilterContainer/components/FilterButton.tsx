import React from "react";
import styles from "./FilterButton.module.css";
import { buttonProps } from "@/interface/propsType";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { filterSelector, setFilter } from "@/store/slice/filterSlice";

const useFilterHooks = (option: string) => {
  const currentStatus = useAppSelector(filterSelector);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(setFilter(option));
  };

  const className =
    option === currentStatus
      ? `${styles.FilterButton} ${styles.Active}`
      : styles.FilterButton;

  return { handleClick, className };
};

const FilterButton = ({ option }: buttonProps) => {
  const { handleClick, className } = useFilterHooks(option);

  return (
    <button className={className} onClick={handleClick}>
      {option}
    </button>
  );
};

export default FilterButton;
