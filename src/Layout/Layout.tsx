import React, { ReactNode } from "react";

import styles from "./Layout.module.css";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={styles.Container}>
      <header className={styles.Header}>
        <h1 className={styles.logo}>todo app</h1>
      </header>
      <main className={styles.Main}>{children}</main>
    </div>
  );
};

export default Layout;
