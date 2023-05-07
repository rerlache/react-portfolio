import React from "react";
import { ContactContainer, FormContainer, InfoContainer, FormHeader } from "../../styles/AboutStyles";

export default function Contact() {
  return (
    <ContactContainer>
      <InfoContainer>
        If you have any kind of feedback, questions or just want to get in touch with me, feel free, so contact me! 
      </InfoContainer>
      <FormContainer>
        <FormHeader>Contact me</FormHeader>
        <label htmlFor="inputName">Name</label>
        <input id="inputName" type="text" />
        <label htmlFor="inputMail">Email</label>
        <input id="inputMail" type="mail" />
        <label htmlFor="inputText">Your Message</label>
        <textarea id="inputText" type="textblock" rows="8" />
        <button type="submit">Send</button>
      </FormContainer>
    </ContactContainer>
  );
}
