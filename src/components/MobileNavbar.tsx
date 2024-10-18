import user from "../assets/images/Subtract.png";
import more from "../assets/icons/More Horizontal.svg";
import bot from "../assets/icons/Bot.svg"
import check from "../assets/images/check.png"

const MobileNavbar = () => {
  return (
    <nav className="h-[48px] bg-gray-200">
      <div className="flex justify-between">
        <div className="flex justify-between items-center">
        <div className="flex">
          <button className="relative">
            <img src={user} className="mb-1 ml-[14px]"></img>
            <img src={check} alt="check" className="absolute bottom-2 right-0" />
          </button>
        </div>
          <div className="ml-1 font-bold text-[26px] leading-[31px]">Van Arsdel</div>
        </div>

        <div className="items-center">
        <button className="mr-[15px] mt-3">
            <img src={bot}></img>
          </button>
          <button className="mr-[15px] mt-3">
            <img src={more}></img>
          </button>
        </div>
      </div>
    </nav>
  );
};
export default MobileNavbar;
