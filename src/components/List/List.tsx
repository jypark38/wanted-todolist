import React from "react";
import styles from "./List.module.css";
import { selectFilterTodoIds } from "@/store/slice/todosSlice";
import { useAppSelector } from "@/store/hooks";
import Item from "./Item";

const List = () => {
  const filterTodosIds = useAppSelector(selectFilterTodoIds);

  let content;

  if (filterTodosIds.length) {
    content = (
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
    content = <div>목록이 비어있어요</div>;
  }

  return (
    <section className={styles.Container}>
      <h2>List</h2>
      {content}
    </section>
  );
};

export default List;
