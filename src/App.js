import React from 'react';
import {
  Routes,
  Route
} from 'react-router-dom';

import IndexPage from './pages/Index.js';
import PricingPage from './pages/Pricing.js';
import SignupPage from './pages/Signup.js';

function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
         
      <Route path="/pricing" element={<PricingPage />} />
         
      <Route path="/signup" element={<SignupPage />} />
    </Routes>
  );
}

export default App;
