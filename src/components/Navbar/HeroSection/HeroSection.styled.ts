import styled from 'styled-components';

export const HeroContainer = styled.div`
  display: flex;
  height: calc(100vh - 60px);
  align-items: center;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  h4 {
    width: 65ch;
  }
`;
