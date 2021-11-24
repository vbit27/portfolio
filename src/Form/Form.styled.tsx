import styled, { css } from 'styled-components';

const sharedStyles = css`
  height: 30px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin: 10px 0 20px 0;
  padding: 20px;
  width: 100%;
`;

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 100px auto;
`;

export const StyledForm = styled.form`
  max-width: 700px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  display: block;

  ${sharedStyles}

  &:active {
    border: 1px solid red;
  }
`;

export const TextArea = styled.textarea`
  min-height: 100px;
  resize: none;
  ${sharedStyles}
`;

export const ErrorMessage = styled.div`
  color: #ff3644;
  margin: 0 0 40px 0;
`;
