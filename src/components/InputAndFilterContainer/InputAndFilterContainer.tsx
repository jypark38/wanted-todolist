import React, { useState } from "react";
import styles from "./InputAndFilterContainer.module.css";
import { useDispatch } from "react-redux";
import { addTodo } from "../../store/slice/todosSlice";
import { nanoid } from "@reduxjs/toolkit";

const Filter = () => {
  return (
    <section className={styles.FilterContainer}>
      <h2>Filter</h2>
      <ul>
        <li>all</li>
        <li>completed</li>
        <li>unCompleted</li>
      </ul>
    </section>
  );
};

const InputContainer = () => {
  const [text, setText] = useState<string>("");

  const dispatch = useDispatch();

  const handleSubmit = () => {
    const trimmedText = text.trim();

    if (trimmedText) {
      dispatch(
        addTodo({ id: nanoid() as string, text: trimmedText, completed: false })
      );
      setText("");
    }
  };

  return (
    <section className={styles.InputContainer}>
      <label htmlFor="todo"></label>
      <input
        type="text"
        id="todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleSubmit}>제출</button>
    </section>
  );
};

const InputAndFilterContainer = () => {
  return (
    <section className={styles.Container}>
      <Filter />
      <InputContainer />
    </section>
  );
};

export default InputAndFilterContainer;
