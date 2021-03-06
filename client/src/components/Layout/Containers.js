import styled from 'styled-components';

export const Container = styled.div`
  width: 1190px;
  margin: 0 auto;
  height: 100%;
  position: relative;
  display: ${props => (props.flex ? 'flex' : 'block')};

  @media screen and (max-width: 1190px) {
    width: 890px;
  }
  @media screen and (max-width: 900px) {
    width: 100%;
    padding: 0 10px 0 10px;
  }
`;

export const PageContainer = styled.div`
  max-width: 1190px;
  margin: 0 auto;
  padding-top: 56px;
  position: relative;
  display: ${props => (props.flex ? 'flex' : 'block')};

  @media screen and (max-width: 1190px) {
    width: 890px;
  }
  @media screen and (max-width: 900px) {
    width: 100%;
    padding: 56px 10px 0 10px;
  }
`;
