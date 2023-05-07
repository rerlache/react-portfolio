import styled from "styled-components";

export const AboutSection = styled.div`
  background-color: var(--primary-darkColor);
  color: var(--primary-lightColor);
  padding: 1rem 0;
`;
export const TimelineSection = styled.div`
background-color: var(--secondary-darkColor);
color: var(--secondary-lightColor);
`;
export const ContactSection = styled.div`
background-color: var(--primary-darkColor);
color: var(--primary-lightColor);
`;

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: var(--secondary-lightColor);
  color: var(--primary-darkColor);
  width: 60%;
  margin: auto;
  box-shadow: 0 0 10px 1px white;
`;
export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--secondary-darkColor);
  color: var(--secondary-lightColor);
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
