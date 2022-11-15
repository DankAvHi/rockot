"use client";
import { useState } from "react";
import { sitePages } from "../../globalData";
import List from "./components/List/List";
import Logo from "./components/Logo/Logo";
import styles from "./Navigation.module.css";

const Navigation = () => {
     const [isNavigationOpen, setIsNavigationOpen] = useState(false);

     const toggleNavigationButtonOnClickHandler = () => {
          setIsNavigationOpen((prev) => !prev);
     };

     return (
          <nav className={styles.Navigation}>
               <div className={`${styles.container} ${isNavigationOpen && styles.container_open}`}>
                    <Logo onClick={toggleNavigationButtonOnClickHandler} />
                    <List
                         linkOnClick={toggleNavigationButtonOnClickHandler}
                         isNavigationOpen={isNavigationOpen}
                         sitePages={sitePages}
                    />
               </div>
          </nav>
     );
};

export default Navigation;
