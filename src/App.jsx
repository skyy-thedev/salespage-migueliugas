import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Hero } from './components/Hero';
import { AlertSection } from './components/AlertSection';
import { ConnectionSection } from './components/ConnectionSection';
import { LearningSection } from './components/LearningSection';
import { AudienceSection } from './components/AudienceSection';
import { InstructorsSection } from './components/InstructorsSection';
import { FormatSection } from './components/FormatSection';
import { InvestmentSection } from './components/InvestmentSection';
import { LeadForm } from './components/LeadForm';
import { FinalSection } from './components/FinalSection';
import ThankYouPage from './pages/ThankYouPage';
import GlobalStyle from './styles/GlobalStyle';

// Landing Page Component
const LandingPage = () => (
  <>
    <Hero />
    <AlertSection />
    <ConnectionSection />
    <LearningSection />
    <AudienceSection />
    <InstructorsSection />
    <FormatSection />
    <InvestmentSection />
    <LeadForm />
    <FinalSection />
  </>
);

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/obrigado" element={<ThankYouPage />} />
      </Routes>
    </Router>
  );
}

export default App;
