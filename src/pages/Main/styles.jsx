import { styled } from "styled-components";

export const Text = styled.p`
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  text-align: ${(props) => props.textalign};
  color: ${(props) => props.color};
`;

export const FlexBox = styled.div`
  display: flex;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background: ${(props) => props.color};
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
