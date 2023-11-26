import TopBar from "../../components/TopBar";
import icon from "../../assets/app_icon.svg";
import title from "../../assets/app_title.svg";
import phone1 from "../../assets/phone_1.svg";
import phone2 from "../../assets/phone_2.svg";
import empty from "../../assets/empty_circle.svg";
import filled from "../../assets/filled_circle.svg";
import phoneProfile from "../../assets/phone_profile.svg";
import bgProfile from "../../assets/bg_profile_web.png";
import phoneHome from "../../assets/phone_home.svg";
import infoSunlightCard from "../../assets/info_sunlight_card.svg";
import infoSunlightExchange from "../../assets/info_sunlight_exchange.svg";

const Main = () => {
  return (
    <>
      <TopBar className="z-30" />
      {/** Screen 1 */}
      <div className="flex flex-col pt-12 w-screen h-[380px] sm:h-screen items-center justify-between bg-[#FFA339] overflow-hidden">
        <div className="flex flex-col items-center">
          <div className="flex gap-2 sm:gap-8  items-center">
            <img className="w-12 sm:w-32" src={icon} />
            <img className="h-9 sm:h-24" src={title} />
          </div>
          <p className="pt-6 text-xs sm:text-xl text-white text-center font-medium">
            우리 마을 주민들의 니즈를 반영한 동네 소통 플랫폼, 햇살마을이에요.
            <br />
            햇살마을에서 지역 이웃들과의 교류를 시작해 볼까요?
          </p>
        </div>
        <div className="flex gap-11">
          <img className="w-[116px] sm:w-96" src={phone1} />
          <img className="w-[116px] sm:w-96" src={phone2} />
        </div>
      </div>

      {/** Screen 2 */}
      <div className="relative flex flex-col w-screen h-[380px] sm:h-screen items-center bg-[#F2F2F7] overflow-hidden ">
        {/** Navigator */}
        <div className="flex w-screen contents-start font-2xl font-bold gap-2 sm:gap-5 items-center max-w-7xl pl-5 sm:pl-9 pt-3 sm:pt-10 z-10">
          <p className="text-xs sm:text-4xl font-bold text-[#042D53]">
            ONBOARDING
          </p>
          <div className="flex sm:gap-2">
            <img className="w-5 sm:w-9" src={empty} />
            <img className="w-5 sm:w-9" src={empty} />
            <img className="w-5 sm:w-9" src={empty} />
            <img className="w-5 sm:w-9" src={empty} />
            <img className="w-5 sm:w-9" src={empty} />
          </div>
        </div>

        <p className="text-xl sm:text-4xl text-[#042D53] font-bold z-10 pt-5 sm:pt-12">
          프로필 생성
        </p>
        <p className="z-10 text-sm sm:text-xl font-medium text-center text-[#7E93A3] p-3 sm:p-11 ">
          단계를 따라 프로필을 생성하고 연령대별
          <br />
          캐릭터를 선택할 수 있어요.
        </p>
        <img className="z-10 w-64 sm:w-[907px]" src={phoneProfile} />
        <img
          className="w-64 sm:w-[700px] absolute z-0 left-0"
          src={bgProfile}
        />
      </div>

      {/** Screen 3 */}
      <div className="flex flex-col w-screen h-[380px] sm:h-screen items-center bg-[#D9DEE4]">
        {/** Navigator */}
        <div className="flex w-screen contents-start font-2xl font-bold gap-2 sm:gap-5 items-center max-w-7xl pl-5 sm:pl-9 pt-3 sm:pt-10 z-10">
          <p className="text-xs sm:text-4xl font-bold text-[#042D53]">HOME</p>
          <div className="flex sm:gap-2">
            <img className="w-5 sm:w-9" src={filled} />
            <img className="w-5 sm:w-9" src={empty} />
            <img className="w-5 sm:w-9" src={empty} />
            <img className="w-5 sm:w-9" src={empty} />
            <img className="w-5 sm:w-9" src={empty} />
          </div>
        </div>

        {/** Row Flex Box */}
        <div className="flex">
          <div className="flex flex-col">
            <p className="text-xl sm:text-4xl text-[#042D53] font-bold z-10 pb-1 sm:pb-4 pt-5 sm:pt-12">
              게임형 홈 UI
            </p>
            <p className="text-xs sm:text-xl font-medium text-[#7E93A3]">
              홈에서 내 캐릭터를 확인하고
              <br />
              햇살 카드창에 진입할 수 있어요.
            </p>
            <p className="text-xs sm:text-xl font-medium text-[#7E93A3] pt-4 sm:pt-7">
              한 달마다 초기화되는 햇살 지수를 모아
              <br />내 캐릭터를 성장시킬 수 있어요.
            </p>
          </div>
          <img className="w-[205px] sm:w-[740px]" src={phoneHome} />
        </div>
      </div>

      {/** Screen 4 */}
      <div className="flex flex-col w-screen h-[380px] sm:h-screen items-center justify-center bg-[#E5E5EA]">
        <p className="text-xl sm:text-4xl text-[#042D53] font-bold z-10">
          햇살 카드
        </p>
        <p className="z-10 text-sm sm:text-xl font-medium text-center text-[#7E93A3] p-3 sm:p-11 ">
          저축해 놓은 햇살은 도움이 필요할 때
          <br />
          언제든지 사용할 수 있어요.
        </p>
        <img className="w-[202px] sm:w-[720px]" src={infoSunlightCard} />
      </div>

      {/** Screen 5 */}
      <div className="flex flex-col w-screen h-[380px] sm:h-screen items-center bg-gradient-to-b from-[#3A3A3C] to-[#042D53]">
        {/** Navigator */}
        <div className="flex w-screen contents-start font-2xl font-bold gap-2 sm:gap-5 items-center max-w-7xl pl-5 sm:pl-9 pt-3 sm:pt-10 z-10">
          <p className="text-xs sm:text-4xl font-bold text-[#FFA339]">
            Exchange
          </p>
          <div className="flex sm:gap-2">
            <img className="w-5 sm:w-9" src={filled} />
            <img className="w-5 sm:w-9" src={filled} />
            <img className="w-5 sm:w-9" src={empty} />
            <img className="w-5 sm:w-9" src={empty} />
            <img className="w-5 sm:w-9" src={empty} />
          </div>
        </div>

        {/** Row Flex Box */}
        {/** Screen 3의 Row Flex Box와 동일한 방법으로 처리할 예정 */}
        <div className="flex">
          <div className="flex flex-col">
            <p className="text-xl sm:text-4xl text-[#FFF0D4] font-bold z-10 pb-1 sm:pb-4 pt-5 sm:pt-12">
              햇살 교환
            </p>
            <p className="text-xs sm:text-xl font-medium text-[#E5E5EA]">
              이웃 간 도움을 주고받는 공간이에요.
              <br />
              햇터 진입 시 도움 종류를 선택해요.
            </p>
          </div>
          <img className="w-[208px] sm:w-[740px]" src={infoSunlightExchange} />
        </div>
      </div>
    </>
  );
};

export default Main;
