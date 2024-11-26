import React from "react";
import { Modal, Box, Typography, Button } from "@mui/material";

const LeftSideModal = ({ selectedProductModel, setselectedProductModel }) => {
  const handleClose = () => setselectedProductModel(false);

  return (
    <>
      <Modal
        open={selectedProductModel}
        onClose={handleClose}
        aria-labelledby="left-side-modal-title"
        aria-describedby="left-side-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
            minWidth: 300,
          }}
        >
          {/* Modal Content */}
          <Typography id="left-side-modal-title" variant="h6">
            Left-Side Popup
          </Typography>
          <Typography id="left-side-modal-description" variant="body1" sx={{ mt: 2 }}>
            This is the content inside the popup.
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleClose}
            sx={{ mt: 3 }}
          >
            Close
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default LeftSideModal;
