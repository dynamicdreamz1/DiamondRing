import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button } from '@mui/material';
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
                <button hre key={index} className="product-badge-item CustomProductBadge" onClick={() => handleClickOpen(badge)}>
                    <div className="CustomBadge__image h-8 mx-auto">
                        {badge.icon}
                    </div>
                    <h5 className="CustomBadge__title mt-4 text-center">{badge.title}</h5>
                </button>
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
                <DialogContent className='productBadges_model CustomBadge__content w-full max-h-full z-10 text-center mx-auto'>
                    <div className="flex justify-center">
                        <div className="CustomBadge__popup-image CustomBadge__image h-16 mx-auto">
                            {selectedBadge ? selectedBadge.icon : null}
                        </div>
                    </div>
                    <DialogTitle className='CustomBadge__popup-title mt-6 md:mt-8'>
                        {selectedBadge ? selectedBadge.title : 'Badge'}
                    </DialogTitle>
                    <p className="CustomBadge__popup-text mt-3 ">
                        {selectedBadge ? selectedBadge.description : 'Description goes here.'}
                    </p>
                    <DialogActions>
                        <Button onClick={handleClose} color="secondary" className='CustomBadge__popup-button great-button w-full'>
                            great
                        </Button>
                    </DialogActions>
                </DialogContent>
                {/* <DialogActions>
                    <Button onClick={handleClose} color="secondary">
                        Great
                    </Button>
                </DialogActions> */}
            </Dialog>
        </div>
    );
};

export default BadgeComponent;
