import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import PortfolioSection from './components/PortfolioSection';
import PipelineSection from './components/PipelineSection';
import CrmTiersSection from './components/CrmTiersSection';
import PricingCalculator from './components/PricingCalculator';
import FloatingSocialDock from './components/FloatingSocialDock';
import DriveUploadModal from './components/DriveUploadModal';
import PortfolioModal from './components/PortfolioModal';
import OrderModal from './components/OrderModal';
import Footer from './components/Footer';

export default function App() {
  const [selectedPortfolioItem, setSelectedPortfolioItem] = useState(null);
  const [isDriveModalOpen, setIsDriveModalOpen] = useState(false);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen text-slate-100 selection:bg-[#8C72FF] selection:text-white">
      {/* Dynamic Aurora Ambient Background */}
      <div className="aurora-bg"></div>

      {/* Navigation Bar */}
      <Navbar onOpenOrderModal={() => setIsOrderModalOpen(true)} />

      {/* Main Content Sections */}
      <main>
        {/* Section 1: Hero Section */}
        <HeroSection onOpenOrderModal={() => setIsOrderModalOpen(true)} />

        {/* Section 2: Portfolio Showcase */}
        <PortfolioSection onSelectItem={(item) => setSelectedPortfolioItem(item)} />

        {/* Section 3: Workflow Pipeline */}
        <PipelineSection onOpenDriveModal={() => setIsDriveModalOpen(true)} />

        {/* Section 4: Gamified CRM Member Tiers (Bronze - Diamond) */}
        <CrmTiersSection onOpenOrderModal={() => setIsOrderModalOpen(true)} />

        {/* Bonus Section: Pricing Calculator & Estimator */}
        <PricingCalculator onOpenDriveModal={() => setIsDriveModalOpen(true)} />
      </main>

      {/* Brand Footer */}
      <Footer onOpenOrderModal={() => setIsOrderModalOpen(true)} />

      {/* Section 5: Floating Multi-Social Action Hub */}
      <FloatingSocialDock 
        onOpenDriveModal={() => setIsDriveModalOpen(true)}
        onOpenOrderModal={() => setIsOrderModalOpen(true)}
      />

      {/* Interactive Modals */}
      <DriveUploadModal 
        isOpen={isDriveModalOpen} 
        onClose={() => setIsDriveModalOpen(false)} 
      />

      <PortfolioModal 
        item={selectedPortfolioItem} 
        onClose={() => setSelectedPortfolioItem(null)} 
        onOpenOrderModal={() => {
          setSelectedPortfolioItem(null);
          setIsOrderModalOpen(true);
        }}
      />

      <OrderModal 
        isOpen={isOrderModalOpen} 
        onClose={() => setIsOrderModalOpen(false)} 
      />
    </div>
  );
}
