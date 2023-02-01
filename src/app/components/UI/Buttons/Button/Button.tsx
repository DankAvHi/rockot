import Link from "next/link";
import { CustomButtonProps } from "../Button";

const Button = (props: CustomButtonProps) => {
    if (props.type === "link") {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { type: _, external, ...anchorProps } = props;
        const { children, disabled, href } = anchorProps;

        if (disabled) {
            return <button disabled={true}>{children}</button>;
        } else {
            return external ? (
                <a {...anchorProps}>{children}</a>
            ) : (
                <Link {...anchorProps} href={href || "#"}>
                    {children}
                </Link>
            );
        }
    }

    const { children } = props;
    return <button {...props}>{children}</button>;
};

export default Button;
