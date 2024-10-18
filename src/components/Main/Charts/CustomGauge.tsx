import { Box, Typography } from "@mui/material";
import { Gauge, gaugeClasses } from "@mui/x-charts/Gauge";

const CustomGauge = () => {
  return (
    <div className="">
      <Box position="relative" display="inline-block" width={195} height={136}>
        <Gauge
          width={184}
          height={160}
          value={72}
          startAngle={-90}
          endAngle={90}
          text={({ value }) => `${value}%`}
          sx={(theme) => ({
            [`& .${gaugeClasses.valueText}`]: {
              fontSize: 32,
              fontWeight: "bold",
              fontFamily: "Segoe UI",
              color: "#424242",
            },
            [`& .${gaugeClasses.valueArc}`]: {
              fill: "#00B7C3",
            },
            [`& .${gaugeClasses.referenceArc}`]: {
              fill: theme.palette.text.disabled,
            },
          })}
        />

        <Typography
          position="absolute"
          left="1px"
          bottom="10px"
          fontSize="12px"
          fontWeight="Semi Bold"
          sx={{ fontFamily: "Segoe UI" }}
        >
          0
        </Typography>

        <Typography
          position="absolute"
          right="1px"
          bottom="10px"
          fontSize="12px"
          fontWeight="Semi Bold"
          sx={{ fontFamily: "Segoe UI" }}
        >
          100
        </Typography>

        <div className="ml-5">
          <Box
            display="flex"
            justifyContent="space-around"
            width="70%"
            marginTop={2}
          >
            <Box display="flex" alignItems="center">
              <Box
                width={10}
                height={10}
                bgcolor="#00B7C3"
                borderRadius="0.63px"
              />
              <Typography
                marginLeft={1}
                fontSize="12px"
                fontWeight="normal"
                sx={{ fontFamily: "Segoe UI" }}
              >
                Label 1
              </Typography>
            </Box>
            <Box display="flex" alignItems="center">
              <Box
                width={10}
                height={10}
                bgcolor="#cccccc"
                borderRadius="0.63px"
              />
              <Typography
                marginLeft={1}
                fontSize="12px"
                fontWeight="normal"
                sx={{ fontFamily: "Segoe UI" }}
              >
                Label 3
              </Typography>
            </Box>
          </Box>
        </div>
      </Box>
    </div>
  );
};

export default CustomGauge;
