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
  num: number;
}

const Item = React.memo(({ todoId, num }: ItemProps) => {
  const item = useSelector((state: RootState) => selectTodoById(state, todoId));

  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteTodo(todoId));
  const handleComplete = () =>
    dispatch(completeTodo({ ...item, completed: !item.completed }));

  return (
    <article className={styles.Item}>
      <p>
        {num}. {item.text}
      </p>
      <div>
        <button onClick={handleComplete}>완료</button>
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
        <p>남은 할 일 : {todosIds.length}</p>
        <ul>
          {todosIds.map((todoid, idx) => (
            <li key={todoid}>
              <Item todoId={todoid} num={idx} />
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
