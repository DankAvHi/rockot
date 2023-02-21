import { CustomButtonProps } from "../ButtonTypes";
import { StyledAccientButton } from "./AccientButton.styles";

export const AccientButton = (props: CustomButtonProps) => {
    const { children, ...buttonProps } = props;
    return <StyledAccientButton {...buttonProps}>{children}</StyledAccientButton>;
};
