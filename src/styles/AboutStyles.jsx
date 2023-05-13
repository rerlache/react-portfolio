import styled from "styled-components";

export const AboutContainer = styled.div`
width: 75%;
margin: 0 auto;
`;
export const TimelineSection = styled.section`
  background-color: var(--primary-darkColor);
  color: var(--primary-lightColor);
  padding: 1rem 0;
`;
export const ContactSection = styled.section`
  background-color: var(--secondary-darkColor);
  color: var(--secondary-lightColor);
  padding: 1rem 0;
`;
export const IntroductionSection = styled.section`
  margin: auto;
  width: 75%;
`;
export const ContactContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: var(--primary-lightColor);
  color: var(--primary-darkColor);
  width: 60%;
  margin: auto;
  box-shadow: 0 0 10px 1px white;
  
  @media (width < 767px){
    width:90%;
  }
`;
export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: var(--primary-darkColor);
  color: var(--secondary-lightColor);
  align-items: center;
  width: 40%;
  padding: 4rem 2rem;
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
export const FormLabel = styled.label`
  margin-top: 0.25rem;
`;
export const FormInput = styled.input`
  padding: 0.4rem;
  border-radius: 5px;
  border: 0;
`;
export const FormTextArea = styled.textarea`
  padding: 0.4rem;
  border-radius: 5px;
  border: 0;
`;
export const FormButton = styled.button`
  display: flex;
  justify-content: center;
  transition: 0.3s ease;
  margin: 0.75rem auto;
  font-size: 1.3rem;
  border: 0;
  width: 50%;
  padding: 0.5rem;
  border-radius: 20px;
  box-shadow: 0 0 5px 1px;
  &:not(:disabled):hover {
    background-color: var(--primary-darkColor);
    color: var(--primary-lightColor);
  }
`;
