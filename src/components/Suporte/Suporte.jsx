import * as React from "react";
import "./Suporte.css";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Suporte() {
  return (
    <div>
      <h2 className="support-title">Dúvidas frequentes</h2>
      <Accordion className="accordion-item">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className="typo-text">Não consigo reproduzir os vídeos das aulas</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="typo-text1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className="accordion-item">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className="typo-text">Preciso alterar o endereço de e-mail da minha conta</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="typo-text1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className="accordion-item">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className="typo-text">Escolher quais notificações vou receber no meu e-mail</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="typo-text1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className="accordion-item">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className="typo-text">Como baixar os recursos das aulas</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="typo-text1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className="accordion-item">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className="typo-text">Como baixar os certificados dos cursos finalizados</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="typo-text1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
