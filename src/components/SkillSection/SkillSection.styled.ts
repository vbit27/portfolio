import styled from 'styled-components';

export const TittleWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 50px;

  h3 {
    font-size: 28px;
    text-align: center;
  }
`;

export const SkillSec = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 50px 0 200px 0;
`;

export const SkillWrapper = styled.div`
  margin-bottom: 25px;
  height: 60px;
  padding: 0 20px;
  flex: 1;
  max-width: fit-content;

  @media screen and (max-width: 1020px) {
    padding: 0 10px;
  }

  @media screen and (max-width: 560px) {
    max-width: fit-content;
    flex-basis: 100%;
  }
`;

export const SkillItem = styled.div`
  height: 100%;
  display: flex;
  border-radius: 15px;
  background: #f3f3f3;
  padding: 0 20px;

  @media screen and (max-width: 560px) {
    padding: 0 20px;
  }
`;

export const SkillIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 15px;
  flex: 1;
  max-width: 35%;
`;

export const SkillText = styled.p`
  flex: 1;
  display: flex;
  justify-content: center;
  height: 100%;
  align-items: center;
`;
