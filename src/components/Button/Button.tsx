import React from "react";
import styles from "./Button.module.css";
import { buttonProps } from "../../interface/propsType";

const Button = ({ option, handleClick }: buttonProps) => {
  let classname = `${styles.Button}`;
  if (option === "삭제") {
    classname += ` ${styles.Negative}`;
  } else if (option !== "제출") {
    classname += ` ${styles.Positive}`;
  } else {
    classname += ` ${styles.Submit}`;
  }

  return (
    <button type="button" className={classname} onClick={handleClick}>
      {option}
    </button>
  );
};

export default Button;
