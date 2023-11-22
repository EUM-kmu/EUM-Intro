import TopBar from "../../components/TopBar";
import identity from "../../assets/identity.svg";
import icon from "../../assets/app_icon.svg";
import title from "../../assets/app_title.svg";
import phone1 from "../../assets/phone_1.svg";
import phone2 from "../../assets/phone_2.svg";
import { FlexBox, ImageBox, Text } from "./styles";

const Main = () => {
  return (
    <>
      <TopBar />
      {/* Screen 1 */}
      <FlexBox
        padding={"48px 0px 0px 0px"}
        width={"100vw"}
        height={"calc(100vh - 140px)"}
        color={"#ffa339"}
        flexdirection={"column"}
        alignitems={"center"}
        justifycontent={"space-between"}
      >
        <FlexBox flexdirection={"column"}>
          <FlexBox gap={"33px"}>
            <ImageBox src={icon} />
            <ImageBox src={title} />
          </FlexBox>
          <Text
            padding={"24px 0px"}
            textalign={"center"}
            fontSize={"20px"}
            fontWeight={500}
            color={"white"}
          >
            우리 마을 주민들의 니즈를 반영한 동네 소통 플랫폼, 햇살마을이에요.
            <br />
            햇살마을에서 지역 이웃들과의 교류를 시작해 볼까요?
          </Text>
        </FlexBox>
        <FlexBox gap={"44px"}>
          <ImageBox src={phone1} />
          <ImageBox src={phone2} />
        </FlexBox>
      </FlexBox>

      {/* <Container>
        <FlexBox
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Text
            fontSize={"20px"}
            fontWeight={500}
            color={"var(--palette-systemgray-07, #8E8E93)"}
            textAlign={"center"}
          >
            우리 마을 주민들의 니즈를 반영한 동네 소통 플랫폼, 햇살마을이에요.
            <br />
            햇살마을에서 지역 이웃들과의 교류를 시작해 볼까요?
          </Text>
          <ImageBox width={"250px"} height={"250px"} src={identity} />
        </FlexBox>
      </Container> */}
    </>
  );
};

export default Main;
