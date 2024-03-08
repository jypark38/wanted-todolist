import React from "react";
import styles from "./List.module.css";
import { selectFilterTodoIds } from "@/store/slice/todosSlice";
import { useAppSelector } from "@/store/hooks";
import Item from "./Item";
import { shallowEqual } from "react-redux";
import { EntityId } from "@reduxjs/toolkit";

const returnTodoItems = (filterTodosIds: EntityId[]) => {
  return (
    <ul className={styles.Ul}>
      {filterTodosIds.map((todoid) => (
        <Item key={todoid} todoId={todoid} />
      ))}
    </ul>
  );
};

const List = () => {
  const filterTodosIds = useAppSelector(selectFilterTodoIds, shallowEqual);

  if (filterTodosIds.length == 0) {
    return <div>목록이 비어있어요</div>;
  }

  return returnTodoItems(filterTodosIds);
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
