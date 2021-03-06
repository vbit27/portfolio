import styled, { css } from 'styled-components';

const sharedStyles = css`
  height: 30px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin: 10px 0 10px 0;
  padding: 20px;
  width: 100%;
  outline: none;

  &:focus {
    border: 1px solid red;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 100px auto 200px auto;
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
`;

export const TextArea = styled.textarea`
  min-height: 300px;
  resize: none;
  ${sharedStyles}

  @media screen and (max-width: 960px) {
    min-height: 200px;
  }
`;

export const ErrorMessage = styled.div`
  color: #ff3644;
  margin: 0 0 10px 0;
`;

export const FormSubmittedWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  img {
    max-width: 200px;
    margin: 50px 0;
  }

  p {
    text-align: center;
  }
`;
