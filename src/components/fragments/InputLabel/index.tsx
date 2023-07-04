import { ForwardedRef, InputHTMLAttributes, forwardRef } from "react";
import { StyledInput, iInputSize, iInputStyle } from "../../../styles/inputs";
import { StyledLabel } from "../../../styles/typography";
import { StyledInputLabelContainer } from "./style";


interface iInputLabel extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  inputSize: iInputSize['inputSize'];
  inputStyle: iInputStyle['inputStyle'];
}

export const InputLabel = forwardRef(
  ({ label, inputSize, inputStyle, ...rest }: iInputLabel, ref: ForwardedRef<HTMLInputElement>) => {
    return (
      <StyledInputLabelContainer>
        {label ? <StyledLabel>{label}</StyledLabel> : null}
        <StyledInput
          inputSize={inputSize}
          inputStyle={inputStyle}
          ref={ref}
          {...rest}
        />
      </StyledInputLabelContainer>
    );
  }
);
