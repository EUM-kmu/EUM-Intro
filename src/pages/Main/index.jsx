import TopBar from "../../components/TopBar";
import icon from "../../assets/app_icon.svg";
import iconApple from "../../assets/apple_icon.svg";
import iconGooglePlay from "../../assets/googleplay_icon.svg";
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
import infoPost from "../../assets/info_post.svg";
import infoParticipation from "../../assets/info_participation.svg";
import infoChat from "../../assets/info_chat.svg";
import infoNotification from "../../assets/info_notification.svg";
import sun3d from "../../assets/sun_3d.svg";
import cloud3d from "../../assets/cloud_3d.svg";
import StoreContainer from "../../components/StoreContainer/inedx";
import qrApple from "../../assets/qr.png";
import qrGoogle from "../../assets/qr.png";
import Footer from "../../components/Footer";
import postFlow from "../../assets/post_flow.svg";
import ReactPlayer from "react-player";
import playBackground from "../../assets/movie_background.svg";
import phoneCommunity from "../../assets/phone_community.svg";
import backgroundCommunity from "../../assets/background_community.svg";

const Main = () => {
  return (
    <>
      <TopBar className="z-30" />

      <div className="z-20 relative flex flex-col w-screen h-[380px] sm:h-screen items-center  bg-gradient-to-b from-[#8FD1FF] to-white  overflow-hidden ">
        <p className="sm:text-4xl text-[#042D53] font-bold z-30 pt-5 sm:pt-12">
          주민들의 니즈를 반영한
          <br />
          우리 마을 소통 플랫폼
        </p>

        <div className="flex flex-col items-center">
          <div className="flex gap-2 sm:gap-8  items-center py-2 sm:py-10">
            <img className="w-7 sm:w-24 z-20" src={icon} />
            <img className="h-5 sm:h-16 z-20" src={title} />
          </div>
          <div className="z-20 px-6 sm:w-[960px] sm:h-[540px]">
            <ReactPlayer
              className="react-player"
              url={
                "https://kr.object.ncloudstorage.com/k-eum/ppt/%EC%98%81%EC%83%81.mp4"
              } // 플레이어 url
              width="100%" // 플레이어 크기 (가로)
              height="100%" // 플레이어 크기 (세로)
              playing={true} // 자동 재생 on
              muted={true} // 자동 재생 on
              controls={true} // 플레이어 컨트롤 노출 여부
              light={false} // 플레이어 모드
              pip={true} // pip 모드 설정 여부
              poster={
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg"
              } // 플레이어 초기 포스터 사진
              onEnded={() => handleVideo()} // 플레이어 끝났을 때 이벤트
            />
          </div>
        </div>

        <img className="w-screen absolute z-0" src={playBackground} />
      </div>

      {/** Screen 1 */}
      <div className="flex flex-col w-screen h-[300px] sm:h-screen items-center justify-between bg-[#FFA339] overflow-hidden">
        <div className="flex flex-col items-center">
          <p className="pt-3 sm:pt-8 sm:pb-14 text-base sm:text-5xl sm:leading-[140%] text-white text-center font-bold">
            햇살마을에서 지역 이웃들과의
            <br />
            교류를 시작해봐요!
          </p>
        </div>
        <StoreContainer
          qrSrc={qrApple}
          text={"웹 앱으로 사용하기"}
          path={"https://app.haetsal.com"}
        />
        <div className="flex gap-3 sm:gap-11">
          <img className="w-[116px] sm:w-96" src={phone1} />
          <img className="w-[116px] sm:w-96" src={phone2} />
        </div>
      </div>
      {/** Screen 2 */}
      <div
        id="onboarding"
        className="relative flex flex-col w-screen h-[380px] sm:h-[1080px] items-center bg-[#F2F2F7] overflow-hidden "
      >
        {/** Navigator */}
        <div className="flex w-screen contents-start font-2xl font-bold gap-2 sm:gap-5 items-center max-w-7xl pl-5 sm:pl-9 pt-3 sm:pt-10 z-10">
          <p className="text-xs sm:text-4xl font-bold text-[#042D53]">
            ONBOARDING
          </p>
          <div className="flex sm:gap-2 cursor-pointer">
            <a href="#home">
              <img className="w-5 sm:w-9 cursor-pointer" src={empty} />
            </a>
            <a href="#exchange">
              <img className="w-5 sm:w-9 cursor-pointer" src={empty} />
            </a>
            <a href="#chat">
              <img className="w-5 sm:w-9 cursor-pointer" src={empty} />
            </a>
            <a href="#community">
              <img className="w-5 sm:w-9 cursor-pointer" src={empty} />
            </a>
            <a href="#notification">
              <img className="w-5 sm:w-9 cursor-pointer" src={empty} />
            </a>
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
      <div
        id="home"
        className="flex flex-col w-screen h-[280px] sm:h-[1080px] items-center bg-[#D9DEE4] overflow-hidden scroll-pt-5 sm:scroll-pt-16"
      >
        {/** Navigator */}
        <div className="flex w-screen contents-start font-2xl font-bold gap-2 sm:gap-5 items-center max-w-7xl pl-5 sm:pl-9 pt-3 sm:pt-10 z-10">
          <p className="text-xs sm:text-4xl font-bold text-[#042D53]">HOME</p>
          <div className="flex sm:gap-2 cursor-pointer">
            <a href="#home">
              <img className="w-5 sm:w-9 cursor-pointer" src={filled} />
            </a>
            <a href="#exchange">
              <img className="w-5 sm:w-9 cursor-pointer" src={empty} />
            </a>
            <a href="#chat">
              <img className="w-5 sm:w-9 cursor-pointer" src={empty} />
            </a>
            <a href="#community">
              <img className="w-5 sm:w-9 cursor-pointer" src={empty} />
            </a>
            <a href="#notification">
              <img className="w-5 sm:w-9 cursor-pointer" src={empty} />
            </a>
          </div>
        </div>
        {/** Row Flex Box */}
        <div className="flex w-screen contents-start font-2xl font-bold gap-2 sm:gap-5 items-center max-w-7xl px-5 sm:px-9 pt-3 sm:pt-10 z-10">
          <div className="flex">
            <div className="flex flex-col">
              <p className="text-xl sm:text-4xl text-[#042D53] font-bold z-10 pb-1 sm:pb-4 pt-5 sm:pt-12">
                게임형 홈 UI
              </p>
              <p className="text-xs sm:text-xl pr-3 sm:pr-[88px] font-medium text-[#7E93A3]">
                홈에서 내 캐릭터를 확인하고
                <br />
                햇살 카드창에 진입할 수 있어요.
              </p>
              <p className="text-xs sm:text-xl pr-3 sm:pr-[88px] font-medium text-[#7E93A3] pt-4 sm:pt-7">
                한 달마다 초기화되는 햇살 지수를 모아
                <br />내 캐릭터를 성장시킬 수 있어요.
              </p>
            </div>
            <img className="w-[205px] sm:w-[740px]" src={phoneHome} />
          </div>
        </div>
      </div>

      {/** Screen 4 */}
      <div className="flex flex-col w-screen h-[380px] sm:h-[1080px] items-center justify-center bg-[#E5E5EA] overflow-hidden">
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
      <div
        id="exchange"
        className="flex flex-col w-screen h-[320px] sm:h-[1080px] items-center bg-gradient-to-b from-[#3A3A3C] to-[#042D53] overflow-hidden scroll-pt-5 sm:scroll-pt-16"
      >
        {/** Navigator */}
        <div className="flex w-screen contents-start font-2xl font-bold gap-2 sm:gap-5 items-center max-w-7xl pl-5 sm:pl-9 pt-3 sm:pt-10 z-10">
          <p className="text-xs sm:text-4xl font-bold text-[#FFA339]">
            EXCHANGE
          </p>
          <div className="flex sm:gap-2 cursor-pointer">
            <a href="#home">
              <img className="w-5 sm:w-9 cursor-pointer" src={filled} />
            </a>
            <a href="#exchange">
              <img className="w-5 sm:w-9 cursor-pointer" src={filled} />
            </a>
            <a href="#chat">
              <img className="w-5 sm:w-9 cursor-pointer" src={empty} />
            </a>
            <a href="#community">
              <img className="w-5 sm:w-9 cursor-pointer" src={empty} />
            </a>
            <a href="#notification">
              <img className="w-5 sm:w-9 cursor-pointer" src={empty} />
            </a>
          </div>
        </div>

        {/** Row Flex Box */}
        <div className="flex w-screen contents-start font-2xl font-bold gap-2 sm:gap-5 items-center max-w-7xl px-5 sm:px-9 pt-3 sm:pt-10 z-10">
          <div className="flex">
            <div className="flex flex-col">
              <p className="text-xl sm:text-4xl text-[#FFF0D4] font-bold z-10 pb-1 sm:pb-4 pt-5 sm:pt-12">
                햇살 교환
              </p>
              <p className="text-xs sm:text-xl pr-3 sm:pr-[88px] font-medium text-[#E5E5EA]">
                이웃 간 도움을 주고받는 공간이에요.
                <br />
                햇터 진입 시 도움 종류를 선택해요.
              </p>
            </div>
            <img
              className="w-[208px] sm:w-[740px]"
              src={infoSunlightExchange}
            />
          </div>
        </div>
      </div>

      {/** Screen 6, 7 */}
      <div className="flex flex-col w-screen items-center bg-[#042D53] gap-5 sm:gap-[80px] pt-4 pb-20 sm:pt-16 sm:pb-[220px] overflow-hidden">
        <p className="text-xl sm:text-4xl text-[#FFF0D4] font-bold">
          글쓰기 플로우
        </p>
        <img className="px-6" src={postFlow} />
      </div>

      {/** Screen 8 */}
      <div className="flex flex-col w-screen h-[380px] sm:h-[1080px] items-center justify-center bg-[#3A3A3C] overflow-hidden">
        <p className="text-xl sm:text-4xl text-[#FFF0D4] font-bold z-10">
          게시글 조회, 참여 신청
        </p>
        <p className="z-10 text-sm sm:text-xl font-medium text-center text-[#C7C7CC] p-3 sm:p-11 ">
          게시글의 내용을 확인하고 도움을 주거나 받고 싶은 게시글의
          <br />
          신청 버튼을 통해 활동 참여를 신청해요.
        </p>
        <img className="w-[308px] sm:w-[1106px]" src={infoPost} />
      </div>

      {/** Screen 9 */}
      <div className="relative flex flex-col w-screen h-[380px] sm:h-[1080px] items-center bg-gradient-to-b from-[#3A3A3C] to-[#89643B] overflow-hidden ">
        <p className="text-xl sm:text-4xl text-[#FFF0D4] font-bold z-10 pt-5 sm:pt-12">
          참여 관리
        </p>
        <p className="z-10 text-sm sm:text-xl font-medium text-center text-[#C7C7CC] p-3 sm:p-11 ">
          내 게시글에서는 참여 신청 대신 참여자 관리를 할 수 있어요.
          <br />
          참여 신청을 수락하면 참여 이웃란에 채팅방이 생성돼요.
        </p>
        <img className="z-10 w-64 sm:w-[907px]" src={infoParticipation} />
        <img
          className="w-[210px] sm:w-[750px] absolute z-0 left-0 bottom-0"
          src={sun3d}
        />
      </div>

      {/** Screen 10 */}
      <div
        id="chat"
        className="flex flex-col w-screen h-[320px] sm:h-[1080px] items-center bg-[#3A3A3C] overflow-hidden scroll-pt-5 sm:scroll-pt-16"
      >
        {/** Navigator */}
        <div className="flex w-screen contents-start font-2xl font-bold gap-2 sm:gap-5 items-center max-w-7xl pl-5 sm:pl-9 pt-3 sm:pt-10 z-10">
          <p className="text-xs sm:text-4xl font-bold text-[#FFA339]">CHAT</p>
          <div className="flex sm:gap-2 cursor-pointer">
            <a href="#home">
              <img className="w-5 sm:w-9 cursor-pointer" src={filled} />
            </a>
            <a href="#exchange">
              <img className="w-5 sm:w-9 cursor-pointer" src={filled} />
            </a>
            <a href="#chat">
              <img className="w-5 sm:w-9 cursor-pointer" src={filled} />
            </a>
            <a href="#community">
              <img className="w-5 sm:w-9 cursor-pointer" src={empty} />
            </a>
            <a href="#notification">
              <img className="w-5 sm:w-9 cursor-pointer" src={empty} />
            </a>
          </div>
        </div>

        {/** Row Flex Box */}
        {/** Screen 3의 Row Flex Box와 동일한 방법으로 처리할 예정 */}
        <div className="flex w-screen contents-start font-2xl font-bold gap-2 sm:gap-5 items-center max-w-7xl px-5 sm:px-9 pt-3 sm:pt-10 z-10">
          <div className="flex">
            <div className="flex flex-col">
              <p className="text-xl sm:text-4xl text-[#FFF0D4] font-bold z-10 pb-1 sm:pb-4 pt-5 sm:pt-12">
                채팅
              </p>
              <p className="text-xs sm:text-xl pr-3 sm:pr-[88px] font-medium text-[#E5E5EA]">
                개설된 채팅방은 채팅 탭에서 내 게시글과 이웃
                <br />
                게시글을 나눠서 볼 수 있어요.
              </p>
              <p className="text-xs sm:text-xl font-medium text-[#E5E5EA] pt-4 sm:pt-7">
                채팅창을 통해 이웃에게 바로 햇살을 보내요.
              </p>
            </div>
            <img className="w-[208px] sm:w-[740px]" src={infoChat} />
          </div>
        </div>
      </div>

      {/** Screen 11 */}
      <div
        id="community"
        className="flex flex-col w-screen h-[320px] sm:h-[1080px] items-center bg-[#8FD1FF] overflow-hidden scroll-pt-5 sm:scroll-pt-16"
      >
        {/** Navigator */}
        <div className="flex w-screen contents-start font-2xl font-bold gap-2 sm:gap-5 items-center max-w-7xl pl-5 sm:pl-9 pt-3 sm:pt-10 z-10">
          <p className="text-xs sm:text-4xl font-bold text-[#042D53]">
            COMMUNITY
          </p>
          <div className="flex sm:gap-2 cursor-pointer">
            <a href="#home">
              <img className="w-5 sm:w-9 cursor-pointer" src={filled} />
            </a>
            <a href="#exchange">
              <img className="w-5 sm:w-9 cursor-pointer" src={filled} />
            </a>
            <a href="#chat">
              <img className="w-5 sm:w-9 cursor-pointer" src={filled} />
            </a>
            <a href="#community">
              <img className="w-5 sm:w-9 cursor-pointer" src={filled} />
            </a>
            <a href="#notification">
              <img className="w-5 sm:w-9 cursor-pointer" src={empty} />
            </a>
          </div>
        </div>

        {/** Row Flex Box */}
        <div
          style={{
            backgroundImage: `url(${backgroundCommunity})`,
            backgroundRepeat: "no-repeat",
          }}
          className="flex w-screen contents-start font-2xl h-full font-bold gap-2 sm:gap-5 max-w-7xl px-5 sm:px-9 pt-3 sm:pt-10 z-10"
        >
          <div className="flex">
            <div className="flex flex-col">
              <p className="text-xl sm:text-4xl text-[#042D53] font-bold z-10 pb-1 sm:pb-4 pt-5 sm:pt-12">
                소통
              </p>
              <p className="text-xs pr-3 sm:pr-[88px] sm:text-xl font-medium text-[#042D53]">
                마을에 대한 의견을 자유롭게 나누고
                <br />
                이웃들의 의사를 물어볼 수 있어요.
              </p>
            </div>
            <img className="w-[208px] sm:w-[740px]" src={phoneCommunity} />
          </div>
        </div>
      </div>

      {/** Screen 12 */}
      <div
        id="notification"
        className="relative flex flex-col w-screen h-[440px] sm:h-[1080px] items-center bg-[#F2F2F7] overflow-hidden scroll-pt-5 sm:scroll-pt-16"
      >
        {/** Navigator */}
        <div className="flex w-screen contents-start font-2xl font-bold gap-2 sm:gap-5 items-center max-w-7xl pl-5 sm:pl-9 pt-3 sm:pt-10 z-10">
          <p className="text-xs sm:text-4xl font-bold text-[#042D53]">
            NOTIFICATION
          </p>
          <div className="flex sm:gap-2 cursor-pointer">
            <a href="#home">
              <img className="w-5 sm:w-9 cursor-pointer" src={filled} />
            </a>
            <a href="#exchange">
              <img className="w-5 sm:w-9 cursor-pointer" src={filled} />
            </a>
            <a href="#chat">
              <img className="w-5 sm:w-9 cursor-pointer" src={filled} />
            </a>
            <a href="#community">
              <img className="w-5 sm:w-9 cursor-pointer" src={filled} />
            </a>
            <a href="#notification">
              <img className="w-5 sm:w-9 cursor-pointer" src={filled} />
            </a>
          </div>
        </div>

        <p className="text-xl sm:text-4xl text-[#042D53] font-bold z-10 pt-5 sm:pt-12">
          알리미
        </p>
        <p className="z-10 text-sm sm:text-xl font-medium text-center text-[#042D53] p-3 sm:p-11 ">
          우리 마을의 최신 소식을 모아서 편리하게 확인해요.
        </p>
        <img className="z-10 w-64 sm:w-[605px]" src={infoNotification} />
        <img
          className="w-[170px] sm:w-[700px] absolute z-0 right-0 bottom-0"
          src={cloud3d}
        />
      </div>

      {/** Screen 13 */}
      <div className="py-7 sm:py-[100px] flex w-screen h-[212px] sm:h-[750px] justify-center items-center bg-[#DDDDDD] overflow-hidden">
        <div className="flex flex-col items-center gap-6 sm:gap-20">
          <img className="w-[65px] sm:w-[205px]" src={icon} />
          <div className="flex sm:gap-4 gap-[5.3px]">
            <StoreContainer
              qrSrc={qrApple}
              iconSrc={iconApple}
              text={"App Store"}
            />
            <StoreContainer
              qrSrc={qrGoogle}
              iconSrc={iconGooglePlay}
              text={"Google Play"}
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Main;
