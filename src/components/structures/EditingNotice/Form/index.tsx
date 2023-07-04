import { StyledButton } from "../../../../styles/buttons";
import { InputLabel } from "../../../fragments/InputLabel";
import { TextareaLabel } from "../../../fragments/TextareaLabel";
import { StyledEditingFormContainer } from "./style";

export const EditingNoticeForm = () => {
  return (
    <StyledEditingFormContainer>
      <InputLabel label='Título' inputSize='md-max' inputStyle='borderless' />
      <InputLabel
        label='Imagem em destaque'
        inputSize='md-max'
        inputStyle='borderless'
      />
      <TextareaLabel
        label='Conteúdo'
        rows={11}
        inputSize='md-max'
        inputStyle='borderless'
      />
      <StyledButton buttonSize='md-min' buttonType='primary'>
        Salvar post
      </StyledButton>
    </StyledEditingFormContainer>
  );
};
