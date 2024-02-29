import styles from "./InputAndFilterContainer.module.css";
import FilterContainer from "./components/FilterContainer";
import InputContainer from "./components/InputContainer";

const InputAndFilterContainer = () => {
  return (
    <div className={styles.Container}>
      <FilterContainer />
      <InputContainer />
    </div>
  );
};

export default InputAndFilterContainer;
