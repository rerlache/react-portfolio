import styled from "styled-components";

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 60%;
  margin: auto;
  box-shadow: 0 0 10px 1px;
`;
export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--secondary-dark-bgColor);
  justify-content: top;
  align-items: center;
  width: 40%;
  padding: 0 0.6rem;
  margin-right: 0.25rem;
`;
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 60%;
  margin: 0.25rem;
  padding: 1.5rem;
`;
export const FormHeader = styled.h3`
  text-align: center;
`;
