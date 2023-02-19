import { CustomButtonProps } from "../Button";
import { AccientButtonStyles as S } from "./AccientButton.styles";

const AccientButton = (props: CustomButtonProps) => {
    const { children, ...buttonProps } = props;
    return <S.AccientButton {...buttonProps}>{children}</S.AccientButton>;
};

export default AccientButton;
