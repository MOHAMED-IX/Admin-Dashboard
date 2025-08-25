import React from 'react'
import Header from "../../components/Header";
import { Box } from '@mui/material';
import PieChart from './PieChart';

export default function pie() {
  return (
    <Box>
      <Header title="Pie Chart" subTitle="Simple Pie Chart" />
      <Box height="75vh">
        <PieChart />
      </Box>
    </Box>
  )
}
