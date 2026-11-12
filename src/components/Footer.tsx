import React from 'react';
import { Phone, Mail, MapPin, MessageSquare, ExternalLink, ShieldCheck, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (slug: string) => void;
  onOpenCookies: () => void;
  onOpenSeoDrawer: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenCookies,
  onOpenSeoDrawer
}) => {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-14 border-b border-slate-800/80">
          {/* Col 1: Brand & Contact Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-white font-bold text-base">
                <span className="text-sky-400">L</span>F
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Landing Factory
              </span>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Landing Factory ist Ihre deutsche Webentwicklung und SEO Agentur. Wir realisieren maßgeschneiderte Unternehmens-Websites und datenbasierte Suchmaschinenoptimierung für nachhaltigen geschäftlichen Erfolg.
            </p>

            {/* Direct Contact Badges */}
            <div className="pt-2 space-y-2.5 text-sm">
              <div className="flex items-center gap-2.5 text-slate-300">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Bürg 20, 94474 Vilshofen, Deutschland</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-300">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <a
                  href="tel:+4917629862291"
                  className="hover:text-white transition-colors"
                >
                  +49 176 29862291
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-slate-300">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <a
                  href="mailto:die@landing-factory.de"
                  className="hover:text-white transition-colors"
                >
                  die@landing-factory.de
                </a>
              </div>
              <div className="pt-2">
                <a
                  href="https://wa.me/4917629862291?text=Hallo%20Herr%20Polatschek,%20ich%20interessiere%20mich%20f%C3%BCr%20ein%20Web-Projekt."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-semibold hover:bg-emerald-900/60 transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Direktkontakt via WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Webentwicklung & Keyword-Seiten */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Webentwicklung
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <button
                  onClick={() => onNavigate('webentwicklung-agentur')}
                  className="hover:text-white transition-colors text-left"
                >
                  Webentwicklung Agentur
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('agentur-fuer-webentwicklung')}
                  className="hover:text-white transition-colors text-left"
                >
                  Agentur für Webentwicklung
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('agentur-webentwicklung')}
                  className="hover:text-white transition-colors text-left"
                >
                  Agentur Webentwicklung
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('webentwickler-agentur')}
                  className="hover:text-white transition-colors text-left"
                >
                  Webentwickler Agentur
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('webdesign-agentur')}
                  className="hover:text-white transition-colors text-left"
                >
                  Webdesign Agentur
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('webentwicklung-und-webdesign')}
                  className="hover:text-white transition-colors text-left"
                >
                  Webentwicklung & Webdesign
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('online-agentur')}
                  className="hover:text-white transition-colors text-left"
                >
                  Online Agentur
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('individuelle-webentwicklung')}
                  className="text-sky-400 hover:text-sky-300 transition-colors text-left font-medium"
                >
                  Individuelle Webentwicklung
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: SEO & Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              SEO & Services
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <button
                  onClick={() => onNavigate('seo-agentur')}
                  className="hover:text-white transition-colors text-left"
                >
                  SEO Agentur
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('agentur-fuer-seo')}
                  className="hover:text-white transition-colors text-left"
                >
                  Agentur für SEO
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('seo-marketing-agentur')}
                  className="hover:text-white transition-colors text-left"
                >
                  SEO Marketing Agentur
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('landingpage-agentur')}
                  className="hover:text-white transition-colors text-left"
                >
                  Landingpage Agentur
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('seo-audit-agentur')}
                  className="hover:text-white transition-colors text-left"
                >
                  SEO Audit Agentur
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('local-seo-agentur')}
                  className="hover:text-white transition-colors text-left"
                >
                  Local SEO Agentur
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('shopify-seo-agentur')}
                  className="hover:text-white transition-colors text-left"
                >
                  Shopify SEO Agentur
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Standorte & Agentur */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Regionale Abdeckung
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <button
                  onClick={() => onNavigate('webentwicklung-agentur-berlin')}
                  className="hover:text-white transition-colors text-left"
                >
                  Agentur Berlin
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('webentwicklung-agentur-muenchen')}
                  className="hover:text-white transition-colors text-left"
                >
                  Agentur München
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('webentwicklung-agentur-koeln')}
                  className="hover:text-white transition-colors text-left"
                >
                  Agentur Köln
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('webentwicklung-agentur-frankfurt')}
                  className="hover:text-white transition-colors text-left"
                >
                  Agentur Frankfurt
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('webentwicklung-agentur-stuttgart')}
                  className="hover:text-white transition-colors text-left"
                >
                  Agentur Stuttgart
                </button>
              </li>
              <li className="pt-2 text-xs text-slate-500">
                Hauptsitz: Vilshofen an der Donau (Niederbayern) · Bundesweite Betreuung
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <span>&copy; {new Date().getFullYear()} Landing Factory · Inh. Werner Polatschek</span>
            <button
              onClick={() => onNavigate('impressum')}
              className="hover:text-slate-300 transition-colors"
            >
              Impressum
            </button>
            <button
              onClick={() => onNavigate('datenschutz')}
              className="hover:text-slate-300 transition-colors"
            >
              Datenschutz
            </button>
            <button
              onClick={onOpenCookies}
              className="hover:text-slate-300 transition-colors"
            >
              Cookie-Einstellungen
            </button>
            <button
              onClick={() => onNavigate('faq')}
              className="hover:text-slate-300 transition-colors"
            >
              FAQ
            </button>
            <a
              href="/sitemap.xml"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-300 transition-colors inline-flex items-center gap-1"
            >
              <span>sitemap.xml</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenSeoDrawer}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
              <span>SEO-Architektur & 21 Seiten Matrix</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
