interface MainSideNavbarProps {
    children?: React.ReactNode;
}
  

const MainSideNavbar = (props : MainSideNavbarProps) =>{
    const { children } = props;
    return (
        <div className="fixed w-[183px] top-[156px] ml-[68px] bg-white min-h-screen">
            {children}
        </div>
    )
}

export default MainSideNavbar;