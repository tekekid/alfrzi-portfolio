import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { PageWrapper } from './components/layout/PageWrapper';
import { CustomCursor } from './components/common/CustomCursor';
import { CommandPaletteModal } from './components/common/CommandPaletteModal';
import { SystemStatusModal } from './components/common/SystemStatusModal';
import { EasterEggModal } from './components/common/EasterEggModal';
import { ScrollToTop } from './components/common/ScrollToTop';
import { useCommandPalette } from './hooks/useCommandPalette';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { SkillsPage } from './pages/SkillsPage';
import { ContactPage } from './pages/ContactPage';

function AppContent() {
  const { isOpen: isCmdOpen, open: openCmd, close: closeCmd } = useCommandPalette();
  const [isSystemStatusOpen, setIsSystemStatusOpen] = useState(false);
  const [isEasterEggOpen, setIsEasterEggOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col relative transition-colors duration-200">
      {/* Background ambient lighting and subtle technical grid */}
      <div className="fixed inset-0 bg-tech-grid opacity-60 pointer-events-none -z-10" />
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Subtle Custom Cursor for Desktop */}
      <CustomCursor />

      {/* Global Navigation */}
      <Navbar
        onOpenCommandPalette={openCmd}
        onOpenSystemStatus={() => setIsSystemStatusOpen(true)}
      />

      {/* Main Routed Content with Page Transitions */}
      <main className="flex-1">
        <Routes>
          <Route
            path="/"
            element={
              <PageWrapper>
                <HomePage />
              </PageWrapper>
            }
          />
          <Route
            path="/about"
            element={
              <PageWrapper>
                <AboutPage />
              </PageWrapper>
            }
          />
          <Route
            path="/projects"
            element={
              <PageWrapper>
                <ProjectsPage />
              </PageWrapper>
            }
          />
          <Route
            path="/projects/:id"
            element={
              <PageWrapper>
                <ProjectDetailPage />
              </PageWrapper>
            }
          />
          <Route
            path="/skills"
            element={
              <PageWrapper>
                <SkillsPage />
              </PageWrapper>
            }
          />
          <Route
            path="/contact"
            element={
              <PageWrapper>
                <ContactPage />
              </PageWrapper>
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* Global Minimal Footer */}
      <Footer
        onOpenSystemStatus={() => setIsSystemStatusOpen(true)}
        onOpenEasterEgg={() => setIsEasterEggOpen(true)}
      />

      {/* Modals & Special Features */}
      <CommandPaletteModal
        isOpen={isCmdOpen}
        onClose={closeCmd}
        onTriggerEasterEgg={() => setIsEasterEggOpen(true)}
      />

      <SystemStatusModal
        isOpen={isSystemStatusOpen}
        onClose={() => setIsSystemStatusOpen(false)}
      />

      <EasterEggModal
        isOpen={isEasterEggOpen}
        onClose={() => setIsEasterEggOpen(false)}
      />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop />
        <AppContent />
      </BrowserRouter>
    </ThemeProvider>
  );
}
