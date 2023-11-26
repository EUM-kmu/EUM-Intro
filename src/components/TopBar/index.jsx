import logo from "/src/assets/logo.svg";

const TopBar = () => {
  return (
    <div className="flex sm:h-[60] px-2 sm:px-[30] py-2 sm:py-3 w-screen bg-white sticky top-0 z-30">
      <img className="h-3 sm:h-9" src={logo} />
    </div>
  );
};

export default TopBar;
