import React from 'react';
import '../styles/App.scss';
import { Provider } from 'react-redux';
import 'styles/index.css';
import store from 'lib/store';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from 'lib/AppRoutes';
function App() {
  return (
    <>
      <React.StrictMode>
        <Provider store={store}>
          <Router>
            <AppRoutes />
          </Router>
        </Provider>
      </React.StrictMode>
    </>
  );
}

export default App;
