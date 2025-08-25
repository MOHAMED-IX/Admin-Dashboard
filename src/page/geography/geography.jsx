import { Box } from "@mui/material";
import GeographyChart from "./GeographyChart";
import Header from "../../components/Header";
export default function Geography() {
  return (
    <Box>
      <Header title="Geography" subTitle="World Map Chart" />
      <GeographyChart />
    </Box>
  )
}
