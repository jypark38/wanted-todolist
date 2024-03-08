import React from "react";
import styles from "./Button.module.css";
import { buttonProps } from "../../interface/propsType";

const Button = ({ option, className, handleClick }: buttonProps) => {
  return (
    <button
      type="button"
      className={styles.Button + " " + className}
      onClick={handleClick}
    >
      {option}
    </button>
  );
};

export const SubmitButton = ({ option, handleClick }: buttonProps) => {
  return (
    <Button
      option={option}
      className={styles.Submit}
      handleClick={handleClick}
    />
  );
};

export const DeleteButton = ({ option, handleClick }: buttonProps) => {
  return (
    <Button
      option={option}
      className={styles.Negative}
      handleClick={handleClick}
    />
  );
};

export const CompleteButton = ({ option, handleClick }: buttonProps) => {
  return (
    <Button
      option={option}
      className={styles.Positive}
      handleClick={handleClick}
    />
  );
};

export default Button;
