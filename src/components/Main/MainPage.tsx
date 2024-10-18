import Layout from "../Layout";
import Card from "./Card";
import BarChart1 from "./Charts/BarChart1";
import CustomGauge from "./Charts/CustomGauge";
import MainHeader from "./MainHeader";
import TreeDropdown from "./MainSideNavbar/List";
import MainSideNavbar from "./MainSideNavbar/MainSideNavbar";
import { useMediaQuery } from "@mui/material";
import chart3 from "../../assets/images/Chart 3.png"
import chart4 from "../../assets/images/Chart 4.png"
import chart5 from "../../assets/images/Chart 5.png"
import chart6 from "../../assets/images/chart 6.png"

const MainPage = () => {
  const isMobile = useMediaQuery("(max-width:767px)");
  return (
    <>
      <Layout>
        <MainHeader></MainHeader>

        {isMobile ? (
          <></>
        ) : (
          <MainSideNavbar>
            <TreeDropdown></TreeDropdown>
          </MainSideNavbar>
        )}

        <div className="mx-auto md:ml-[251px] md:mt-[160px]">
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-[auto_auto_auto] gap-2 p-4">
            <Card
              cardTitle={"Card title"}
              cardDescription={"Description"}
              options={["7 days", "30 days", "60 days"]}
            >
              <CustomGauge></CustomGauge>
            </Card>
            <Card
              cardTitle={"Card title"}
              cardDescription={"Description"}
              options={["7 days", "30 days", "60 days"]}
            >
                <BarChart1></BarChart1>
            </Card>
            <Card
              cardTitle={"Card title"}
              cardDescription={"Description"}
              options={["7 days", "30 days", "60 days"]}
            >
                <img src={chart3} alt="" />
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 p-4">
            <Card
              cardTitle={"Card title"}
              cardDescription={"Description"}
              options={["7 days", "30 days", "60 days"]}
            >
              <img src={chart4} alt="" />
            </Card>
            <Card
              cardTitle={"Card title"}
              cardDescription={"Description"}
              options={["7 days", "30 days", "60 days"]}
            >
             <img src={chart5} alt="" />
            </Card>
            <Card
              cardTitle={"Card title"}
              cardDescription={"Description"}
              options={["7 days", "30 days", "60 days"]}
            >
              <img src={chart6} alt="" />
            </Card>
          </div>
        </div>
      </Layout>
    </>
  );
};
export default MainPage;
