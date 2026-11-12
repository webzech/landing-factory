import React from 'react';
import {
  Code2,
  Search,
  Layout,
  MapPin,
  ShoppingBag,
  FileCheck,
  CheckCircle2,
  ArrowRight,
  Shield,
  Zap,
  Users
} from 'lucide-react';

interface HomeSectionsProps {
  onNavigate: (slug: string) => void;
  onOpenContact: (service?: string) => void;
  onOpenSeoDrawer: () => void;
}

export const HomeSections: React.FC<HomeSectionsProps> = ({
  onNavigate,
  onOpenContact,
  onOpenSeoDrawer
}) => {
  return (
    <div className="space-y-20 py-12">
      {/* 1. DIE 5 KERNLEISTUNGEN IM DETAIL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-600">
            Spezialisierte Agenturleistungen
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
            Maßgeschneiderte Webentwicklung & gezieltes SEO
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Keine Massenware, keine austauschbaren Vorlagen. Wir bieten dedizierte Kernbereiche für nachhaltigen Kundenzuwachs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: Individuelle Webentwicklung */}
          <div className="p-6 rounded-2xl border border-slate-200 bg-white hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-slate-900 text-sky-400 flex items-center justify-center">
                <Code2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">
                Individuelle Webentwicklung
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Maßgeschneiderte Websites und Portale in schlankem HTML5, CSS und TypeScript. Keine Baukasten-Einschränkungen, maximale Render-Geschwindigkeit.
              </p>
            </div>
            <button
              onClick={() => onNavigate('individuelle-webentwicklung')}
              className="text-xs font-bold text-slate-900 hover:text-sky-600 flex items-center gap-1 pt-2 border-t border-slate-100"
            >
              <span>Mehr zur Webentwicklung</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Card 2: Landingpage Agentur */}
          <div className="p-6 rounded-2xl border border-slate-200 bg-white hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-slate-900 text-emerald-400 flex items-center justify-center">
                <Layout className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">
                Landingpage Entwicklung
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Verkaufspsychologisch aufgebaute Zielseiten mit glasklaren Handlungsaufforderungen. Generieren Sie maximale Anfragen aus Werbekampagnen.
              </p>
            </div>
            <button
              onClick={() => onNavigate('landingpage-agentur')}
              className="text-xs font-bold text-slate-900 hover:text-sky-600 flex items-center gap-1 pt-2 border-t border-slate-100"
            >
              <span>Landingpages entdecken</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Card 3: SEO Audit Agentur */}
          <div className="p-6 rounded-2xl border border-slate-200 bg-white hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-slate-900 text-amber-400 flex items-center justify-center">
                <FileCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">
                Technischer SEO Audit
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Wir durchleuchten Ihre bestehende Website auf Code-Fehler, Crawling-Blockaden, Core Web Vitals Bremsen und Keyword-Kannibalisierung.
              </p>
            </div>
            <button
              onClick={() => onNavigate('seo-audit-agentur')}
              className="text-xs font-bold text-slate-900 hover:text-sky-600 flex items-center gap-1 pt-2 border-t border-slate-100"
            >
              <span>SEO Audit anfordern</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Card 4: Local SEO & Google Maps */}
          <div className="p-6 rounded-2xl border border-slate-200 bg-white hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-slate-900 text-sky-400 flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">
                Local SEO & Google Maps
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Optimierung Ihres Google Unternehmensprofils und regionale On-Page-Signale für Top-Platzierungen im Google Local Pack vor Ort.
              </p>
            </div>
            <button
              onClick={() => onNavigate('local-seo-agentur')}
              className="text-xs font-bold text-slate-900 hover:text-sky-600 flex items-center gap-1 pt-2 border-t border-slate-100"
            >
              <span>Local SEO ansehen</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Card 5: Shopify SEO Agentur */}
          <div className="p-6 rounded-2xl border border-slate-200 bg-white hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-slate-900 text-violet-400 flex items-center justify-center">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">
                Shopify SEO & E-Commerce
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Lösung typischer Shopify-Probleme: Saubere Canonicals, optimierte Kategorieseiten und Rich Snippets für Google Shopping.
              </p>
            </div>
            <button
              onClick={() => onNavigate('shopify-seo-agentur')}
              className="text-xs font-bold text-slate-900 hover:text-sky-600 flex items-center gap-1 pt-2 border-t border-slate-100"
            >
              <span>Shopify SEO entdecken</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Card 6: 21 Seiten SEO-Architektur */}
          <div className="p-6 rounded-2xl border border-sky-300 bg-sky-50/50 hover:bg-sky-50 hover:shadow-md transition-all flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-sky-600 text-white flex items-center justify-center">
                <Search className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">
                21 Seiten SEO-Architektur
              </h3>
              <p className="text-xs text-slate-700 leading-relaxed">
                Erkunden Sie unsere komplette thematische Keyword-Architektur mit 10 Keyword-Seiten, 5 Standorten und 5 Spezial-Services.
              </p>
            </div>
            <button
              onClick={onOpenSeoDrawer}
              className="text-xs font-bold text-sky-900 hover:text-sky-700 flex items-center gap-1 pt-2 border-t border-sky-200"
            >
              <span>Architektur-Matrix öffnen</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* 2. ARBEITSPROZESS (4 PHASEN) */}
      <section className="bg-slate-50 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Klarer Ablauf ohne Überraschungen
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
              Unser 4-Schritte-Arbeitsprozess
            </h2>
            <p className="text-sm text-slate-600">
              Vom ersten unverbindlichen Briefing bis zum erfolgreichen Livegang und den ersten Google-Rankings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3">
              <div className="text-xs font-mono font-bold text-sky-600 uppercase">
                Phase 01
              </div>
              <h3 className="text-base font-bold text-slate-900">
                Analyse & Strategie
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Wir prüfen Ihre Wettbewerber, ermitteln die tatsächlichen Suchintentionen Ihrer Kunden und legen ein verlässliches Keyword-Mapping fest.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3">
              <div className="text-xs font-mono font-bold text-sky-600 uppercase">
                Phase 02
              </div>
              <h3 className="text-base font-bold text-slate-900">
                Design & UX-Konzept
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Entwicklung moderner Layouts mit klarer visueller Hierarchie und verkaufspsychologischer Nutzerführung zur Maximierung der Anfragen.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3">
              <div className="text-xs font-mono font-bold text-sky-600 uppercase">
                Phase 03
              </div>
              <h3 className="text-base font-bold text-slate-900">
                Schlanker Code & SEO
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Handwerkliche Programmierung in standardkonformem HTML5, CSS und TypeScript. Keine überflüssigen Plugins, perfekte Core Web Vitals.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3">
              <div className="text-xs font-mono font-bold text-sky-600 uppercase">
                Phase 04
              </div>
              <h3 className="text-base font-bold text-slate-900">
                Testing & Go-Live
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Cross-Browser QA, Prüfung der mobilen Darstellung, Validierung aller Formulare, Search Console Setup und reibungslose Übergabe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. REGIONALE ABDECKUNG */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-600">
              Deutschlandweiter Service
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
              Regionale Wirtschaftszentren & Remote-Betreuung
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Hauptsitz in Vilshofen (Niederbayern) – deutschlandweit im Einsatz für anspruchsvolle Unternehmen.
            </p>
          </div>
          <button
            onClick={onOpenSeoDrawer}
            className="text-xs font-semibold text-slate-700 hover:text-slate-900 flex items-center gap-1 self-start md:self-auto"
          >
            <span>Alle Standorte im Detail</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {[
            { city: 'Berlin', slug: 'webentwicklung-agentur-berlin', desc: 'Hauptstadtmarkt & Startups' },
            { city: 'München', slug: 'webentwicklung-agentur-muenchen', desc: 'Bayerischer Mittelstand' },
            { city: 'Köln', slug: 'webentwicklung-agentur-koeln', desc: 'Rheinland & Handelsmetropole' },
            { city: 'Frankfurt', slug: 'webentwicklung-agentur-frankfurt', desc: 'Finanzplatz & B2B-Zentrum' },
            { city: 'Stuttgart', slug: 'webentwicklung-agentur-stuttgart', desc: 'Technologie & Engineering' }
          ].map((loc, idx) => (
            <button
              key={idx}
              onClick={() => onNavigate(loc.slug)}
              className="p-4 rounded-xl border border-slate-200 bg-white hover:border-slate-400 hover:bg-slate-50/60 transition-all text-left group"
            >
              <div className="flex items-center gap-1.5 font-bold text-sm text-slate-900 group-hover:text-sky-600 transition-colors">
                <MapPin className="w-3.5 h-3.5 text-sky-600" />
                <span>{loc.city}</span>
              </div>
              <div className="text-[11px] text-slate-500 mt-1">
                {loc.desc}
              </div>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
};
