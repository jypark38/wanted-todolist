import React from "react";
import styles from "./List.module.css";
import { selectFilterTodoIds } from "@/store/slice/todosSlice";
import { useAppSelector } from "@/store/hooks";
import Item from "./Item";
import { shallowEqual } from "react-redux";

const List = () => {
  const filterTodosIds = useAppSelector(selectFilterTodoIds, shallowEqual);

  if (filterTodosIds.length) {
    return (
      <>
        <ul className={styles.Ul}>
          {filterTodosIds.map((todoid) => (
            <li key={todoid}>
              <Item todoId={todoid} />
            </li>
          ))}
        </ul>
      </>
    );
  } else {
    return <div>목록이 비어있어요</div>;
  }
};

const ListSection = () => {
  return (
    <section className={styles.Container}>
      <h2>List</h2>
      {<List />}
    </section>
  );
};

export default ListSection;
