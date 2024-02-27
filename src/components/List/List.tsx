import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./List.module.css";
import {
  completeTodo,
  deleteTodo,
  selectTodoById,
  selectTodoIds,
} from "@/store/slice/todosSlice";
import { RootState } from "@/store";

interface ItemProps {
  todoId: string;
}

const Item = React.memo(({ todoId }: ItemProps) => {
  const item = useSelector((state: RootState) => selectTodoById(state, todoId));

  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteTodo(todoId));
  const handleComplete = () =>
    dispatch(completeTodo({ ...item, completed: !item.completed }));

  const completedText = item.completed ? "취소" : "완료";

  return (
    <article className={styles.Item}>
      <p>{item.text}</p>
      <div>
        <button onClick={handleComplete}>{completedText}</button>
        <button onClick={handleDelete}>삭제</button>
      </div>
    </article>
  );
});

const List = () => {
  const todosIds = useSelector(selectTodoIds);

  let content;

  if (todosIds.length) {
    content = (
      <>
        <ul>
          {todosIds.map((todoid) => (
            <li key={todoid}>
              <Item todoId={todoid} />
            </li>
          ))}
        </ul>
      </>
    );
  } else {
    content = <div>할 일을 등록해주세요</div>;
  }

  return <section className={styles.Container}>{content}</section>;
};

export default List;
