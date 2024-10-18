import MobileNavbar from "./MobileNavbar";
import Navbar from "./Navbar";
import NavbarBottom from "./NavbarBottom";
import SideNavbar from "./SideNavbar";
import { useMediaQuery } from '@mui/material';

export interface LayoutProps {
    children?: React.ReactNode;
  }

const Layout = (props: LayoutProps) => {
    const {children} = props;
    const isMobile = useMediaQuery('(max-width:767px)');
    return (
    <>
        {isMobile ? <MobileNavbar /> : <Navbar />}
        {children}
        {isMobile ? <NavbarBottom /> : <SideNavbar />}
    </>
    )
}
export default Layout;