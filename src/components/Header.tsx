import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, Phone, MessageSquare, Layers, ArrowRight } from 'lucide-react';

interface HeaderProps {
  currentSlug: string;
  onNavigate: (slug: string) => void;
  onOpenContact: () => void;
  onOpenSeoDrawer: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentSlug,
  onNavigate,
  onOpenContact,
  onOpenSeoDrawer
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [locationsDropdownOpen, setLocationsDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const servicesRef = useRef<HTMLDivElement>(null);
  const locationsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesDropdownOpen(false);
      }
      if (locationsRef.current && !locationsRef.current.contains(e.target as Node)) {
        setLocationsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavClick = (slug: string) => {
    onNavigate(slug);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setLocationsDropdownOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs'
          : 'bg-white border-b border-slate-100'
      }`}
    >
      {/* Top Bar Contract: 3 zones separated by gap-8 (Brand Wordmark — Nav Links — 1 Primary Action) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => handleNavClick('')}
            className="flex items-center gap-2.5 text-left group focus:outline-hidden"
            aria-label="Landing Factory Startseite"
          >
            <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-white font-bold text-lg tracking-tight group-hover:bg-slate-800 transition-colors shadow-xs">
              <span className="text-sky-400">L</span>F
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-slate-900 whitespace-nowrap">
                Landing Factory
              </span>
              <span className="text-[11px] font-medium text-slate-500 tracking-wide uppercase">
                Web & SEO Agentur
              </span>
            </div>
          </button>
        </div>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600">
          <button
            onClick={() => handleNavClick('')}
            className={`whitespace-nowrap transition-colors hover:text-slate-900 ${
              currentSlug === '' ? 'text-slate-900 font-semibold' : ''
            }`}
          >
            Startseite
          </button>

          {/* Leistungen Dropdown */}
          <div className="relative" ref={servicesRef}>
            <button
              onClick={() => {
                setServicesDropdownOpen(!servicesDropdownOpen);
                setLocationsDropdownOpen(false);
              }}
              className="flex items-center gap-1 whitespace-nowrap hover:text-slate-900 transition-colors py-2 focus:outline-hidden"
              aria-expanded={servicesDropdownOpen}
            >
              <span>Leistungen</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-150 ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {servicesDropdownOpen && (
              <div className="absolute top-full left-0 w-72 bg-white rounded-xl shadow-xl border border-slate-200/80 p-2 mt-1 animate-in fade-in slide-in-from-top-1 duration-150 z-50">
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-3 py-1.5">
                  5 Kernleistungen
                </div>
                <button
                  onClick={() => handleNavClick('individuelle-webentwicklung')}
                  className="w-full text-left px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors"
                >
                  <div className="font-medium text-slate-900">Individuelle Webentwicklung</div>
                  <div className="text-xs text-slate-500">Maßgeschneiderter Code ohne Baukasten</div>
                </button>
                <button
                  onClick={() => handleNavClick('landingpage-agentur')}
                  className="w-full text-left px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors"
                >
                  <div className="font-medium text-slate-900">Landingpage Agentur</div>
                  <div className="text-xs text-slate-500">Verkaufspsychologische Zielseiten</div>
                </button>
                <button
                  onClick={() => handleNavClick('seo-audit-agentur')}
                  className="w-full text-left px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors"
                >
                  <div className="font-medium text-slate-900">SEO Audit Agentur</div>
                  <div className="text-xs text-slate-500">Tiefgehende Website- & Rankinganalyse</div>
                </button>
                <button
                  onClick={() => handleNavClick('local-seo-agentur')}
                  className="w-full text-left px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors"
                >
                  <div className="font-medium text-slate-900">Local SEO Agentur</div>
                  <div className="text-xs text-slate-500">Google Maps & regionale Sichtbarkeit</div>
                </button>
                <button
                  onClick={() => handleNavClick('shopify-seo-agentur')}
                  className="w-full text-left px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors"
                >
                  <div className="font-medium text-slate-900">Shopify SEO Agentur</div>
                  <div className="text-xs text-slate-500">E-Commerce & Shop-Optimierung</div>
                </button>
              </div>
            )}
          </div>

          <button
            onClick={() => handleNavClick('webentwicklung-agentur')}
            className={`whitespace-nowrap transition-colors hover:text-slate-900 ${
              currentSlug === 'webentwicklung-agentur' ? 'text-slate-900 font-semibold' : ''
            }`}
          >
            Webentwicklung
          </button>

          <button
            onClick={() => handleNavClick('seo-agentur')}
            className={`whitespace-nowrap transition-colors hover:text-slate-900 ${
              currentSlug === 'seo-agentur' ? 'text-slate-900 font-semibold' : ''
            }`}
          >
            SEO
          </button>

          {/* Standorte Dropdown */}
          <div className="relative" ref={locationsRef}>
            <button
              onClick={() => {
                setLocationsDropdownOpen(!locationsDropdownOpen);
                setServicesDropdownOpen(false);
              }}
              className="flex items-center gap-1 whitespace-nowrap hover:text-slate-900 transition-colors py-2 focus:outline-hidden"
              aria-expanded={locationsDropdownOpen}
            >
              <span>Standorte</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-150 ${locationsDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {locationsDropdownOpen && (
              <div className="absolute top-full left-0 w-64 bg-white rounded-xl shadow-xl border border-slate-200/80 p-2 mt-1 animate-in fade-in slide-in-from-top-1 duration-150 z-50">
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-3 py-1.5">
                  Deutschlandweite Betreuung
                </div>
                <button
                  onClick={() => handleNavClick('webentwicklung-agentur-berlin')}
                  className="w-full text-left px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors"
                >
                  Berlin
                </button>
                <button
                  onClick={() => handleNavClick('webentwicklung-agentur-muenchen')}
                  className="w-full text-left px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors"
                >
                  München
                </button>
                <button
                  onClick={() => handleNavClick('webentwicklung-agentur-koeln')}
                  className="w-full text-left px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors"
                >
                  Köln
                </button>
                <button
                  onClick={() => handleNavClick('webentwicklung-agentur-frankfurt')}
                  className="w-full text-left px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors"
                >
                  Frankfurt am Main
                </button>
                <button
                  onClick={() => handleNavClick('webentwicklung-agentur-stuttgart')}
                  className="w-full text-left px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors"
                >
                  Stuttgart
                </button>
              </div>
            )}
          </div>

          <button
            onClick={() => handleNavClick('ueber-uns')}
            className={`whitespace-nowrap transition-colors hover:text-slate-900 ${
              currentSlug === 'ueber-uns' ? 'text-slate-900 font-semibold' : ''
            }`}
          >
            Über uns
          </button>

          <button
            onClick={() => handleNavClick('kontakt')}
            className={`whitespace-nowrap transition-colors hover:text-slate-900 ${
              currentSlug === 'kontakt' ? 'text-slate-900 font-semibold' : ''
            }`}
          >
            Kontakt
          </button>
        </nav>

        {/* Zone 3: 1 Primary Action + SEO Architecture Inspector Button */}
        <div className="flex items-center gap-3 shrink-0">
          {/* SEO Architecture matrix button */}
          <button
            onClick={onOpenSeoDrawer}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors whitespace-nowrap"
            title="SEO-Architektur & 21 Seiten Matrix öffnen"
          >
            <Layers className="w-3.5 h-3.5 text-sky-600" />
            <span>21 SEO-Seiten Matrix</span>
          </button>

          {/* Primary CTA */}
          <button
            onClick={onOpenContact}
            className="px-4 py-2 text-sm font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-all shadow-xs hover:shadow-md whitespace-nowrap"
          >
            Projekt anfragen
          </button>

          {/* Mobile hamburger toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            aria-label="Menü öffnen"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="flex flex-col space-y-1">
            <button
              onClick={() => handleNavClick('')}
              className={`text-left px-3 py-2 rounded-lg text-base font-medium ${
                currentSlug === '' ? 'bg-slate-100 text-slate-900 font-semibold' : 'text-slate-700'
              }`}
            >
              Startseite
            </button>
            <button
              onClick={() => handleNavClick('webentwicklung-agentur')}
              className="text-left px-3 py-2 rounded-lg text-base font-medium text-slate-700 hover:bg-slate-50"
            >
              Webentwicklung
            </button>
            <button
              onClick={() => handleNavClick('seo-agentur')}
              className="text-left px-3 py-2 rounded-lg text-base font-medium text-slate-700 hover:bg-slate-50"
            >
              SEO & Sichtbarkeit
            </button>
            <button
              onClick={() => handleNavClick('landingpage-agentur')}
              className="text-left px-3 py-2 rounded-lg text-base font-medium text-slate-700 hover:bg-slate-50"
            >
              Landingpages
            </button>
            <button
              onClick={() => handleNavClick('individuelle-webentwicklung')}
              className="text-left px-3 py-2 rounded-lg text-base font-medium text-slate-700 hover:bg-slate-50"
            >
              Individuelle Webentwicklung
            </button>
            <button
              onClick={() => handleNavClick('local-seo-agentur')}
              className="text-left px-3 py-2 rounded-lg text-base font-medium text-slate-700 hover:bg-slate-50"
            >
              Local SEO & Google Maps
            </button>
            <button
              onClick={() => handleNavClick('shopify-seo-agentur')}
              className="text-left px-3 py-2 rounded-lg text-base font-medium text-slate-700 hover:bg-slate-50"
            >
              Shopify SEO
            </button>
            <button
              onClick={() => handleNavClick('seo-audit-agentur')}
              className="text-left px-3 py-2 rounded-lg text-base font-medium text-slate-700 hover:bg-slate-50"
            >
              SEO Audit
            </button>
            <button
              onClick={() => handleNavClick('ueber-uns')}
              className="text-left px-3 py-2 rounded-lg text-base font-medium text-slate-700 hover:bg-slate-50"
            >
              Über uns
            </button>
            <button
              onClick={() => handleNavClick('kontakt')}
              className="text-left px-3 py-2 rounded-lg text-base font-medium text-slate-700 hover:bg-slate-50"
            >
              Kontakt
            </button>
          </div>

          <div className="pt-3 border-t border-slate-200 flex flex-col gap-2">
            <button
              onClick={() => {
                onOpenSeoDrawer();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-700 bg-slate-100 rounded-lg"
            >
              <Layers className="w-4 h-4 text-sky-600" />
              <span>21 Core SEO Seiten anzeigen</span>
            </button>
            <a
              href="https://wa.me/4917629862291?text=Hallo%20Herr%20Polatschek,%20ich%20interessiere%20mich%20f%C3%BCr%20ein%20Web-Projekt."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 rounded-lg"
            >
              <MessageSquare className="w-4 h-4 text-emerald-600" />
              <span>Direkt via WhatsApp (+49 176 29862291)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
