import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, Slide } from '@mui/material';
import { productBadges } from '../../Utility/Constant';

const BadgeComponent = () => {
    const [open, setOpen] = useState(false);  // Manage modal open/close state
    const [selectedBadge, setSelectedBadge] = useState(null);  // Store the selected badge's data

    const handleClickOpen = (badge) => {
        setSelectedBadge(badge);  // Set the selected badge data
        setOpen(true);  // Open the modal
    };

    const handleClose = () => {
        setOpen(false);  // Close the modal
    };

    return (
        <div className="product-badge-main flex flex-wrap justify-center gap-y-2 my-6 md:my-8">
            {productBadges.map((badge, index) => (
                <a key={index} className="product-badge-item CustomProductBadge" onClick={() => handleClickOpen(badge)}>
                    <div className="CustomBadge__image h-8 mx-auto">
                        {badge.icon}
                    </div>
                    <h5 className="CustomBadge__title mt-4 text-center">{badge.title}</h5>
                </a>
            ))}

            <Dialog
                open={open}
                onClose={handleClose}
                sx={{
                    '.MuiDialog-paper': {
                        animation: 'slideUp 0.5s ease-out',  // Custom animation on dialog paper
                    }
                }}
            >
                <DialogTitle>{selectedBadge ? selectedBadge.title : 'Badge'}</DialogTitle>
                <DialogContent>
                    <div className="flex justify-center">
                        <div className="h-16 w-16 mx-auto">
                            {selectedBadge ? selectedBadge.icon : null}
                        </div>
                    </div>
                    <p className="mt-4 text-center">
                        {selectedBadge ? selectedBadge.description : 'Description goes here.'}
                    </p>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="secondary">
                        Great
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default BadgeComponent;
