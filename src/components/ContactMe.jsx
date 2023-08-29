import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import { FiMail } from "react-icons/fi";

import styled from "styled-components";

const ContactWrapper = styled.section`
  display: flex;
  min-height: 100vh;
  align-items: center;
  scroll-snap-align: start;

  @media (max-width: 768px) {
    min-height: 0;
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  min-width: 300px;
  margin: 0 auto;
  padding: 30px;
  background: ${({ theme }) => theme.cardBackground};
  border-radius: 8px;
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border: 1px solid rgba(255, 255, 255, 0.18);
  height: fit-content;
  label {
    margin-bottom: 10px;
    font-size: 18px;
    color: #fff;
    text-shadow: 1px 1px 2px #000, 0 0 1em #ffd700, 0 0 0.2em #000;
  }

  input,
  textarea {
    width: 100%;
    padding: 12px;
    margin-bottom: 25px;
    border: none;
    border-radius: 4px;
    background-color: rgba(255, 255, 255, 0.5);
    color: #000;
    font-size: 16px;
    resize: vertical;
  }

  button[type="submit"] {
    background-color: #333;
    color: #fff;
    font-size: 20px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    border-radius: 5px;
    padding: 12px;
    width: 103%;
    border: none;
    text-shadow: 1px 1px 2px #000, 0 0 1em #000, 0 0 0.2em #000;
  }

  button[type="submit"]:hover {
    background-color: #fff;
    color: #333;
  }
`;

const StyledError = styled.p`
  color: #333;
  margin: -10px;
  text-shadow: 1px 1px 2px #000, 0 0 1em #fff, 0 0 0.2em #000;
  font-size: 12px;
  margin-top: -55px;
  padding: 30px;
`;

const StyledSuccess = styled.p`
  color: green;
  text-shadow: 1px 1px 2px #000, 0 0 1em #fff, 0 0 0.2em #000;
  font-size: 35px;
  position: fixed;
  text-align: center;
`;

const VITE_EMAILJS_SERVICE_ID = "service_8vpo8q8";
const VITE_EMAILJS_TEMPLATE_ID = "template_23prywb";

const VITE_EMAILJS_PUBLIC_KEY = "wX5QgN6IV0Tdm3PKK";

const ContactMe = ({ theme }) => {
  const form = useRef();
  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    if (isSending) return;

    const errors = validateForm();

    if (Object.keys(errors).length === 0) {
      setIsSending(true);

      emailjs
        .sendForm(
          VITE_EMAILJS_SERVICE_ID,
          VITE_EMAILJS_TEMPLATE_ID,
          form.current,
          VITE_EMAILJS_PUBLIC_KEY
        )
        .then(
          (result) => {
            console.log("SUCCESS!", result.text);
            setIsSent(true);
            setIsSending(false);
          },
          (error) => {
            console.log("FAILED...", error.text);
            setIsSending(false);
          }
        );
    } else {
      setErrors(errors);
    }
  };

  const validateForm = () => {
    const errors = {};
    const { user_name, user_email, message } = form.current;

    if (!user_name.value.trim()) {
      errors.user_name = "Name is required";
    }

    if (!user_email.value.trim()) {
      errors.user_email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(user_email.value)) {
      errors.user_email = "Invalid email address";
    }

    if (!message.value.trim()) {
      errors.message = "Message is required";
    }

    return errors;
  };

  return (
    <ContactWrapper id="contact">
      <StyledForm ref={form} onSubmit={sendEmail}>
        <label htmlFor="user_name">Name</label>
        <input type="text" name="user_name" id="user_name" />
        {errors.user_name && <StyledError>{errors.user_name}</StyledError>}

        <label htmlFor="user_email">Email</label>
        <input type="email" name="user_email" id="user_email" />
        {errors.user_email && <StyledError>{errors.user_email}</StyledError>}

        <label htmlFor="message">Message</label>
        <textarea name="message" id="message"></textarea>
        {errors.message && <StyledError>{errors.message}</StyledError>}

        <button type="submit" disabled={isSending || isSent}>
          {isSending ? "Sending..." : isSent ? "Sent!" : "Send"}
          <FiMail />
        </button>
        {isSent && <StyledSuccess>Message sent successfully!</StyledSuccess>}
      </StyledForm>
    </ContactWrapper>
  );
};

export default ContactMe;
