import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useSelector } from 'react-redux';

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
};

const DiamondSelector = ({ handleAddRingClick }) => {
  const [value, setValue] = useState(0);
  const [selectSize, setSelectSize] = useState(3.0);
  const { product } = useSelector((state) => state.singleProduct);


  const caratSizes = [1.0, 1.5, 2.0, 2.5, 3.0];
  const specs = {
    carat: "3.0ct",
    color: "D - F",
    clarity: "VS+"
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSelectSize = (size) => {
    setSelectSize(size);
  };

  const StoneContent = () => (
    <div className="p-0">
      <div className="flex gap-2 mb-4 flex-wrap">
        {caratSizes.map((size) => (
          <button
            key={size}
            onClick={() => handleSelectSize(size)}
            className={`px-4 py-1 rounded-lg border ${size === selectSize ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
              }`}
          >
            {size}
          </button>
        ))}
        <button onClick={() => handleAddRingClick(product)} className="px-4 py-1 rounded-lg border border-gray-200">
          See full inventory
        </button>
      </div>

      <div className="mt-6">
        <h3 className="text-sm text-gray-500 text-center mb-4 center-quality-heading">
          <span className='text-customGray-300 uppercase text-1.25xs leading-tight bg-white p-2 inline-block relative'>CENTER STONE QUALITY</span>
        </h3>
        <div className="flex justify-between">
          <div className="text-center">
            <div className="font-semibold">Carat</div>
            <div className="text-gray-600">{selectSize}</div>
          </div>
          <div className="text-center">
            <div className="font-semibold">Color</div>
            <div className="text-gray-600">{specs.color}</div>
          </div>
          <div className="text-center">
            <div className="font-semibold">Clarity</div>
            <div className="text-gray-600">{specs.clarity}</div>
          </div>
        </div>
      </div>

      <button onClick={() => handleAddRingClick(product)} className="w-full text-center text-blue-500 mt-4 text-1.5sm leading-tight underline text-center text-customGray-500 cursor-pointer">
        choose your own center stone
      </button>
    </div>
  );

  return (
    <div className="max-w-lg mx-auto p-4 border border-customGray-25 accordionsummary-sec rounded-lg shadow-sm mt-10">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <div className="flex justify-between items-center mb-1">
            <h2 className="text-lg font-semibold">Quick Checkout</h2>
            {/* <span className="cursor-pointer text-gray-500 hover:text-gray-700">X</span> */}
          </div>
          <p className="text-sm text-gray-600">
            Choose your center stone's origin & size and let our experts handpick the perfect diamond for you
          </p>
        </AccordionSummary>
        <AccordionDetails className='mt-3'>
          <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="diamond type tabs"
                variant="fullWidth"
                className='quick-check-out-tab'
                sx={{
                  '& .MuiTab-root': {
                    textTransform: 'none',
                    minWidth: 'auto',
                    padding: '0px',
                    margin: '0 4px',
                  },
                  '& .Mui-selected': {
                    backgroundColor: '#ebf5ff',
                    borderRadius: '8px',
                    borderColor: '#3b82f6',
                  }
                }}
              >
                <Tab
                  label={
                    <div
                      className={`px-4 py-2 rounded-lg ${value === 0 ? 'border border-gray-300' : 'deactive-tab'
                        }`}
                    >
                      Lab Diamond
                    </div>
                  }
                />
                <Tab
                  label={
                    <div
                      className={`px-4 py-2 rounded-lg ${value === 1 ? 'border border-gray-300' : 'deactive-tab'
                        }`}
                    >
                      Moissanite
                    </div>
                  }
                />
                <Tab
                  label={
                    <div
                      className={`px-4 py-2 rounded-lg ${value === 2 ? 'border border-gray-300' : 'deactive-tab'
                        }`}
                    >
                      Natural Diamonds
                    </div>
                  }
                />

              </Tabs>
            </Box>

            <div className='tab-panel-main'>

              <TabPanel value={value} index={0}>
                <StoneContent />
              </TabPanel>
              <TabPanel value={value} index={1}>
                <StoneContent />
              </TabPanel>
              <TabPanel value={value} index={2}>
                <button onClick={() => handleAddRingClick(product)} className="w-full text-center text-blue-500 mt-4 text-1.5sm leading-tight underline text-center text-customGray-500 cursor-pointer">
                  *Natural diamond needs to be specifically selected by you
                </button>
              </TabPanel>
            </div>
          </Box>
        </AccordionDetails>
      </Accordion>

    </div>
  );
};

export default DiamondSelector;