import { Paper, Stack, Typography, useTheme } from '@mui/material'
import React from 'react'
import Card from './card'
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import { data1, data2, data3, data4 } from './data';

export default function Row1() {
  const theme = useTheme();
  return (
    <Stack mb={1} direction='row' flexWrap={"wrap"} gap={2} justifyContent={{ xs: "center", md: "space-between" }}  >

      <Card icon={<EmailIcon sx={{ fontSize: "23px", color: theme.palette.secondary.main }} />} title={"12.361"} subtitle={"Emails Sent"} rate={"+40%"} data={data1} scheme={"nivo"} />

      <Card icon={<PointOfSaleIcon sx={{ fontSize: "23px", color: theme.palette.secondary.main }} />} title={"431.225"} subtitle={"Sales"} rate={"+70%"} data={data2} scheme={"category10"} />

      <Card icon={<PersonAddIcon sx={{ fontSize: "23px", color: theme.palette.secondary.main }} />} title={"32.441"} subtitle={"New Clients"} rate={"+44%"} data={data3} scheme={'accent'} />

      <Card icon={<TrafficIcon sx={{ fontSize: "23px", color: theme.palette.secondary.main }} />} title={"1.351.134"} subtitle={"Traffic Received"} rate={"+77%"} data={data4} scheme={'dark2'} />


    </Stack>
  )
}
