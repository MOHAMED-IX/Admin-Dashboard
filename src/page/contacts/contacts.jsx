import React from 'react';
import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { columns, rows } from './data';
import Header from "../../components/Header";

export default function Contacts() {
  return (
    <Box>
      <Header
        title="CONTACTS"
        subTitle="List of Contacts for Future Reference"
      />

      <Box sx={{ height: 600, width: '100%', mx: 'auto' }}>
        <DataGrid
          rows={rows}
          // @ts-ignore
          columns={columns}
          showToolbar
        />
      </Box>
    </Box>
  );
}
