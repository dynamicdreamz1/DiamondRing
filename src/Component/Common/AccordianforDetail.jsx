import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const AccordianforDetail = () => {
    return (
        <div className="mt-4">
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    Ring Details
                </AccordionSummary>
                <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    Shipping
                </AccordionSummary>
                <AccordionDetails>
                    This item is made to order and takes 2-4 weeks to craft. We ship
                    FedEx Priority Overnight, signature required and fully insured.
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3-content"
                    id="panel3-header"
                >
                    Retun  policy
                </AccordionSummary>
                <AccordionDetails>
                    Received an item you don't like? KEYZAR is proud to offer free returns
                    within 30 days from receiving your item. Contact our support team to issue a return.
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

export default AccordianforDetail