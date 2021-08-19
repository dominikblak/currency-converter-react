import styled from "styled-components";
import loading from "./loading.gif";


export const FormContent = styled.form`
  max-width: 500px;
  margin: 0px auto;
  padding: 10px;
`;
export const Wrapper = styled.fieldset`
  background: ${({ theme }) => theme.color.gradient};
`;
export const Span = styled.span`
  display: inline-block;
  width: 150px;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    display: block;
    text-align: center;
    margin: 10px auto;
  }
`;
export const Input = styled.input`
  margin-top: 10px;
  margin-left: 30px;
  width: 150px;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    display: block;
    text-align: center;
    margin: 20px auto;
  }
`;
export const Button = styled.button`
  display: block;
  margin: 30px auto 10px;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin-top: 40px;
  }
`;

export const Loading = styled.div`

   width: 200px;
   height:200px;
  margin:0 auto;
 text-align:center;
  background-image: url("${loading}");
`;
export const Failure = styled.p`
  color: ${({ theme }) => theme.color.red};
`;
