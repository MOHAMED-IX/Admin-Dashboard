import { Box, Paper, Stack, Typography, useTheme } from '@mui/material'
import { ResponsivePie } from '@nivo/pie'
import React from 'react'


export default function Card({ icon, title, subtitle, rate, data, scheme }) {

  const theme = useTheme();
  return (
    <div style={{ display: 'flex', flexGrow: 1 }}>
      <Paper sx={{ minWidth: "333px", padding: 1, display: "flex", justifyContent: "space-between", flexGrow: 1 }}>
        <Stack direction={"column"} gap={1} pl={1} pt={1.5}>
          {icon}
          <Typography>{title}</Typography>
          <Typography>{subtitle}</Typography>
        </Stack>

        <Stack direction={"column"} alignItems={"center"}>
          <Box height={"80px"} width={"80px"} >
            <ResponsivePie /* or Pie for fixed dimensions */
              data={data}
              colors={{ scheme: scheme }}
              margin={{ top: 10, right: 0, bottom: 10, left: 0 }}
              innerRadius={0.7}
              padAngle={0.6}
              cornerRadius={2}
              activeOuterRadiusOffset={8}
              arcLinkLabelsSkipAngle={10}
              enableArcLabels={false}
              enableArcLinkLabels={false}
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
                    "stroke": "#dddddd",
                    "strokeWidth": 0
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
                },
              }}
            />
          </Box>
          <Typography>{rate}</Typography>
        </Stack>

      </Paper>
    </div>
  )
}
