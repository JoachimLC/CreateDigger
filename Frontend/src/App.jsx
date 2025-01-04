import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import LandingPage from './pages/LandingPage';
import CreateCrates from './pages/CreateCrates';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/create-crates" element={<CreateCrates />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
