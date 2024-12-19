import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import RingSelector from '../pages/EngagementRing/EngagementRing';
import RingDetails from '../pages/EngagementRingDetail/EngagementRingDetail';
import DiamondList from '../pages/DiamondList/DiamondList';
import DiamondDetail from '../pages/DiamondDetail/DiamondDetail';
import CompleteProduct from '../pages/CompleteProduct/CompleteProduct';
import RingDetailInformation from '../pages/RingDetailInformation/RingDetailInformation';

const RoutesPage = () => {
    return (
        <Router>
            <Routes>
                {/* Redirect root to ring-management */}
                <Route path="/" element={<Navigate to="/ring-management" replace />} />
                
                {/* All ring management related routes */}
                <Route path="/ring-management">
                    {/* Ring selection and details */}
                    <Route index element={<RingSelector />} />
                    <Route path="ring-select" element={<RingSelector />} />
                    <Route path="ring-select/:productId" element={<RingDetails />} />
                    <Route path="ring-select/ring-detail" element={<RingDetailInformation />} />
                    
                    {/* Diamond selection and details */}
                    <Route path="diamond-list" element={<DiamondList />} />
                    <Route path="diamond-list/:diamondId" element={<DiamondDetail />} />
                    
                    {/* Complete product view */}
                    <Route path="complete-product" element={<CompleteProduct />} />
                </Route>

                {/* Catch all redirect to ring management */}
                <Route path="*" element={<Navigate to="/ring-management" replace />} />
            </Routes>
        </Router>
    );
};

export default RoutesPage;