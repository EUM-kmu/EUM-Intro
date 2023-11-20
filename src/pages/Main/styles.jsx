import { styled } from "styled-components";

export const Text = styled.p`
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
`;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: #f2f2f7;
`;
