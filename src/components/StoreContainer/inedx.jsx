const StoreContainer = ({ qrSrc, iconSrc, text, path }) => {
  return (
    <div className="flex flex-col gap-2 sm:gap-9 items-center">
      <img className="w-7 sm:w-[106px]" src={qrSrc} />
      <a href={path} target="_blank">
        <div className="w-24 sm:w-[343px] flex sm:gap-2 justify-center items-center bg-[#042D53] py-2 sm:py-4 rounded sm:rounded-xl cursor-pointer">
          {" "}
          {iconSrc ? (
            <img className="w-[6.75px] sm:w-6" src={iconSrc} />
          ) : (
            <></>
          )}
          <p className="text-white text-[5.65px] sm:text-xl font-bold">
            {text}
          </p>
        </div>
      </a>
    </div>
  );
};

export default StoreContainer;
