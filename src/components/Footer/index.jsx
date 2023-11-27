const Footer = () => {
  return (
    <div className=" py-4 sm:py-9 flex flex-col w-screen h-[92px] sm:h-[326px] bg-[#F2F2F7] pl-28 sm:pl-[334px] gap-2 sm:gap-8">
      <p className="text-[6.75px] sm:text-2xl font-bold">이음</p>
      <div className="flex gap-1 sm:gap-4">
        <a
          href="#"
          className="underline text-[4.5px] sm:text-base text-[#8E8E93] cursor-pointer"
        >
          서비스 이용약관
        </a>
        <a
          href="#"
          className="underline text-[4.5px] sm:text-base text-[#8E8E93] cursor-pointer border-b-[#8E8E93]"
        >
          개인정보 보호방침
        </a>
      </div>
    </div>
  );
};

export default Footer;
