import DateRangeIcon from "@mui/icons-material/DateRange";
import { Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { salesData } from "../../data";

const Item = styled("div")(({ theme }) => ({
  color: theme.palette.common.white,
  marginBottom: 16,
  width: "15.5%",
  [theme.breakpoints.down("lg")]: {
    width: "16.5%",
  },
  [theme.breakpoints.down("md")]: {
    width: "33.3%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "50%",
  },
  padding: theme.spacing(0, 2),
}));

function StatisticsData() {
  return (
    <Stack
      direction={"row"}
      flexWrap={"wrap"}
      sx={{ p: (theme) => theme.spacing(0, 1, 2) }}
    >
      {salesData.map((item, key) => (
        <Item key={key}>
          <Typography variant={"body1"} color={"common.white"} mb={1}>
            <DateRangeIcon
              fontSize={"small"}
              sx={{ verticalAlign: "middle", mr: 1, mt: -0.5 }}
            />
            {item.amount}
          </Typography>
          <Typography variant={"h6"} color={"common.white"} mb={0}>
            {item.name}
          </Typography>
        </Item>
      ))}
    </Stack>
  );
}
export { StatisticsData };
