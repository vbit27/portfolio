import React, { useEffect, useState } from 'react';
import { Button } from '../../globalStyle';
import {
  Input,
  FormContainer,
  StyledForm,
  TextArea,
  ErrorMessage,
  FormSubmittedWrapper,
} from './Form.styled';
import SVGsubmitted from '../../assets/images/email-submitted.svg';

const initialState = { name: '', email: '', message: '' };

const Form: React.FC = () => {
  const [input, setInput] = useState(initialState);
  const [errors, setErrors] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const inputName = e.currentTarget.name;
    const inputValue = e.currentTarget.value;

    setInput((prev) => ({ ...prev, [inputName]: inputValue }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (Object.values(errors).every((error) => error === '')) {
      setInput(initialState);
      setErrors(initialState);
      setSubmitted(true);
    }
  };

  useEffect(() => {
    console.log(submitted);
  }, [submitted]);

  const validateInput = () => {
    if (!input.name.trim()) {
      setErrors((prev) => ({ ...prev, name: 'Username required' }));
    } else {
      setErrors((prev) => ({ ...prev, name: '' }));
    }
    if (!input.message.trim()) {
      setErrors((prev) => ({ ...prev, message: 'Message required' }));
    } else {
      setErrors((prev) => ({ ...prev, message: '' }));
    }

    if (!input.email) {
      setErrors((prev) => ({ ...prev, email: 'Email required' }));
    } else if (!/\S+@\S+\.\S+/.test(input.email)) {
      setErrors((prev) => ({ ...prev, email: 'Email address is invalid' }));
    } else {
      setErrors((prev) => ({ ...prev, email: '' }));
    }
  };

  return (
    <>
      <FormContainer>
        {!submitted ? (
          <StyledForm onSubmit={(e) => handleSubmit(e)}>
            <label htmlFor="name">Name:</label>
            <Input
              type="text"
              name="name"
              value={input.name}
              onChange={(e) => handleChange(e)}
            />
            <ErrorMessage>{errors.name && <h5>{errors.name}</h5>}</ErrorMessage>

            <label htmlFor="email">Email:</label>
            <Input
              type="email"
              name="email"
              value={input.email}
              onChange={(e) => handleChange(e)}
            />
            <ErrorMessage>
              {errors.email && <h5>{errors.email}</h5>}
            </ErrorMessage>

            <label htmlFor="message">Message:</label>
            <TextArea
              name="message"
              value={input.message}
              onChange={(e) => handleChange(e)}
            />
            <ErrorMessage>
              {errors.message && <h5>{errors.message}</h5>}
            </ErrorMessage>

            <Button primary big type="submit" onClick={validateInput}>
              Send
            </Button>
          </StyledForm>
        ) : (
          <>
            <FormSubmittedWrapper>
              <h5>email sent</h5>
              <img src={SVGsubmitted} alt="email" />

              <p>
                Thanks for your email. I will get back to you within 48 hours.
              </p>
            </FormSubmittedWrapper>
          </>
        )}
      </FormContainer>
    </>
  );
};

export default Form;
