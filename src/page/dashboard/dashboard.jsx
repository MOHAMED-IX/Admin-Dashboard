import React from 'react'
import Row1 from './Row1'
import Header from "../../components/Header";
import { Box, Button } from '@mui/material';
import Row2 from './Row2';
import Row3 from './Row3';
import { DownloadOutlined } from '@mui/icons-material';


export default function dashboard() {



  return (
    <Box>
      <Box>
        <Header title="DASHBOARD" subTitle="Welcome to the Dashboard" isDashboard />
      </Box>

      <Box sx={{ textAlign: 'right' }}>
        <Button sx={{ padding: '6px 8px', textTransform: 'capitalize', mb: 2 }} variant="contained">
          <DownloadOutlined />
          Download Reports
        </Button>
      </Box>

      <Row1 />

      <Row2 />
      <Row3 />
    </Box>


  )
}
