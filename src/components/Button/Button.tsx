import React from "react";
import styles from "./Button.module.css";
import { buttonProps } from "../../interface/propsType";

const Button = ({ option, handleClick }: buttonProps) => {
  return (
    <button className={styles.Red} onClick={handleClick}>
      {option}
    </button>
  );
};

export default Button;
