import van from "../../assets/images/Avatar (Fluent 2).png";
import more from "../../assets/icons/More Horizontal.svg";
import icon from "../../assets/icons/Icon.svg";
import menu from "../../assets/icons/Button (Fluent 2).svg";
import notselectedOption from "../../assets/icons/ringBlack.svg";
import selectedOptionIcon from "../../assets/icons/ringWhite.svg";
import chevron from "../../assets/icons/Chevron.svg";
import { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import MySearchIcon from "../../assets/icons/search.svg";


const Search = styled("div")(({ theme }) => ({
  position: "relative",
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  border: "1px solid #ccc",
  borderRadius: "4px",
  paddingRight: "10px",
  paddingLeft: "10px",
  marginTop: "8px",
  marginBottom: "8px",
  width: "200px",
  height: "32px",
  [theme.breakpoints.up("sm")]: {
    // marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    paddingLeft: `calc(1em + ${theme.spacing(1)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "200px",
    },
    "&::placeholder": {
      color: "#707070",
      fontFamily: "Segoe UI",
      fontSize: "14px",
      alignItems: "center",
    },
  },
}));

const MainHeader = () => {
  const options_one = [
    { id: 1, label: "Text 1" },
    { id: 2, label: "Text 2" },
    { id: 3, label: "Text 3" },
    { id: 4, label: "Text 4" },
    { id: 5, label: "Text 5" },
    { id: 6, label: "Text 6" },
    { id: 7, label: "Text 7" },
    { id: 8, label: "Text 8" },
  ];

  const [selectedOption, setSelectedOption] = useState<number | null>(
    options_one[0].id
  );

  const handleSelectOption = (id: number) => {
    setSelectedOption(id);
  };

  return (
    <nav className="fixed top-[48px] left-[68px] right-0 z-40 bg-white">
      <div className="hidden md:flex justify-between pl-5 py-[13px] border-b-2 h-[60px]">
        <div className="flex">
          <img src={van} alt="van arsdel" className=""/>
          <div className="font-bold text-[18px] leading-6 ml-3 align-middle mt-1">
            Van Arsdel
          </div>
          <ul className="flex align-middle mt-1">
            <li className="ml-[14px]">Home</li>
            <li className="ml-[14px]">Timeline</li>
            <li className="ml-[14px]">Chat</li>
            <li className="ml-[14px]">Assigned to you</li>
          </ul>
        </div>
        <div className="flex mt-1">
          <img src={icon} alt="icon" className="mr-3 h-5 w-5" />
          <img src={more} alt="more" className="mr-[26px] h-5 w-5" />
        </div>
      </div>

      <div className="hidden md:flex justify-between pl-5 border-b-2 h-[48px] align-middle">
        <div className="flex">
          <button  className="">
            <img src={menu} alt="menu" />
          </button>
          <ul className="hidden lg:flex align-middle">
            {options_one.map((options_one, index) => (
              <>
                <li
                  key={options_one.id}
                  className={`my-[8px] py-1 mr-2 px-3 rounded-[4px] ${
                    selectedOption === options_one.id
                      ? "bg-[#5B5FC7]"
                      : "bg-white"
                  }`}
                >
                  <div className="flex">
                    <button onClick={() => handleSelectOption(options_one.id)}>
                      <img
                        src={
                          selectedOption === options_one.id
                            ? selectedOptionIcon
                            : notselectedOption
                        }
                        alt="option"
                      />
                    </button>
                    <span
                      className={`mx-1 font-normal text-sm ${
                        selectedOption === options_one.id
                          ? "text-white"
                          : "text-black"
                      }`}
                    >
                      {options_one.label}
                    </span>
                    {selectedOption === options_one.id ? (
                      <button>
                        <img
                          src={chevron}
                          alt="chevron"
                          className="align-middle"
                        />
                      </button>
                    ) : (
                      <></>
                    )}
                  </div>
                </li>
                {(index === 2 || index === 5 || index === 8) && (
                  <div className="vertical-line"></div>
                )}
              </>
            ))}
          </ul>
        </div>
        <div className="flex">
          <button className="mr-2">
            <span className="font-semibold text-sm leading-5">Filter</span>
          </button>
          <Search className="mr-5">
            <SearchIconWrapper>
              <img src={MySearchIcon} alt="search" className="h-5 w-5" />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </div>
      </div>
    </nav>
  );
};
export default MainHeader;
