import { BarChart } from "@mui/x-charts/BarChart";
import { axisClasses } from "@mui/x-charts/ChartsAxis";

const chartSetting = {
  yAxis: [
    {
      label: "",
    },
  ],
  width: 600,
  height: 300,
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: "translate(-20px, 0)",
    },
  },
};
const seriesData = [
  {
    data: [70, 70, 70, 70, 70, 70],
  },
  {
    data: [85, 85, 85, 85, 85, 85],
  },
  {
    data: [30, 30, 30, 30, 30, 30],
  },
];

const BarChart2 = () => {
  return (
    <div className="">
      <BarChart
        xAxis={[
          {
            scaleType: "band",
            data: [
              "group A",
              "group B",
              "group C",
              "group S",
              "group W",
              "group Q",
            ],
          },
        ]}
        series={[
          { data: [70, 70, 70, 70, 70, 70] },
          { data: [85, 85, 85, 85, 85, 85] },
          { data: [30, 30, 30, 30, 30, 30] },
        ]}
        {...chartSetting}
        width={500}
        height={300}
      />
    </div>
  );
};

export default BarChart2;
