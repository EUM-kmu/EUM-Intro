import TopBar from "../../components/TopBar";
import icon from "../../assets/app_icon.svg";
import title from "../../assets/app_title.svg";
import phone1 from "../../assets/phone_1.svg";
import phone2 from "../../assets/phone_2.svg";
import empty from "../../assets/empty_circle.svg";
// import filled from "../../assets/filled_circle.svg";
import phoneProfile from "../../assets/phone_profile.svg";
import bgProfile from "../../assets/bg_profile_web.png";

const Main = () => {
  return (
    <>
      <TopBar />
      {/** Screen 1 */}
      <div className="flex flex-col pt-12 w-screen h-[1080px] items-center justify-between bg-[#FFA339]">
        <div className="flex flex-col">
          <div className="flex gap-8">
            <img src={icon} />
            <img src={title} />
          </div>
          <p className="pt-6 text-xl text-white text-center font-medium">
            우리 마을 주민들의 니즈를 반영한 동네 소통 플랫폼, 햇살마을이에요.
            <br />
            햇살마을에서 지역 이웃들과의 교류를 시작해 볼까요?
          </p>
        </div>
        <div className="flex gap-11">
          <img src={phone1} />
          <img src={phone2} />
        </div>
      </div>

      {/** Screen 2 */}
      <div className="relative flex flex-col w-screen h-[1080px] items-center bg-[#F2F2F7] ">
        {/** Navigator */}
        <div className="flex w-screen contents-start font-2xl font-bold gap-5 items-center max-w-7xl pl-9 pt-10 z-10">
          <p className="text-4xl font-bold text-[#042D53]">ONBOARDING</p>
          <div className="flex gap-2">
            <img src={empty} />
            <img src={empty} />
            <img src={empty} />
            <img src={empty} />
            <img src={empty} />
          </div>
        </div>

        <p className="text-4xl text-[#042D53] font-bold z-10 pt-12">
          프로필 생성
        </p>
        <p className="z-10 text-xl font-medium text-center text-[#7E93A3] p-11 ">
          단계를 따라 프로필을 생성하고 연령대별
          <br />
          캐릭터를 선택할 수 있어요.
        </p>
        <img className="z-10" src={phoneProfile} />
        <img className="absolute z-0 left-0" src={bgProfile} />
      </div>
    </>
  );
};

export default Main;
