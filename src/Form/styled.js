import styled from "styled-components";
import loading from "./loading.gif";
import errorInfo from "./error.gif";

export const FormContent = styled.form`
  max-width: 500px;
  margin: 0px auto;
  padding: 10px;
`;
export const Wrapper = styled.fieldset`
  background: ${({ theme }) => theme.color.gradient};
  border-radius: 20px;
  box-shadow: 0 0 1em ${({ theme }) => theme.color.gold};
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
  background-image: url("${loading}");
  background-repeat: no-repeat;
  width: 100%;
  height: 50px;
  margin: 0 auto;
  background-position: center;
`;
export const Failure = styled.div`
  background-image: url("${errorInfo}");
  background-repeat: no-repeat;
  width: 100%;
  height: 150px;
  margin: 20px auto;
  background-position: center;
`;
