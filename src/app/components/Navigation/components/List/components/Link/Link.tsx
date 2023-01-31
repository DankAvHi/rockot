"use client";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Link.module.css";

type LinkProps = {
    sitePage: {
        label: string;
        linkText: string;
        href: string;
    };
    isNavigationOpen: boolean;
    linkOnClick: () => void;
};

const Link = ({ sitePage, isNavigationOpen, linkOnClick }: LinkProps) => {
    const pathname = usePathname();
    return (
        <li className={styles.Link}>
            <NextLink
                onClick={linkOnClick}
                href={sitePage.href}
                className={`${styles.link} ${pathname === sitePage.href && styles.link_active} ${
                    isNavigationOpen && styles.link_open
                }`}
            >
                {sitePage.linkText}
            </NextLink>
        </li>
    );
};

export default Link;
