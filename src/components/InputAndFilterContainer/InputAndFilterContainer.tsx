import React, { useState } from "react";
import styles from "./InputAndFilterContainer.module.css";
import { addTodo } from "../../store/slice/todosSlice";
import { nanoid } from "@reduxjs/toolkit";
import { filterOptions, setFilter } from "../../store/slice/filterSlice";
import { useAppDispatch } from "@/store/hooks";
import FilterButton from "./FilterButton";
import Button from "../Button";
import { buttonProps } from "@/interface/propsType";

const Filter = () => {
  const dispatch = useAppDispatch();
  const btns = Object.values(filterOptions).map((option) => {
    const handleClick = () => {
      dispatch(setFilter(option));
    };

    return (
      <li key={option}>
        <FilterButton option={option} handleClick={handleClick} />
      </li>
    );
  });
  return (
    <section className={styles.FilterContainer}>
      <h2>Filter</h2>
      <ul>{btns}</ul>
    </section>
  );
};

const InputContainer = () => {
  const [text, setText] = useState<string>("");

  const dispatch = useAppDispatch();

  const handleSubmit: buttonProps["handleClick"] = (event) => {
    const trimmedText = text.trim();

    if (event == undefined) return;

    if ("key" in event && event.keyCode !== 13) return;

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
        onKeyDown={(e) => handleSubmit(e)}
      />
      <Button option="제출" handleClick={(e) => handleSubmit(e)} />
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
