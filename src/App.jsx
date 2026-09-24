import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import DynamicAuroraBg from './components/DynamicAuroraBg';
import CursorSpotlight from './components/CursorSpotlight';
import HeroSection from './components/HeroSection';
import BeforeAfterSlider from './components/BeforeAfterSlider';
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
    <ThemeProvider>
      <div className="relative min-h-screen dark:text-slate-100 text-slate-900 selection:bg-[#8C72FF] selection:text-white transition-colors duration-300">
        {/* Dynamic Animated Aurora Background Mesh (PRD Compliant) */}
        <DynamicAuroraBg />

        {/* 60fps Smooth Multi-Color Cursor Spotlight Glow */}
        <CursorSpotlight />

        {/* Navigation Bar */}
        <Navbar onOpenOrderModal={() => setIsOrderModalOpen(true)} />

        {/* Main Content Sections */}
        <main>
          {/* Section 1: Hero Section */}
          <HeroSection onOpenOrderModal={() => setIsOrderModalOpen(true)} />

          {/* Section 1.5: Interactive Before/After Split Comparison */}
          <div className="px-4 sm:px-6 lg:px-8">
            <BeforeAfterSlider />
          </div>

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
    </ThemeProvider>
  );
}
