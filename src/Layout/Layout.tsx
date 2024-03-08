import React, { ReactNode } from "react";

import styles from "./Layout.module.css";

const Header = ({ title }: { title: string }) => {
  return (
    <header className={styles.Header}>
      <h1 className={styles.logo}>{title}</h1>
    </header>
  );
};

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={styles.Container}>
      <Header title="todo app" />
      <main className={styles.Main}>{children}</main>
    </div>
  );
};

export default Layout;
