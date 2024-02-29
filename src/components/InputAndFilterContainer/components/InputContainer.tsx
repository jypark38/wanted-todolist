import Button from "@/components/Button";
import { buttonProps } from "@/interface/propsType";
import { useAppDispatch } from "@/store/hooks";
import { addTodo } from "@/store/slice/todosSlice";
import { nanoid } from "@reduxjs/toolkit";
import { useState } from "react";
import styles from "./InputContainer.module.css";

const InputContainer = () => {
  const [text, setText] = useState<string>("");

  const dispatch = useAppDispatch();

  const handleSubmit: buttonProps["handleClick"] = (event) => {
    const trimmedText = text.trim();

    if (event == undefined) return;

    if ("key" in event && event.keyCode !== 13) return;

    if (trimmedText) {
      dispatch(addTodo({ id: nanoid(), text: trimmedText, completed: false }));
      setText("");
    }
  };

  const date = new Date();

  return (
    <section className={styles.InputContainer}>
      <h2>Todo</h2>
      <label htmlFor="todo"></label>
      <input
        className={styles.Input}
        type="text"
        id="todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => handleSubmit(e)}
      />
      <Button option="제출" handleClick={(e) => handleSubmit(e)} />
      <p className={styles.Date}>Today : {date.toLocaleDateString()}</p>
    </section>
  );
};

export default InputContainer;
