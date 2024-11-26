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
                <div className="max-h-full w-full relative overflow-x-hidden pointer-events-auto rounded-2xl p-10 pt-6 max-w-xs  md:max-w-[31.25rem] md:pt-12 md:px-8 md:pb-14  bg-white hiddenScroll" data-scroll-lock-scrollable="true">
                  <button type="button" variant="contained" color="secondary" onClick={handleClose} className="bg-transparent absolute top-0 right-0 z-10 border-none outline-none w-10 h-10 text-black" aria-label="right">
                      <svg className="block w-full h-full" aria-hidden="true" focusable="false" viewBox="0 0 36 36">
                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g>
                              <path d="M12.6201 12.62L23.3799 23.3798" stroke="currentColor" stroke-miterlimit="10"></path>
                              <path d="M12.6201 23.3798L23.3799 12.62" stroke="currentColor" stroke-miterlimit="10"></path>
                            </g>
                        </svg>
                      </svg>
                  </button>
                  <div className="text-center mb-7.5 md:mb-8">
                      <div className="text-1.5lg leading-tight text-black mb-1.5">Before we continue</div>
                      <h3 className="m-0 leading-none text-2xl font-bold text-black uppercase" tabindex="-1">Choose your center stone</h3>
                  </div>
                  <div className="w-full grid grid-cols-1 gap-3 max-w-[8.75rem] mx-auto md:grid-cols-3 md:max-w-none text-center text-black">
                      <a className="rounded-lg py-3 px-4 border-borders border bg-customGray-50 md:py-6" href="#" aria-hidden="false">
                        <svg className="block w-14 h-14 mx-auto" aria-hidden="true" focusable="false" viewBox="0 0 36 36">
                            <svg viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M25.983 24.5301C26.085 24.7867 26.3757 24.912 26.6323 24.81C26.8889 24.708 27.0142 24.4173 26.9122 24.1607L25.983 24.5301ZM24.5 19.7131H24V19.8088L24.0354 19.8978L24.5 19.7131ZM26.9122 24.1607C26.4453 22.9861 26.1874 22.4047 25.9308 21.8265C25.6772 21.2549 25.425 20.6864 24.9646 19.5284L24.0354 19.8978C24.5023 21.0724 24.7602 21.6538 25.0168 22.232C25.2704 22.8036 25.5226 23.372 25.983 24.5301L26.9122 24.1607ZM25 19.7131C25 17.3572 26.91 15.4473 29.2658 15.4473V14.4473C26.3577 14.4473 24 16.805 24 19.7131H25ZM29.2658 15.4473H34.0386V14.4473H29.2658V15.4473Z" fill="currentColor"></path>
                              <path d="M24.5 38C21.83 38 19.2199 37.2082 16.9998 35.7248C14.7797 34.2414 13.0494 32.133 12.0276 29.6662C11.0058 27.1994 10.7385 24.485 11.2594 21.8663C11.7803 19.2475 13.066 16.8421 14.9541 14.9541C16.8421 13.066 19.2475 11.7803 21.8663 11.2594C24.485 10.7385 27.1994 11.0058 29.6662 12.0276C32.133 13.0494 34.2414 14.7797 35.7248 16.9998C37.2082 19.2199 38 21.83 38 24.5" stroke="currentColor" stroke-linecap="round"></path>
                              <path d="M11.1831 23.4982C11.6013 24.3773 12.2242 24.6743 13.0136 24.645C14.0429 24.6068 14.6526 23.5467 14.8624 23.1818C15.1475 22.6863 15.1447 22.3984 15.4779 21.0282C15.6644 20.2613 15.8379 19.6414 15.9548 19.2397C16.8954 19.0807 17.836 18.9218 18.7766 18.7628C19.8681 18.3723 20.6771 17.6257 20.6843 16.8551C20.6925 15.9855 19.6769 15.3763 18.6972 14.7883C17.7897 14.2438 16.949 13.9958 16.4108 13.8743" stroke="currentColor" stroke-miterlimit="10"></path>
                              <path d="M12.8403 31.0123C12.9249 30.5361 13.1116 29.8018 13.5706 29.0168C13.9339 28.3957 14.3533 27.6754 14.8424 27.7052C15.4122 27.7399 15.7774 28.7744 16.0827 29.6388C16.4145 30.5785 16.5296 31.4091 16.5712 31.9976C16.5831 33.0886 16.5952 34.1799 16.6071 35.2709" stroke="currentColor" stroke-miterlimit="10"></path>
                              <path d="M21.3711 31.6668L26.3115 26.7114H36.7596L41.7 31.6668L31.5306 40.7114L21.3711 31.6668Z" stroke="currentColor" stroke-miterlimit="10"></path>
                              <path d="M29.6836 34.6301L26.3887 31.6976L28.3073 29.7737" stroke="currentColor" stroke-miterlimit="10" stroke-linecap="round"></path>
                              <path d="M31.5312 40.5869L36.0564 31.7108L32.5867 26.7266" stroke="currentColor" stroke-miterlimit="10"></path>
                            </svg>
                        </svg>
                        <div className="text-sm leading-tight mt-1">Natural Diamond</div>
                      </a>
                      <a className="rounded-lg py-3 px-4 border-borders border bg-customGray-50 md:py-6" href="#" aria-hidden="false">
                        <svg className="block w-14 h-14 mx-auto" aria-hidden="true" focusable="false" viewBox="0 0 36 36">
                            <svg viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M21.3711 31.6668L26.3115 26.7114H36.7596L41.7 31.6668L31.5306 40.7114L21.3711 31.6668Z" stroke="currentColor" stroke-miterlimit="10"></path>
                              <path d="M29.6836 34.6301L26.3887 31.6976L28.3073 29.7737" stroke="currentColor" stroke-miterlimit="10" stroke-linecap="round"></path>
                              <path d="M31.5312 40.5869L36.0564 31.7108L32.5867 26.7266" stroke="currentColor" stroke-miterlimit="10"></path>
                              <path d="M19.8633 11.6667H29.2485" stroke="currentColor" stroke-miterlimit="10" stroke-linecap="round"></path>
                              <path d="M27.3716 18.563V11.6667" stroke="currentColor" stroke-miterlimit="10"></path>
                              <path d="M21.7402 11.6667V18.563" stroke="currentColor" stroke-miterlimit="10"></path>
                              <path d="M21.74 18.563L14.1189 33.805C13.3084 35.4261 14.4872 37.3334 16.2997 37.3334H23.7698M27.3711 18.563L30.1811 24.3413" stroke="currentColor" stroke-miterlimit="10" stroke-linecap="round"></path>
                              <path d="M21.7861 28.4482C22.0623 28.4482 22.2861 28.2244 22.2861 27.9482C22.2861 27.6721 22.0623 27.4482 21.7861 27.4482L21.7861 28.4482ZM19.8882 27.9483L19.8882 28.4483H19.8882L19.8882 27.9483ZM16.8042 28.4483L19.8882 28.4483L19.8882 27.4483L16.8042 27.4483L16.8042 28.4483ZM19.8882 28.4483L21.7861 28.4482L21.7861 27.4482L19.8882 27.4483L19.8882 28.4483Z" fill="currentColor"></path>
                            </svg>
                        </svg>
                        <div className="text-sm leading-tight mt-1">Lab Diamond</div>
                      </a>
                      <a className="rounded-lg py-3 px-4 border-borders border bg-customGray-50 md:py-6" href="#" aria-hidden="false">
                        <svg className="block w-14 h-14 mx-auto" aria-hidden="true" focusable="false" viewBox="0 0 36 36">
                            <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M7.94139 16.0419C5.53661 16.0419 3.58022 14.079 3.58022 11.6669C3.58022 11.4441 3.60199 11.2254 3.63495 11.0097C4.09963 11.1733 4.56248 11.2591 5.0174 11.2591C5.10773 11.2591 5.19807 11.2559 5.2884 11.2494C5.81167 11.2111 6.18196 11.0736 6.54002 10.9401C6.88507 10.8124 7.2106 10.6911 7.67527 10.6521C7.95939 10.6272 8.24636 10.6413 8.53567 10.6882L8.88519 10.3385C8.46466 10.2417 8.04779 10.2021 7.64109 10.237C7.11944 10.2809 6.75079 10.4177 6.39516 10.5495C6.04847 10.6781 5.72133 10.8002 5.25747 10.8343C4.76146 10.8701 4.24723 10.7862 3.72853 10.5978C4.10837 9.10644 5.2477 7.88004 6.77521 7.45462L7.00388 7.39115V4.69991H8.87888V7.39115L9.10756 7.45462C10.1887 7.75532 11.0713 8.46262 11.6358 9.37499H12.3664C11.7774 8.23781 10.763 7.33896 9.50388 6.92239V4.6999H10.0247C10.1972 4.6999 10.3372 4.55992 10.3372 4.3874C10.3372 4.21487 10.1972 4.0749 10.0247 4.0749H9.50388V4.07408H6.37888V4.0749H5.85805C5.68552 4.0749 5.54555 4.21487 5.54555 4.3874C5.54555 4.55992 5.68552 4.6999 5.85805 4.6999H6.37888V6.92239C4.3517 7.59377 2.95522 9.5111 2.95522 11.6669C2.95522 14.424 5.19236 16.6669 7.94138 16.6669C8.74176 16.6669 9.49595 16.4722 10.1669 16.1346L9.66033 15.685C9.13227 15.9133 8.55193 16.0419 7.94138 16.0419H7.94139Z" fill="currentColor"></path>
                              <path d="M15.554 10H10.1076L7.32839 12.7793L12.8285 17.6613L18.3242 12.7875H18.3243L18.3333 12.7793L15.554 10ZM10.3665 10.625H13.3115L14.8327 12.8037L12.7929 16.794L8.23934 12.7523L10.3665 10.625H10.3665ZM13.5903 16.1503L15.3177 12.7712L13.8201 10.625H15.2951L17.4222 12.7521L13.5903 16.1503V16.1503Z" fill="currentColor"></path>
                              <path d="M10.6499 12.7344L11.1764 11.4201L9.75697 12.8396L12.566 15.333L10.6499 12.7344Z" fill="currentColor"></path>
                            </svg>
                        </svg>
                        <div className="text-sm leading-tight mt-1">Gemstones &amp; Moissanite</div>
                      </a>
                  </div>
                </div>
        </Box>
      </Modal>
    </>
  );
};

export default LeftSideModal;
