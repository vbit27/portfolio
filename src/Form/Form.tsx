import React from 'react';
import { Button } from '../globalStyle';
import {
  Input,
  FormContainer,
  StyledForm,
  TextArea,
  ErrorMessage,
} from './Form.styled';

const Form: React.FC = () => {
  return (
    <>
      <FormContainer>
        <StyledForm>
          <label htmlFor="name">Name:</label>
          <Input type="text" name="name" />
          <label htmlFor="email">Email:</label>
          <Input type="text" name="email" />
          <label htmlFor="message">Message:</label>
          <TextArea name="message" />
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
