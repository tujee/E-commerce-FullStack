import React from 'react';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Container, Accordion, Divider, TextField, Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


function FaqPages(props) {
    return (
            <Container sx={{backgroundColor: '#EAF1F2'}}>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        <Typography sx={{ color: '#1578A2' }} component="span">¿Como Busco un producto?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Primero debes ir al cuadro de texto situado en la esquina superior izquierda, ingresa el producto que deseas encontrar y luego haz click en el boton BUSCAR que esta a la derecha.
                            Puedes ingresar por el nombre del producto, por su descripcion o la categoria a la que pertenece.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        <Typography component="span">¿Como selecciono el producto que deseo comprar?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Primero debes ir al cuadro de texto situado en la esquina superior izquierda, ingresa el producto que deseas encontrar y luego haz click en el boton BUSCAR que esta a la derecha.
                            Puedes ingresar por el nombre del producto, por su descripcion o la categoria a la que pertenece.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        <Typography component="span">¿Donde veo los productos seleccionados?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Primero debes ir al cuadro de texto situado en la esquina superior izquierda, ingresa el producto que deseas encontrar y luego haz click en el boton BUSCAR que esta a la derecha.
                            Puedes ingresar por el nombre del producto, por su descripcion o la categoria a la que pertenece.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        <Typography component="span">Accordion 1</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        <Typography component="span">Accordion 1</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Container>
    );
}

export default FaqPages;