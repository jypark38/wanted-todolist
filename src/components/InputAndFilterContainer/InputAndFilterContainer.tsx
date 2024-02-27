import React, { useState } from "react";
import styles from "./InputAndFilterContainer.module.css";
import { addTodo } from "../../store/slice/todosSlice";
import { current, nanoid } from "@reduxjs/toolkit";
import { filterOptions, setFilter } from "../../store/slice/filterSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
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
      <li key={option} className={styles.ButtonLi}>
        <FilterButton option={option} handleClick={handleClick} />
      </li>
    );
  });
  return (
    <section className={styles.FilterContainer}>
      <h2 className={styles.H2}>Filter</h2>
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

  const date = new Date();

  return (
    <section className={styles.InputContainer}>
      <h2 className={styles.H2}>Todo</h2>
      <label htmlFor="todo"></label>
      <input
        type="text"
        id="todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => handleSubmit(e)}
      />
      <Button option="제출" handleClick={(e) => handleSubmit(e)} />
      <p>Today : {date.toLocaleDateString()}</p>
    </section>
  );
};

const InputAndFilterContainer = () => {
  return (
    <div className={styles.Container}>
      <Filter />
      <InputContainer />
    </div>
  );
};

export default InputAndFilterContainer;
