import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box } from '@mui/material';
import Header from "../../components/Header";



export default function Faq() {
  return (
    <Box>
      <Header title="FAQ" subTitle="Frequently Asked Questions" />

      <Box>
        <Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography sx={{ fontWeight: "bold", fontSize: "18px" }} component="span">1. What is the main purpose of your Admin Dashboard project?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              To build an interactive dashboard for managing data efficiently using modern tools like React and MUI.</Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography sx={{ fontWeight: "bold", fontSize: "18px" }} component="span">2. Why did you choose Vite over Create React App?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Vite offers faster development with Hot Module Replacement (HMR) and better build performance compared to CRA.</Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography sx={{ fontWeight: "bold", fontSize: "18px" }} component="span">3. What role does MUI play in your project?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              MUI provides pre-built Material Design components, speeding up UI development and ensuring a modern design.</Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography sx={{ fontWeight: "bold", fontSize: "18px" }} component="span">4. Why did you use @mui/x-data-grid?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              To create a professional data table with advanced features like filtering, sorting, and searching.</Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography sx={{ fontWeight: "bold", fontSize: "18px" }} component="span">5. How did you handle forms in your project?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              I used react-hook-form to manage forms and validate inputs efficiently.</Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography sx={{ fontWeight: "bold", fontSize: "18px" }} component="span">6. How is form validation handled in the project?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Form validation and submission are managed using React Hook Form, which provides easy integration with MUI components and efficient re-rendering.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography sx={{ fontWeight: "bold", fontSize: "18px" }} component="span">7. Does the project have multiple pages, and how did you implement navigation?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Yes, I used react-router-dom to manage routing between pages like Dashboard, Calendar, and Reports.</Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography sx={{ fontWeight: "bold", fontSize: "18px" }} component="span">8. Why did you choose Nivo for charts?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Nivo offers interactive, customizable charts with strong React support.</Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography sx={{ fontWeight: "bold", fontSize: "18px" }} component="span">9. What types of charts did you implement?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              I implemented Line Chart, Bar Chart, Pie Chart, and Geo Map to visualize data.</Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography sx={{ fontWeight: "bold", fontSize: "18px" }} component="span">10. How did you customize the charts, such as changing colors or adding tooltips?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              By using Nivo’s props like colors and tooltip for full customization.</Typography>
          </AccordionDetails>
        </Accordion>


      </Box>

    </Box>

  )
}
