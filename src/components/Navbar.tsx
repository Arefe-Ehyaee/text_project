import TeamsLogo from "../assets/icons/Teamslogo.svg";
import MySearchIcon from "../assets/icons/search.svg";
import user from "../assets/images/Subtract.png";
import arrowleft from "../assets/icons/arrowleft.svg";
import arrowright from "../assets/icons/arrowright.svg";
import more from "../assets/icons/More Horizontal.svg";
import close from "../assets/icons/Close.svg";
import max from "../assets/icons/ChromeMaximize.svg";
import min from "../assets/icons/ChromeMinimize.svg";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import check from "../assets/images/check.png"

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
  width: "100%",
  height: "32px",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
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
      width: "468px",
    },
    "&::placeholder": {
      color: "#707070",
      fontFamily: "Segoe UI",
      fontSize: "14px",
      alignItems: "center",
    },
  },
}));

const Navbar = () => {



  return (
    <nav className="fixed top-0 left-0 right-0 flex justify-between h-[48px] bg-gray-200 z-50">

      <div>
          <img src={TeamsLogo} className="mt-3 ml-[22px]"></img>
      </div>

      <div className="flex mt-2 md:block">
        <div className="flex items-center">
          <img src={arrowleft} alt="left" className="mr-2" />
          <img src={arrowright} alt="right" />
          <Search>
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

      <div className="flex">
        <button className="mb-3 ml-[15px] mt-3">
          <img src={more}></img>
        </button>

        <div className="flex">
          <button className="relative">
            <img src={user} className="mb-1 ml-[14px]"></img>
            <img src={check} alt="check" className="absolute bottom-2 right-0" />
          </button>
        </div>

        <img src={min} alt="min" className="ml-[27px] mt-4 h-[10px] w-[10px]" />
        <img src={max} alt="max" className="ml-[38px] mt-4 h-[10px] w-[10px]" />
        <img
          src={close}
          alt="close"
          className="ml-[38px] mr-[19px] mt-4 h-[10px] w-[10px]"
        />
      </div>
    </nav>
  );
};
export default Navbar;
