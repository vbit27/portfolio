import React, { useState } from 'react';
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
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    for (let key in input) {
      if (input[key as keyof InputProps] === '') {
        setError(`${key} is missing `);
        return;
      }
    }
    setError('');
    console.log(input);
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
            type="email"
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
          <ErrorMessage>{error && <h5>{error}</h5>}</ErrorMessage>

          <Button primary big type="submit">
            Send
          </Button>
        </StyledForm>
      </FormContainer>
    </>
  );
};

interface InputProps {
  name: string;
  email: string;
  message: string;
}

export default Form;
