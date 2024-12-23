import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

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

const DiamondSelector = () => {
  const [value, setValue] = useState(0);
  const caratSizes = [1.0, 1.5, 2.0, 2.5, 3.0];
  const specs = {
    carat: "3.0ct",
    color: "D - F",
    clarity: "VS+"
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const StoneContent = () => (
    <div className="p-4">
      <div className="flex gap-2 mb-4 flex-wrap">
        {caratSizes.map((size) => (
          <button
            key={size}
            className={`px-4 py-1 rounded-lg border ${
              size === 3.0 ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
            }`}
          >
            {size}
          </button>
        ))}
        <button className="px-4 py-1 rounded-lg border border-gray-200">
          See full inventory
        </button>
      </div>

      <div className="mt-6">
        <h3 className="text-sm text-gray-500 text-center mb-4">CENTER STONE QUALITY</h3>
        <div className="flex justify-between">
          <div className="text-center">
            <div className="font-semibold">Carat</div>
            <div className="text-gray-600">{specs.carat}</div>
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

      <button className="w-full text-center text-blue-500 mt-4">
        choose your own center stone
      </button>
    </div>
  );

  return (
    <div className="max-w-lg mx-auto p-4 border rounded-lg shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Quick Checkout</h2>
        <span className="cursor-pointer text-gray-500 hover:text-gray-700">X</span>
      </div>
      
      <p className="text-sm text-gray-600 mb-4">
        Choose your center stone's origin & size and let our experts handpick the perfect diamond for you
      </p>

      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs 
            value={value} 
            onChange={handleChange}
            aria-label="diamond type tabs"
            variant="fullWidth"
            sx={{
              '& .MuiTab-root': {
                textTransform: 'none',
                minWidth: 'auto',
                padding: '8px',
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
                <div className={`px-4 py-2 rounded-lg ${value === 0 ? 'border-2 border-blue-500 bg-blue-50' : 'border'}`}>
                  Lab Diamond
                </div>
              } 
            />
            <Tab 
              label={
                <div className={`px-4 py-2 rounded-lg border`}>
                  Moissanite
                </div>
              }
            />
            <Tab 
              label={
                <div className={`px-4 py-2 rounded-lg border`}>
                  Natural Diamonds
                </div>
              }
            />
          </Tabs>
        </Box>
        
        <TabPanel value={value} index={0}>
          <StoneContent />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <StoneContent />
        </TabPanel>
        <TabPanel value={value} index={2}>
          {/* Empty content as requested */}
        </TabPanel>
      </Box>
    </div>
  );
};

export default DiamondSelector;