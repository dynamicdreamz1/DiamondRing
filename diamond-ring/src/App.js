import './App.css';
import RingSelector from './pages/EngagementRing/EngagementRing';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';

function App() {
  return (
    <Provider store={store}>
      <RingSelector />
    </Provider>);
}

export default App;

