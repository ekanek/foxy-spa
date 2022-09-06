import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from 'components/App';
import reportWebVitals from './reportWebVitals';
import 'styles/index.css';
import store from 'lib/store';
import ProductImagePage from 'components/UI/molecules/ProductImagePage';
import ProductReviewPage from 'components/UI/molecules/ProductReviewPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <div className="container">
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/productImage" element={<ProductImagePage />} />
            <Route path="/AllReview" element={<ProductReviewPage />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
