import { usePathname } from "next/navigation";
import { StyledLink, StyledNextLink } from "./Link.styles";

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
        <StyledLink>
            <StyledNextLink
                onClick={linkOnClick}
                href={sitePage.href}
                $active={pathname === sitePage.href}
                $open={isNavigationOpen}
            >
                {sitePage.linkText}
            </StyledNextLink>
        </StyledLink>
    );
};

export default Link;
