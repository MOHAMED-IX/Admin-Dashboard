import Header from "../../components/Header";
import { Box, } from '@mui/material';
import { ResponsiveBar } from '@nivo/bar'
import BarChart from "./BarChart";

export default function Bar() {

  return (
    <Box>

      <Box>
        <Header title="Bar Chart" subTitle="The minimum wage in Germany, France and Spain (EUR/month)" />
      </Box>

      <BarChart />
    </Box>
  )
}
