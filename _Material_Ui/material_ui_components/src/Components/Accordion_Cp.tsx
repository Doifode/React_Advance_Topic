import React, { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Stack } from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
export const Accordion_Cp = () => {
    const [expandeVal, setExpandVal] = useState<string | boolean>(false);
    const handleChange = (isExpanded: boolean, string: string) => {
        setExpandVal(isExpanded ? string : false)

    }
    return (

        <Stack >
            <Stack direction={"row"}>
                <Accordion expanded={expandeVal === 'accordion1'}
                    onChange={(e, isExpanded) => handleChange(isExpanded, "accordion1")}
                >
                    <AccordionSummary
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        expandIcon={<ExpandMoreIcon />}
                    >
                        <Typography variant="h6" component="div">
                            Text1
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde odio fuga fugiat sequi magnam non, qui veritatis dolore, reprehenderit cumque iste iure, adipisci totam nobis ipsa facilis! Magnam, impedit nihil.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Stack>
            <Stack>

                <Accordion expanded={expandeVal === 'accordion2'}
                    onChange={(e, isExpanded) => handleChange(isExpanded, "accordion2")}
                >
                    <AccordionSummary
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        expandIcon={<ExpandMoreIcon />}
                    >
                        <Typography variant="h6" component="div">
                            Text1
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde odio fuga fugiat sequi magnam non, qui veritatis dolore, reprehenderit cumque iste iure, adipisci totam nobis ipsa facilis! Magnam, impedit nihil.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Stack>
            <Stack>

                <Accordion expanded={expandeVal === 'accordion3'}
                    onChange={(e, isExpanded) => handleChange(isExpanded, "accordion3")}
                >
                    <AccordionSummary
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        expandIcon={<ExpandMoreIcon />}
                    >
                        <Typography variant="h6" component="div">
                            Text1
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde odio fuga fugiat sequi magnam non, qui veritatis dolore, reprehenderit cumque iste iure, adipisci totam nobis ipsa facilis! Magnam, impedit nihil.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Stack>
        </Stack>

    )
}
