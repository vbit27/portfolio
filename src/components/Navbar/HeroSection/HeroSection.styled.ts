import styled from 'styled-components';

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 60px);
  justify-content: center;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  h4 {
    max-width: 65ch;
  }
`;

export const LineContainer = styled.div`
  width: 100%;
  margin-top: 4rem;
  border-bottom: 1px solid #545461;
`;
