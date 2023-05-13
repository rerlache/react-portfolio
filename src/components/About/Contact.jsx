import emailjs from "@emailjs/browser";
import * as mailjs from "email-js";
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
import { BsSend } from "react-icons/bs";
import { useState } from "react";

export default function Contact() {
  const [nameInput, setNameInput] = useState("");
  const [mailInput, setMailInput] = useState("");
  const [textInput, setTextInput] = useState("");
  const apiKey = "5625686f7d8b459491d5f45e3898eba7";
  const apiURL =
    "https://emailvalidation.abstractapi.com/v1/?api_key=" + apiKey;

  async function sendEmailValidationRequest(email) {
    let toReturn
    try {
      const response = await fetch(apiURL + "&email=" + email);
      const data = await response.json();
      console.log(data);
      if (data.deliverability === "UNDELIVERABLE") {
        alert("Mail cant be sent to " + mailInput);
        toReturn = false;
        return
      }
      if (data.is_disposable_email.value) {
        alert(mailInput + " is a trash-mail.");
        toReturn = false;
        return
      }
      if (!data.is_smtp_valid.value) {
        alert("SMTP not valid for " + mailInput);
        toReturn = false;
        return
      }
      toReturn = true;
    } catch (error) {
      throw error;
    }
    return toReturn
  }

  async function sendMail() {
    if (!mailjs.isValidEmail(mailInput)) return;
    const isValidMail = await sendEmailValidationRequest(mailInput);
    if (!isValidMail) {
      console.log("somethings wrong!");
      alert("check your email adress!");
      return;
    }
    emailjs.init("xGwjwfFYZlr4w0JOW");
    const params = {
      from_name: nameInput,
      message: textInput,
      reply_to: mailInput,
    };
    emailjs.send("service_tn4nri9", "template_wbt4fhq", params).then(
      function (response) {
        console.log("success!", response.status, response.text);
        alert('Mail sent successful!')
      },
      function (error) {
        console.log("failed", error);
      }
    );
    console.log(params);
  }
  function handleSubmit(e) {
    e.preventDefault();
    sendMail();
    setMailInput('')
    setNameInput('')
    setTextInput('')
  }
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
        <FormInput
          id="inputName"
          type="text"
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
        />
        <FormLabel htmlFor="inputMail">Email</FormLabel>
        <FormInput
          id="inputMail"
          type="mail"
          value={mailInput}
          onChange={(e) => setMailInput(e.target.value)}
        />
        <FormLabel htmlFor="inputText">Your Message</FormLabel>
        <FormTextArea
          id="inputText"
          type="textblock"
          rows="8"
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
        />
        <FormButton
          type="submit"
          onClick={(e) => handleSubmit(e)}
          disabled={
            nameInput.length === 0 ||
            mailInput.length === 0 ||
            textInput.length === 0
          }
        >
          Send&nbsp;
          <BsSend />
        </FormButton>
      </FormContainer>
    </ContactContainer>
  );
}
