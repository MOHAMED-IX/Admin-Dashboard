import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { rows } from './data';
import { Box, Typography } from '@mui/material';
import {
  AdminPanelSettingsOutlined,
  LockOpenOutlined,
  SecurityOutlined,
} from "@mui/icons-material";
import { useTheme } from "@mui/material";
import Header from "../../components/Header";



export default function Team() {

  const theme = useTheme();

  const columns = [
    { field: 'id', headerName: 'ID', flex: 1, align: 'center', headerAlign: 'center' },
    { field: 'name', headerName: 'Name', flex: 1, align: 'center', headerAlign: 'center' },
    { field: 'email', headerName: 'Email', flex: 1, align: 'center', headerAlign: 'center' },
    { field: 'age', headerName: 'Age', flex: 1, align: 'center', headerAlign: 'center' },
    { field: 'phone', headerName: 'Phone', flex: 1, align: 'center', headerAlign: 'center' },
    {
      field: 'access', headerName: 'Access', flex: 1, align: 'center', headerAlign: 'center',
      renderCell: ({ row: { access } }) => {
        return (



          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            borderRadius: '5px',
            padding: '5px',
            margin: '10px',
            color: theme.palette.common.white,
            backgroundColor: access === 'Admin' ? theme.palette.info.main : access === 'Manager' ? theme.palette.secondary.dark : theme.palette.success.dark

          }}>

            {
              access === 'Admin' ? <AdminPanelSettingsOutlined fontSize='small' />
                :
                access === 'Manager' ? <SecurityOutlined fontSize='small' />
                  :
                  <LockOpenOutlined fontSize='small' />
            }

            <Typography sx={{ fontSize: '13px' }}>{access}</Typography>
          </Box >
        )
      }
    },
  ];

  return (
    <Box>
      <Header title="TEAM" subTitle="Managing the Team Members" />
      <Box sx={{ height: 600, width: '100%', mx: 'auto' }}>
        <DataGrid rows={rows}
          // @ts-ignore
          columns={columns} />
      </Box>
    </Box>
  )
}

