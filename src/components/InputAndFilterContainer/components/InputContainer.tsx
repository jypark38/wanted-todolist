import Button from "@/components/Button";
import { buttonProps } from "@/interface/propsType";
import { useAppDispatch } from "@/store/hooks";
import { addTodo } from "@/store/slice/todosSlice";
import { nanoid } from "@reduxjs/toolkit";
import { ChangeEvent, useState } from "react";
import styles from "./InputContainer.module.css";

const useInputHook = () => {
  const dispatch = useAppDispatch();

  const [text, setText] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const handleSubmit: buttonProps["handleClick"] = (event) => {
    const trimmedText = text.trim();

    if (event == undefined) return;

    if ("key" in event && event.keyCode !== 13) return;

    if (trimmedText) {
      dispatch(addTodo({ id: nanoid(), text: trimmedText, completed: false }));
      setText("");
    }
  };

  return { text, handleChange, handleSubmit };
};

interface Props {
  type: string;
  id: string;
}

const InputForm = ({ type = "text", id }: Props) => {
  const { text, handleChange, handleSubmit } = useInputHook();

  return (
    <>
      <label htmlFor={id}></label>
      <input
        className={styles.Input}
        type={type}
        id={id}
        value={text}
        onChange={handleChange}
        onKeyDown={handleSubmit}
      />
      <Button option="제출" handleClick={handleSubmit} />
    </>
  );
};

const InputContainer = () => {
  const date = new Date();

  return (
    <section className={styles.InputContainer}>
      <h2>Todo</h2>
      <InputForm type="text" id="todo" />
      <p className={styles.Date}>Today : {date.toLocaleDateString()}</p>
    </section>
  );
};

export default InputContainer;
