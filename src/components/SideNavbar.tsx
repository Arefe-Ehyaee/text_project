import activity from "../assets/icons/activity.svg"
import chat from "../assets/icons/chat.svg"
import team from "../assets/icons/Teams.svg"
import cal from "../assets/icons/cal.svg"
import call from "../assets/icons/Call.svg"
import files from "../assets/icons/file.svg"
import van from "../assets/icons/van.svg"
import more from "../assets/icons/More Horizontal.svg"
import apps from "../assets/icons/apps.svg"

const SideNavbar = () => {
    return(
        <nav className="fixed w-[68px] top-[48px] left-0 bg-gray-200 min-h-screen">
            <ul className="list-none">
                <li>
                    <div className="text-center items-center py-[8.5px] px-[22px] pl-[18px]">
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
                    <div className="text-center items-center py-[8.5px] px-[22px] pl-[16px]">
                    <button className="text-center items-center">
                        <img src={cal} alt="cal" className="h-6 w-6 mx-auto"/>
                        <div className="mt-[1px] text-[10px]">Calender</div>
                    </button>
                    </div>
                </li>
                <li>
                    <div className="text-center items-center py-[8.5px] px-[22px]">
                    <button className="text-center items-center">
                        <img src={call} alt="call" className="h-6 w-6 mx-auto"/>
                        <div className="mt-[1px] text-[10px]">Call</div>
                    </button>
                    </div>
                </li>
                <li>
                    <div className="text-center items-center py-[8.5px] px-[22px]">
                    <button className="text-center items-center">
                        <img src={files} alt="files" className="h-5 w-5 mx-auto"/>
                        <div className="mt-[1px] text-[10px]">Files</div>
                    </button>
                    </div>
                </li>
                <li>
                    <div className="text-center items-center py-[8.5px] px-[22px] pl-[12px]">
                    <button className="text-center items-center flex flex-col">
                        <img src={van} alt="van" className="h-5 w-5 mx-auto"/>
                        <div className="mt-[1px] text-[10px] text-[#4F52B2] leading-[14px] whitespace-nowrap">Van Arsdel</div>
                    </button>
                    </div>
                </li>
                <li>
                    <div className="text-center items-center py-[8.5px] px-[22px]">
                    <button className="text-center items-center flex flex-col">
                        <img src={more} alt="more" className="h-5 w-5 mx-auto"/>
                    </button>
                    </div>
                </li>
                <li>
                    <div className="text-center items-center py-[8.5px] px-[22px]">
                    <button className="text-center items-center flex flex-col">
                        <img src={apps} alt="apps" className="h-5 w-5 mx-auto"/>
                        <div className="mt-[1px] text-[10px]">Apps</div>
                    </button>
                    </div>
                </li>
                
            </ul>
        </nav>
    )
}
export default SideNavbar;
