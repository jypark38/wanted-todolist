import { useAppDispatch } from "@/store/hooks";
import { filterOptions, setFilter } from "@/store/slice/filterSlice";
import FilterButton from "./FilterButton";
import styles from "./FilterContainer.module.css";

const FilterContainer = () => {
  const dispatch = useAppDispatch();
  const btns = Object.values(filterOptions).map((option) => {
    const handleClick = () => {
      dispatch(setFilter(option));
    };

    return (
      <li key={option} className={styles.ButtonLi}>
        <FilterButton option={option} handleClick={handleClick} />
      </li>
    );
  });
  return (
    <section className={styles.FilterContainer}>
      <h2>Filter</h2>
      <ul>{btns}</ul>
    </section>
  );
};

export default FilterContainer;
