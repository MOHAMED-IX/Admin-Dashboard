import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { columns, rows } from './data';
import Header from "../../components/Header";

export default function invoices() {
  return (
    <Box>
      <Header title="INVOICES" subTitle="List of Invoice Balances" />
      <Box sx={{ height: 600, width: '100%', mx: 'auto' }}>
        <DataGrid
          checkboxSelection
          rows={rows}
          // @ts-ignore
          columns={columns}
        // showToolbar
        />
      </Box>
    </Box>
  )
}
