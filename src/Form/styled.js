import styled from "styled-components";

export const FormContent = styled.form`
  max-width: 500px;
  margin: 0px auto;
  padding: 10px;
`;
export const Fieldset = styled.fieldset`
  background: ${({ theme }) => theme.color.gradient};
`;
export const Span = styled.span`
  display: inline-block;
  width: 150px;
`;
export const Input = styled.input`
  margin-top: 10px;
  margin-left: 30px;
  width: 150px;
`;
export const Button = styled.button`
  display: block;
  margin: 30px auto 10px;
`;
