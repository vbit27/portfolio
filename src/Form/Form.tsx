import React, { useEffect, useState } from 'react';
import { Button } from '../globalStyle';
import {
  Input,
  FormContainer,
  StyledForm,
  TextArea,
  ErrorMessage,
} from './Form.styled';

const initialState = { name: '', email: '', message: '' };

const Form: React.FC = () => {
  const [input, setInput] = useState(initialState);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const inputName = e.currentTarget.name;
    const inputValue = e.currentTarget.value;

    setInput((prev) => ({ ...prev, [inputName]: inputValue }));
  };

  return (
    <>
      <FormContainer>
        <StyledForm onSubmit={(e) => handleSubmit(e)}>
          <label htmlFor="name">Name:</label>
          <Input
            type="text"
            name="name"
            value={input.name}
            onChange={(e) => handleChange(e)}
          />
          <label htmlFor="email">Email:</label>
          <Input
            type="text"
            name="email"
            value={input.email}
            onChange={(e) => handleChange(e)}
          />
          <label htmlFor="message">Message:</label>
          <TextArea
            name="message"
            value={input.message}
            onChange={(e) => handleChange(e)}
          />
          <ErrorMessage>
            <h5>Error Message</h5>
          </ErrorMessage>
          <Button primary big>
            Send
          </Button>
        </StyledForm>
      </FormContainer>
    </>
  );
};

export default Form;
