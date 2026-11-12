import React, { useState, useEffect } from 'react';
import { PAGES_DATA, PageData } from './data/pagesData';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { PageRenderer } from './components/PageRenderer';
import { HomeSections } from './components/HomeSections';
import { ContactModal } from './components/ContactModal';
import { CookieBanner } from './components/CookieBanner';
import { SeoDrawer } from './components/SeoDrawer';
import { MessageSquare, Phone, ArrowUp, AlertTriangle } from 'lucide-react';

export default function App() {
  // Extract slug from URL path (e.g. "/webentwicklung-agentur" -> "webentwicklung-agentur")
  const getInitialSlug = () => {
    const path = window.location.pathname.replace(/^\/+|\/+$/g, '');
    return path;
  };

  const [currentSlug, setCurrentSlug] = useState<string>(getInitialSlug());
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [contactService, setContactService] = useState('Webentwicklung & SEO');
  const [seoDrawerOpen, setSeoDrawerOpen] = useState(false);
  const [cookieModalOpen, setCookieModalOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Synchronize state with browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      setCurrentSlug(getInitialSlug());
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Track scroll for back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateTo = (slug: string) => {
    const cleanSlug = slug.replace(/^\/+|\/+$/g, '');
    setCurrentSlug(cleanSlug);
    const targetUrl = cleanSlug ? `/${cleanSlug}` : '/';
    if (window.location.pathname !== targetUrl) {
      window.history.pushState(null, '', targetUrl);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenContact = (service?: string) => {
    if (service) setContactService(service);
    setContactModalOpen(true);
  };

  const currentPage: PageData | undefined = PAGES_DATA[currentSlug];

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans">
      {/* Top Navigation */}
      <Header
        currentSlug={currentSlug}
        onNavigate={navigateTo}
        onOpenContact={() => handleOpenContact()}
        onOpenSeoDrawer={() => setSeoDrawerOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentPage ? (
          <div>
            {/* Render the standard structured content for this page */}
            <PageRenderer
              page={currentPage}
              onNavigate={navigateTo}
              onOpenContact={handleOpenContact}
              onOpenSeoDrawer={() => setSeoDrawerOpen(true)}
            />

            {/* If it's the Homepage, also render the rich interactive capabilities, 4-step process, and locations */}
            {currentSlug === '' && (
              <HomeSections
                onNavigate={navigateTo}
                onOpenContact={handleOpenContact}
                onOpenSeoDrawer={() => setSeoDrawerOpen(true)}
              />
            )}
          </div>
        ) : (
          /* Custom 404 Error Page */
          <div className="py-24 px-4 text-center max-w-xl mx-auto space-y-6">
            <div className="w-16 h-16 bg-amber-100 text-amber-700 rounded-2xl flex items-center justify-center mx-auto">
              <AlertTriangle className="w-8 h-8" />
            </div>
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              404 – Seite nicht gefunden
            </h1>
            <p className="text-sm text-slate-600 leading-relaxed">
              Die von Ihnen aufgerufene Adresse existiert leider nicht oder wurde verschoben. Nutzen Sie unsere Navigation oder wählen Sie eine der 21 Core SEO Seiten.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
              <button
                onClick={() => navigateTo('')}
                className="px-6 py-2.5 bg-slate-900 text-white text-sm font-semibold rounded-lg hover:bg-slate-800 transition-colors"
              >
                Zur Startseite
              </button>
              <button
                onClick={() => setSeoDrawerOpen(true)}
                className="px-6 py-2.5 bg-slate-100 text-slate-800 text-sm font-semibold rounded-lg hover:bg-slate-200 transition-colors"
              >
                Alle 21 Seiten ansehen
              </button>
            </div>
          </div>
        )}
      </main>

      {/* Global Footer */}
      <Footer
        onNavigate={navigateTo}
        onOpenCookies={() => setCookieModalOpen(true)}
        onOpenSeoDrawer={() => setSeoDrawerOpen(true)}
      />

      {/* Floating Action Buttons (WhatsApp & Scroll to top) */}
      <aside aria-label="Schnellzugriff" className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
        {showScrollTop && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-10 h-10 bg-white border border-slate-200 text-slate-700 rounded-full shadow-md hover:bg-slate-50 transition-all flex items-center justify-center"
            aria-label="Nach oben scrollen"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}

        <a
          href="https://wa.me/4917629862291?text=Hallo%20Herr%20Polatschek,%20ich%20interessiere%20mich%20f%C3%BCr%20ein%20Web-Projekt."
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 px-4 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all"
          aria-label="WhatsApp Direktkontakt mit Werner Polatschek"
        >
          <MessageSquare className="w-5 h-5 fill-white" />
          <span className="text-xs font-bold tracking-tight whitespace-nowrap hidden sm:inline-block">
            WhatsApp Anfragen
          </span>
        </a>
      </aside>

      {/* Contact Inquiry Modal */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        preselectedService={contactService}
      />

      {/* SEO Architecture & 21-Pages Documentation Drawer */}
      <SeoDrawer
        isOpen={seoDrawerOpen}
        onClose={() => setSeoDrawerOpen(false)}
        currentSlug={currentSlug}
        onNavigate={navigateTo}
      />

      {/* DSGVO Cookie Consent Banner */}
      <CookieBanner
        forceOpenModal={cookieModalOpen}
        onCloseModal={() => setCookieModalOpen(false)}
        onNavigate={navigateTo}
      />
    </div>
  );
}
