"use client";
import { useState } from "react";
import useScrollPosition from "../../../hooks/scrollPosition.hook";
import Logo from "./components/Logo/Logo";
import styles from "./Navigation.module.css";

const Navigation = () => {
    const scroll = useScrollPosition();

    const [isNavigationOpen, setIsNavigationOpen] = useState(false);

    const toggleNavigationButtonOnClickHandler = () => {
        setIsNavigationOpen((prev) => !prev);
    };

    return (
        <nav className={`${styles.Navigation} ${scroll > 10 && styles.Navigation_opacity}`}>
            <div className={`${styles.container} ${isNavigationOpen && styles.container_open}`}>
                <Logo onClick={toggleNavigationButtonOnClickHandler} />
            </div>
        </nav>
    );
};

export default Navigation;
