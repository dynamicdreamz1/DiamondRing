import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RingSelector from '../pages/EngagementRing/EngagementRing';
import RingDetails from '../pages/EngagementRingDetail/EngagementRingDetail'; // Create this component for detailed view
import DiamondList from '../pages/DiamondList/DiamondList'; // Create this component for detailed view
import DiamondDetail from '../pages/DiamondDetail/DiamondDetail'; // Create this component for detailed view
import CompleteProduct from '../pages/CompleteProduct/CompleteProduct'; // Create this component for detailed view
import RingDetailInformation from '../pages/RingDetailInformation/RingDetailInformation'; // Create this component for detailed view

const RoutesPage = () => {
    return (
        <Router>
            <Routes>
                <Route path="ring-select" element={<RingSelector />} />
                <Route path="/ring-select/:productId" element={<RingDetails />} />
                <Route path="/diamond-list" element={<DiamondList />} />
                <Route path="/diamond-list/:diamondId" element={<DiamondDetail />} />
                <Route path="/complete-product" element={<CompleteProduct />} />
                <Route path="/ring-select/ring-detail" element={<RingDetailInformation />} />
                <Route path="*" element={<RingSelector />} />
            </Routes>
        </Router>
    )
}

export default RoutesPage