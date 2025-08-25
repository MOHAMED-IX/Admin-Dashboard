import { Box } from '@mui/material'
import Header from "../../components/Header";
import React from 'react'
import LineChart from './LineChart'

export default function line() {
  return (
    <Box>
      <Header title="Line Chart" subTitle="Simple Line Chart" />
      <Box height="75vh">
        <LineChart />
      </Box>
    </Box>
  )
}
