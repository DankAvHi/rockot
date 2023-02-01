import Link from "./components/Link/Link";
import { StyledList } from "./List.styles";

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
        <StyledList $open={isNavigationOpen}>
            {sitePages.map((sitePage) => (
                <Link
                    linkOnClick={linkOnClick}
                    key={sitePage.label}
                    isNavigationOpen={isNavigationOpen}
                    sitePage={sitePage}
                />
            ))}
        </StyledList>
    );
};

export default List;
