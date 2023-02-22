import { CustomButtonProps } from "../ButtonTypes";
import { AccientButtonStyles as S } from "./AccientButton.styles";

export const AccientButton = (props: CustomButtonProps) => {
    const { children, ...buttonProps } = props;
    return <S.AccientButton {...buttonProps}>{children}</S.AccientButton>;
};
