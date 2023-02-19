import { CustomButtonProps } from "../Button";
import { StyledAccientButton } from "./AccientButton.styles";

const AccientButton = (props: CustomButtonProps) => {
    const { children, ...buttonProps } = props;
    return <StyledAccientButton {...buttonProps}>{children}</StyledAccientButton>;
};

export default AccientButton;
