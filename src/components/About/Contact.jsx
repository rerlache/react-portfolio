import React from "react";
import {
  ContactContainer,
  FormContainer,
  InfoContainer,
  FormHeader,
  FormInput,
  FormTextArea,
  FormLabel,
  FormButton,
} from "../../styles/AboutStyles";
import { GoMailRead } from "react-icons/go";
import {BsSend} from 'react-icons/bs'

export default function Contact() {
  return (
    <ContactContainer>
      <InfoContainer>
        <GoMailRead size="7rem" />
        If you have any kind of feedback, questions or just want to get in touch
        with me, feel free, so contact me!
      </InfoContainer>
      <FormContainer>
        <FormHeader>Contact me</FormHeader>
        <FormLabel htmlFor="inputName">Name</FormLabel>
        <FormInput id="inputName" type="text" />
        <FormLabel htmlFor="inputMail">Email</FormLabel>
        <FormInput id="inputMail" type="mail" />
        <FormLabel htmlFor="inputText">Your Message</FormLabel>
        <FormTextArea id="inputText" type="textblock" rows="8" />
        <FormButton type="submit" disabled>Send&nbsp;<BsSend /></FormButton>
      </FormContainer>
    </ContactContainer>
  );
}
