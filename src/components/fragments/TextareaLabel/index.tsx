import { TextareaHTMLAttributes, forwardRef, ForwardedRef } from "react";
import { StyledTextarea, iInputSize, iInputStyle } from "../../../styles/inputs";
import { StyledLabel } from "../../../styles/typography";
import { StyledTextareaLabelContainer } from "./style";

interface iTextareaLabel extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  inputSize: iInputSize['inputSize'];
  inputStyle: iInputStyle['inputStyle'];
  errors?: string
}

export const TextareaLabel = forwardRef(
  (
    { label, errors , inputSize, inputStyle, ...rest }: iTextareaLabel,
    ref: ForwardedRef<HTMLTextAreaElement>
  ) => {
    return (
      <StyledTextareaLabelContainer>
        {label ? <StyledLabel>{label}</StyledLabel> : null}
        <StyledTextarea
          inputSize={inputSize}
          inputStyle={inputStyle}
          ref={ref}
          {...rest}
        />
        {errors ? <p>{errors}</p>:null}
      </StyledTextareaLabelContainer>
    );
  }
);
