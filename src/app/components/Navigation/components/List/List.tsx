import Link from "./components/Link/Link";
import styles from "./List.module.css";

type ListPropsType = {
    sitePages: {
        label: string;
        linkText: string;
        href: string;
    }[];
    linkOnClick: () => void;
    isNavigationOpen: boolean;
};

const List = ({ sitePages, isNavigationOpen, linkOnClick }: ListPropsType) => {
    return (
        <ul className={`${styles.List} ${isNavigationOpen ? styles.List_open : ""}`}>
            {sitePages.map((sitePage) => (
                <Link
                    linkOnClick={linkOnClick}
                    key={sitePage.label}
                    isNavigationOpen={isNavigationOpen}
                    sitePage={sitePage}
                />
            ))}
        </ul>
    );
};

export default List;
