import { BarChart } from "@mui/x-charts/BarChart";

const BarChart1 = () => {
  return (
    <div className="">
      <BarChart
        xAxis={[
          {
            scaleType: "band",
            data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
            label: "",
          },
        ]}
        yAxis={[
          {
            scaleType: "linear",
            data: ["0", "20K", "40K", "60K", "80K", "100K"],
            label: "",
          },
        ]}
        series={[{ data: [78000, 80000, 60000, 70000, 60000, 100000] }]}
        width={270}
        height={300}
        grid={{ horizontal: true }}
      />
    </div>
  );
};

export default BarChart1;
