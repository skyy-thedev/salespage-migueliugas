import React from 'react';
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
import GlobalStyle from './styles/GlobalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
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
}

export default App;
