import { styled } from "styled-components";

export const Text = styled.p`
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  text-align: ${(props) => props.textalign};
  color: ${(props) => props.color};
`;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${(props) => props.color || "#f2f2f7"};
`;

export const FlexBox = styled.div`
  display: flex;
  gap: ${(props) => props.gap};
  flex-direction: ${(props) => props.flexdirection};
  justify-content: ${(props) => props.justifycontent};
  align-items: ${(props) => props.alignitems};
`;

export const ImageBox = styled.img.attrs({
  alt: "이미지 로드 실패",
})`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;
