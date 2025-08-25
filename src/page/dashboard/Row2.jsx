import { Box, IconButton, Paper, Stack, Typography, useTheme } from '@mui/material'
import LineChart from '../line/LineChart'
import React from 'react'
import { DownloadOutlined } from '@mui/icons-material';
import { Transactions } from "./data";


export default function Row2() {


  const theme = useTheme();

  return (

    <Stack direction={'row'} gap={2} marginTop={4} flexWrap={"wrap"}>

      <Paper sx={{ maxWidth: 900, minWidth: "50vw", flexGrow: 1 }}>

        <Stack alignItems={'center'} direction={'row'} flexWrap={"wrap"} justifyContent={"space-between"} >
          <Box>
            <Typography color={theme.palette.secondary.main} mb={1} mt={2} ml={4} variant="h6" fontWeight={"bold"}>
              Revenue Generated
            </Typography>
            <Typography variant="body2" ml={4}>
              $59,342.32
            </Typography>
          </Box>

          <Box>
            <IconButton sx={{ mr: 4, mb: 1, mt: 2 }}>
              <DownloadOutlined />
            </IconButton>
          </Box>
        </Stack>

        <LineChart isDashboard={true} />
      </Paper>



      <Box sx={{ maxHeight: 360, flexGrow: 1, minWidth: 350, overflowY: 'scroll' }}>
        <Paper>
          <Typography color={theme.palette.secondary.main} variant="h6" fontWeight={"bold"} pb={1} ml={4} pt={2}>
            Recent Transactions
          </Typography>
        </Paper>

        {Transactions.map((item) => {
          return (
            <Paper
              sx={{
                mt: 0.4,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                pl: 4,
                pr: 4,
              }}
            >
              <Box p={1.2} minWidth={150} >
                <Typography variant="body1"> {item.txId}</Typography>
                <Typography variant="body2"> {item.user} </Typography>
              </Box>
              <Typography p={1} variant="body1"> {item.date}</Typography>

              <Typography
                borderRadius={1.4}
                minWidth={80}
                textAlign={"center"}
                p={1}
                bgcolor={theme.palette.error.main}
                color={theme.palette.getContrastText(theme.palette.error.main)}
                variant="body2"
              >
                $ {item.cost}
              </Typography>
            </Paper>
          )
        })}



      </Box>
    </Stack>

  )
}
