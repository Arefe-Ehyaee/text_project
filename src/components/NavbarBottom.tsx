import activity from "../assets/icons/activity.svg"
import chat from "../assets/icons/chat.svg"
import team from "../assets/icons/Teams.svg"
import cal from "../assets/icons/cal.svg"
import more from "../assets/icons/More Horizontal.svg"


const NavbarBottom = () => {
    return(
        <nav className="fixed h-[68px] w-full bottom-0 bg-gray-100 ">
            <ul className="flex justify-between">
                <li>
                    <div className="text-center items-center py-[8.5px] px-[22px]">
                    <button className="text-center items-center">
                        <img src={activity} alt="activity" className="h-5 w-5 mx-auto"/>
                        <div className="mt-[1px] text-[10px]">Activity</div>
                    </button>
                    </div>
                </li>
                <li>
                    <div className="text-center items-center py-[8.5px] px-[22px]">
                    <button className="text-center items-center">
                        <img src={chat} alt="chat" className="h-6 w-6 mx-auto"/>
                        <div className="mt-[1px] text-[10px]">Chat</div>
                    </button>
                    </div>
                </li>
                <li>
                    <div className="text-center items-center py-[8.5px] px-[22px]">
                    <button className="text-center items-center">
                        <img src={team} alt="team" className="h-6 w-6 mx-auto"/>
                        <div className="mt-[1px] text-[10px]">Team</div>
                    </button>
                    </div>
                </li>
                <li>
                    <div className="text-center items-center py-[8.5px] px-[22px]">
                    <button className="text-center items-center">
                        <img src={cal} alt="cal" className="h-6 w-6 mx-auto"/>
                        <div className="mt-[1px] text-[10px]">Calender</div>
                    </button>
                    </div>
                </li>
                <li>
                    <div className="text-center items-center py-[8.5px] px-[22px]">
                    <button className="text-center items-center flex flex-col">
                        <img src={more} alt="more" className="h-6 w-6 mx-auto"/>
                    </button>
                    </div>
                </li>
          
            </ul>
        </nav>
    )
}
export default NavbarBottom;
