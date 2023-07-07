import { ForwardedRef, InputHTMLAttributes, forwardRef } from "react";
import { StyledInput, iInputSize, iInputStyle } from "../../../styles/inputs";
import { StyledLabel, StyledParagraph } from "../../../styles/typography";
import { StyledInputLabelContainer } from "./style";


interface iInputLabel extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  inputSize: iInputSize['inputSize'];
  inputStyle: iInputStyle['inputStyle'];
  errors?: string
}

export const InputLabel = forwardRef(
  ({ label, errors, inputSize, inputStyle, ...rest }: iInputLabel, ref: ForwardedRef<HTMLInputElement>) => {
    return (
      <StyledInputLabelContainer>
        {label ? <StyledLabel>{label}</StyledLabel> : null}
        <StyledInput
          inputSize={inputSize}
          inputStyle={inputStyle}
          ref={ref}
          {...rest}
        />
        {errors ? <StyledParagraph fontStyle="sm">{ errors}</StyledParagraph>:null}
      </StyledInputLabelContainer>
    );
  }
);
