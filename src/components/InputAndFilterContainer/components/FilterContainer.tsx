import { filterOptions } from "@/store/slice/filterSlice";
import FilterButton from "./FilterButton";
import styles from "./FilterContainer.module.css";

const returnFilterButtons = () => {
  return Object.values(filterOptions).map((option) => (
    <li key={option} className={styles.ButtonLi}>
      <FilterButton option={option} />
    </li>
  ));
};

const FilterContainer = () => {
  return (
    <section className={styles.FilterContainer}>
      <h2>Filter</h2>
      <ul>{returnFilterButtons()}</ul>
    </section>
  );
};

export default FilterContainer;
