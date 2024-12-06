import React from "react";
import { Modal, Box } from "@mui/material";
import { Link } from "react-router-dom"

const LeftSideDiamondModel = ({ selectedProductModel, setselectedProductModel }) => {
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
              <h3 className="m-0 leading-none text-2xl font-bold text-black uppercase" tabindex="-1">CHOOSE YOUR SETTING</h3>
            </div>
            <div className="w-full grid grid-cols-1 gap-3 max-w-[8.75rem] mx-auto md:grid-cols-2 md:max-w-none text-center text-black">
              <Link to={"/diamond-list"} className="rounded-lg py-3 px-4 border-borders border bg-customGray-50 md:py-6" href="#" aria-hidden="false">
              <svg className="block w-18 h-18 mx-auto" aria-hidden="true" focusable="false" viewBox="0 0 73 73"><svg viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M42.3777 38.504L36.3777 35.504L40.8777 40.004L42.3777 45.8753V38.504Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M34.0193 24.8277C32.7965 25.5194 31.9712 26.8317 31.9712 28.3368C31.9712 28.406 31.9805 28.473 31.9981 28.5366C26.0761 30.2661 21.75 35.7363 21.75 42.217C21.75 50.087 28.1299 56.467 36 56.467C43.8701 56.467 50.25 50.087 50.25 42.217C50.25 35.7363 45.9238 30.2661 40.0019 28.5366C40.0194 28.473 40.0288 28.406 40.0288 28.3368C40.0288 26.8317 39.2035 25.5194 37.9807 24.8277L46.0598 13.1742L45.1353 12.5332L36.9018 24.4093C36.6119 24.343 36.31 24.308 36 24.308C35.69 24.308 35.3881 24.343 35.0982 24.4093L26.8647 12.5332L25.9402 13.1742L34.0193 24.8277ZM34.8799 26.069L35.5377 27.0179C35.6428 27.1695 35.8155 27.2599 36 27.2599C36.1845 27.2599 36.3572 27.1695 36.4623 27.0179L37.1201 26.069C37.9135 26.4616 38.4713 27.2582 38.5246 28.1899C37.7052 28.0434 36.8615 27.967 36 27.967C35.1385 27.967 34.2948 28.0434 33.4754 28.1899C33.5287 27.2582 34.0865 26.4616 34.8799 26.069ZM35.4375 29.4792C31.2204 29.6622 27.5347 31.8938 25.3506 35.2035L27.1839 36.5056L35.4375 31.7403V29.4792ZM23.25 42.217C23.25 40.0296 23.8008 37.9709 24.7713 36.172L26.5899 37.4636V47.0102L24.551 47.8344C23.7179 46.1397 23.25 44.233 23.25 42.217ZM25.0955 48.8278C27.2404 52.3582 31.0516 54.7644 35.4375 54.9548V52.8224L27.1089 48.0139L25.0955 48.8278ZM46.6424 49.241C44.4574 52.5449 40.7751 54.7719 36.5625 54.9548V52.8224L44.8286 48.05L46.6424 49.241ZM47.2215 48.2754C48.1964 46.4733 48.75 44.4098 48.75 42.217C48.75 40.0296 48.1992 37.9709 47.2287 36.172L45.41 37.4636V47.0859L47.2215 48.2754ZM36.5625 29.4792C40.7796 29.6622 44.4653 31.8938 46.6494 35.2035L44.8161 36.5056L36.5625 31.7404V29.4792ZM27.7149 37.498V47.0648L36 51.8481L44.285 47.0648V37.498L36 32.7146L27.7149 37.498Z" fill="currentColor"></path></svg></svg>
                <div className="text-sm leading-tight mt-1">Pendant</div>
              </Link>
              <Link to={"/diamond-list"} className="rounded-lg py-3 px-4 border-borders border bg-customGray-50 md:py-6" href="#" aria-hidden="false">
                <svg className="block w-18 h-18 mx-auto" aria-hidden="true" focusable="false" viewBox="0 0 48 48"><svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M24 15.5C19.3056 15.5 15.5 19.3056 15.5 24C15.5 28.6944 19.3056 32.5 24 32.5C28.6944 32.5 32.5 28.6944 32.5 24C32.5 19.3056 28.6944 15.5 24 15.5ZM14.5 24C14.5 18.7533 18.7533 14.5 24 14.5C29.2467 14.5 33.5 18.7533 33.5 24C33.5 29.2467 29.2467 33.5 24 33.5C18.7533 33.5 14.5 29.2467 14.5 24Z" fill="black"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M24 16.799L30.2734 20.421V27.6648L24 31.2868L17.7266 27.6648V20.421L24 16.799ZM18.4766 20.854V27.2318L24 30.4207L29.5234 27.2318V20.854L24 17.6651L18.4766 20.854Z" fill="black"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M24.375 15V17.4964H23.625V15H24.375Z" fill="black"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M16.7171 19.1943L18.3188 20.3317L17.8845 20.9432L16.2829 19.8057L16.7171 19.1943Z" fill="black"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M15.8581 27.9508L17.9611 27.1007L18.2422 27.796L16.1392 28.6461L15.8581 27.9508Z" fill="black"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M23.625 33V30.6187H24.375V33H23.625Z" fill="black"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M31.2942 28.8135L29.6925 27.7618L30.1042 27.1349L31.7058 28.1865L31.2942 28.8135Z" fill="black"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M31.7171 19.8057L30.1155 20.9432L29.6812 20.3317L31.2829 19.1943L31.7171 19.8057Z" fill="black"></path><path d="M24.2518 19.5247L28.2518 21.5247V26.4389L27.2518 22.5247L24.2518 19.5247Z" fill="black"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 23C3.94827 23 3.5 23.4483 3.5 24C3.5 24.5517 3.94827 25 4.5 25H14.5V23H4.5ZM2.5 24C2.5 22.896 3.39599 22 4.5 22H15.5V26H4.5C3.39599 26 2.5 25.104 2.5 24Z" fill="black"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M43.5 25C44.0517 25 44.5 24.5517 44.5 24C44.5 23.4483 44.0517 23 43.5 23H33.5V25H43.5ZM45.5 24C45.5 25.104 44.604 26 43.5 26H32.5V22H43.5C44.604 22 45.5 22.896 45.5 24Z" fill="black"></path></svg></svg>
                <div className="text-sm leading-tight mt-1">Engagement Ring</div>
              </Link>
              {/* <Link to={"/diamond-list"} className="rounded-lg py-3 px-4 border-borders border bg-customGray-50 md:py-6" href="#" aria-hidden="false">
                <svg className="block w-14 h-14 mx-auto" aria-hidden="true" focusable="false" viewBox="0 0 36 36">
                  <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.94139 16.0419C5.53661 16.0419 3.58022 14.079 3.58022 11.6669C3.58022 11.4441 3.60199 11.2254 3.63495 11.0097C4.09963 11.1733 4.56248 11.2591 5.0174 11.2591C5.10773 11.2591 5.19807 11.2559 5.2884 11.2494C5.81167 11.2111 6.18196 11.0736 6.54002 10.9401C6.88507 10.8124 7.2106 10.6911 7.67527 10.6521C7.95939 10.6272 8.24636 10.6413 8.53567 10.6882L8.88519 10.3385C8.46466 10.2417 8.04779 10.2021 7.64109 10.237C7.11944 10.2809 6.75079 10.4177 6.39516 10.5495C6.04847 10.6781 5.72133 10.8002 5.25747 10.8343C4.76146 10.8701 4.24723 10.7862 3.72853 10.5978C4.10837 9.10644 5.2477 7.88004 6.77521 7.45462L7.00388 7.39115V4.69991H8.87888V7.39115L9.10756 7.45462C10.1887 7.75532 11.0713 8.46262 11.6358 9.37499H12.3664C11.7774 8.23781 10.763 7.33896 9.50388 6.92239V4.6999H10.0247C10.1972 4.6999 10.3372 4.55992 10.3372 4.3874C10.3372 4.21487 10.1972 4.0749 10.0247 4.0749H9.50388V4.07408H6.37888V4.0749H5.85805C5.68552 4.0749 5.54555 4.21487 5.54555 4.3874C5.54555 4.55992 5.68552 4.6999 5.85805 4.6999H6.37888V6.92239C4.3517 7.59377 2.95522 9.5111 2.95522 11.6669C2.95522 14.424 5.19236 16.6669 7.94138 16.6669C8.74176 16.6669 9.49595 16.4722 10.1669 16.1346L9.66033 15.685C9.13227 15.9133 8.55193 16.0419 7.94138 16.0419H7.94139Z" fill="currentColor"></path>
                    <path d="M15.554 10H10.1076L7.32839 12.7793L12.8285 17.6613L18.3242 12.7875H18.3243L18.3333 12.7793L15.554 10ZM10.3665 10.625H13.3115L14.8327 12.8037L12.7929 16.794L8.23934 12.7523L10.3665 10.625H10.3665ZM13.5903 16.1503L15.3177 12.7712L13.8201 10.625H15.2951L17.4222 12.7521L13.5903 16.1503V16.1503Z" fill="currentColor"></path>
                    <path d="M10.6499 12.7344L11.1764 11.4201L9.75697 12.8396L12.566 15.333L10.6499 12.7344Z" fill="currentColor"></path>
                  </svg>
                </svg>
                <div className="text-sm leading-tight mt-1">Gemstones &amp; Moissanite</div>
              </Link> */}
            </div>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default LeftSideDiamondModel;
