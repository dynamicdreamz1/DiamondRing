import './App.css';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RingSelector from './pages/EngagementRing/EngagementRing';
import RingDetails from './pages/EngagementRingDetail/EngagementRingDetail'; // Create this component for detailed view
import DiamondList from './pages/DiamondList/DiamondList'; // Create this component for detailed view
import DiamondDetail from './pages/DiamondDetail/DiamondDetail'; // Create this component for detailed view



function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {/* Default Route */}
          <Route path="ring-select" element={<RingSelector />} />
          {/* Route with ID */}
          <Route path="/ring-select/:productId" element={<RingDetails />} />
          <Route path="/diamond-list" element={<DiamondList />} />
          <Route path="/diamond-list/diamond-detail-page" element={<DiamondDetail />} />

          {/* Redirect to default route */}
          {/* <Route path="*" element={<RingSelector />} /> */}
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
