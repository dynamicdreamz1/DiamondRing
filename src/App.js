import './App.css';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Routes from './Routes/Routes';

const App = () => {

  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
