import { styled } from "styled-components";

export const Text = styled.p`
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  text-align: ${(props) => props.textalign};
  color: ${(props) => props.color};
  padding: ${(props) => props.padding};
  z-index: ${(props) => props.zIndex};
`;

export const FlexBox = styled.div`
  display: flex;
  position: ${(props) => props.position};
  padding: ${(props) => props.padding};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background: ${(props) => props.color};
  gap: ${(props) => props.gap};
  flex-direction: ${(props) => props.flexdirection};
  justify-content: ${(props) => props.justifycontent};
  align-items: ${(props) => props.alignitems};
  z-index: ${(props) => props.zIndex};
`;

export const ImageBox = styled.img.attrs({
  alt: "이미지 로드 실패",
})`
  position: ${(props) => props.position};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  z-index: ${(props) => props.zIndex};

  /* relative, absolute 사용 시에만 아래 속성을 적용합니다. */
  ${(props) =>
    props.position === "absolute" &&
    `
    top: ${props.top};
    bottom: ${props.bottom};
    left: ${props.left};
    right: ${props.right};
  `}
`;
