import React from 'react'
import { Box, useTheme } from '@mui/material';
import { ResponsiveBar } from '@nivo/bar'

const data = [
  {
    year: 2019,
    Spain: 900,
    France: 1400,
    Germany: 1700,
  },

  {
    year: 2020,
    Spain: 1000,
    France: 1500,
    Germany: 1800,
  },

  {
    year: 2021,
    Spain: 1100,
    France: 1600,
    Germany: 1900,
  },

  {
    year: 2022,
    Spain: 1200,
    France: 1700,
    Germany: 2000,
  },

  {
    year: 2023,
    Spain: 1260,
    France: 1709,
    Germany: 2080,
  },
];


export default function BarChart({ isDashboard = false }) {

  const theme = useTheme();

  return (

    <Box>

      <Box sx={{ height: isDashboard ? 425 : "75vh" }}>

        <ResponsiveBar /* or Bar for fixed dimensions */
          data={data}
          keys={['Spain', 'France', 'Germany']}
          indexBy="year"
          colors={{ scheme: 'category10' }}
          labelSkipWidth={12}
          labelSkipHeight={12}
          theme={{
            // "background": "#ffffff",
            "text": {
              "fontSize": 11,
              "fill": theme.palette.text.primary,
              "outlineWidth": 0,
              "outlineColor": "#ffffff"
            },
            "axis": {
              "domain": {
                "line": {
                  "stroke": "#777777",
                  "strokeWidth": 1
                }
              },
              "legend": {
                "text": {
                  "fontSize": 12,
                  "fill": theme.palette.primary.main,
                  "outlineWidth": 0,
                  "outlineColor": "#ffffff"
                }
              },
              "ticks": {
                "line": {
                  "stroke": "#777777",
                  "strokeWidth": 1
                },
                "text": {
                  "fontSize": 11,
                  "fill": theme.palette.text.primary,
                  "outlineWidth": 0,
                  "outlineColor": "#ffffff"
                }
              }
            },
            "grid": {
              "line": {
                "stroke": theme.palette.divider,
                "strokeWidth": 1
              }
            },
            "legends": {
              "title": {
                "text": {
                  "fontSize": 11,
                  "fill": "#333333",
                  "outlineWidth": 0,
                  "outlineColor": "#ffffff"
                }
              },
              "text": {
                "fontSize": 11,
                "fill": theme.palette.text.primary,
                "outlineWidth": 0,
                "outlineColor": "#ffffff"
              },
              "ticks": {
                "line": {},
                "text": {
                  "fontSize": 10,
                  "fill": "#333333",
                  "outlineWidth": 0,
                  "outlineColor": "#ffffff"
                }
              }
            },
            "annotations": {
              "text": {
                "fontSize": 13,
                "fill": "#333333",
                "outlineWidth": 2,
                "outlineColor": "#ffffff",
                "outlineOpacity": 1
              },
              "link": {
                "stroke": "#000000",
                "strokeWidth": 1,
                "outlineWidth": 2,
                "outlineColor": "#ffffff",
                "outlineOpacity": 1
              },
              "outline": {
                "stroke": "#000000",
                "strokeWidth": 2,
                "outlineWidth": 2,
                "outlineColor": "#ffffff",
                "outlineOpacity": 1
              },
              "symbol": {
                "fill": "#000000",
                "outlineWidth": 2,
                "outlineColor": "#ffffff",
                "outlineOpacity": 1
              }
            },
            "tooltip": {
              // @ts-ignore
              "wrapper": {},
              "container": {
                "background": "#ffffff",
                "color": "#333333",
                "fontSize": 12
              },
              "basic": {},
              "chip": {},
              "table": {},
              "tableCell": {},
              "tableCellValue": {}
            }
          }}
          borderColor={{ from: 'color', modifiers: [] }}

          legends={
            isDashboard ? [] :
              [
                {
                  dataFrom: 'keys',
                  anchor: 'bottom-right',
                  direction: 'column',
                  translateX: 120,
                  itemsSpacing: 3,
                  itemWidth: 100,
                  itemHeight: 16
                }
              ]}
          axisBottom={{ legend: 'year', legendOffset: 35 }}
          axisLeft={{ legend: 'minimum wage (EUR/month)', legendOffset: -50 }}
          margin={isDashboard ? { top: 50, right: 30, bottom: 60, left: 80 } : { top: 50, right: 130, bottom: 50, left: 60 }}
        />
      </Box>
    </Box>
  )
}
