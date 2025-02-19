import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import OnboardingForm from './components/OnboardingForm';
import ThankYouPage from './components/ThankYouPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <ToastContainer position="top-right" />
        <Routes>
          <Route path="/" element={<OnboardingForm />} />
          <Route path="/thank-you" element={<ThankYouPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
