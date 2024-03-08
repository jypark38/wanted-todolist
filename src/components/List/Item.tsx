import React from "react";
import { EntityId } from "@reduxjs/toolkit";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  completeTodo,
  deleteTodo,
  selectTodoById,
} from "@/store/slice/todosSlice";
import styles from "./Item.module.css";
import { CompleteButton, DeleteButton } from "../Button/Button";

const useItemHooks = (todoId: EntityId) => {
  const item = useAppSelector((state) => selectTodoById(state, todoId));

  const dispatch = useAppDispatch();

  const handleDelete = () => dispatch(deleteTodo(todoId));
  const handleComplete = () =>
    dispatch(completeTodo({ ...item, completed: !item.completed }));

  const itemStatus = item.completed ? "completed" : "pending";
  const completedText = item.completed ? "취소" : "완료";

  return {
    text: item.text,
    itemStatus,
    completedText,
    handleComplete,
    handleDelete,
  };
};

interface ItemProps {
  todoId: EntityId;
}

const Item = React.memo(({ todoId }: ItemProps) => {
  const { text, itemStatus, completedText, handleComplete, handleDelete } =
    useItemHooks(todoId);

  return (
    <li>
      <article className={styles.Item}>
        <div className={styles.TextContainer}>
          <p className={styles.TodoText}>{text}</p>
          <span className={styles.Status}>{itemStatus}</span>
        </div>
        <div className={styles.ButtonContainer}>
          <CompleteButton option={completedText} handleClick={handleComplete} />
          <DeleteButton option={"삭제"} handleClick={handleDelete} />
        </div>
      </article>
    </li>
  );
});

export default Item;
