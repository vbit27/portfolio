import styled from 'styled-components';

export const InfoSec = styled.div`
  padding: 160px 0;
`;

export const InfoRow = styled.div<InforRowProps>`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ imgStart }) => (imgStart ? 'row-reverse' : 'rom')};
`;

export const InfoColumn = styled.div`
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
  max-width: 600px;
  padding-top: 0;
  padding-bottom: 60px;

  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`;

export const Description = styled.p`
  padding: 20px 0;
`;

export const ButtonContainer = styled.div`
  margin-top: 50px;
  display: flex;
  gap: 1rem;

  @media screen and (max-width: 359px) {
    flex-direction: column;
  }
`;

interface InforRowProps {
  imgStart: boolean;
}
