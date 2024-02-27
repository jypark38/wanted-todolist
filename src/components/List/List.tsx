import React from "react";
import styles from "./List.module.css";
import {
  completeTodo,
  deleteTodo,
  selectTodoById,
} from "@/store/slice/todosSlice";
import { EntityId } from "@reduxjs/toolkit";
import { selectFilterTodoIds } from "../../store/slice/todosSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import Button from "../Button";

interface ItemProps {
  todoId: EntityId;
}

const Item = React.memo(({ todoId }: ItemProps) => {
  const item = useAppSelector((state) => selectTodoById(state, todoId));

  const dispatch = useAppDispatch();

  const handleDelete = () => dispatch(deleteTodo(todoId));
  const handleComplete = () =>
    dispatch(completeTodo({ ...item, completed: !item.completed }));

  const completedText = item.completed ? "취소" : "완료";

  return (
    <article className={styles.Item}>
      <p>{item.text}</p>
      <div>
        <Button option={completedText} handleClick={handleComplete} />
        <Button option={"삭제"} handleClick={handleDelete} />
      </div>
    </article>
  );
});

const List = () => {
  const filterTodosIds = useAppSelector(selectFilterTodoIds);

  let content;

  if (filterTodosIds.length) {
    content = (
      <>
        <ul>
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

  return <section className={styles.Container}>{content}</section>;
};

export default List;
