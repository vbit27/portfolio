import styled from 'styled-components';

export const SkillsSec = styled.div`
  margin-top: 100px;
  margin-bottom: 200px;
  padding: 100px 0;
  background-color: #fef5e9;
  border-radius: 24px;
  display: relative;
`;

export const SkillsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

export const SkillsColumn = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const TextWrapper = styled.div`
  max-width: 650px;
  padding-top: 0;
  padding: 0 50px;

  h4 {
    font-size: 2rem;
    align-self: top;
    line-height: 40px;
  }

  p {
    word-spacing: 7px;
  }

  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`;
