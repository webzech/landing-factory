import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  MapPin,
  Phone,
  MessageSquare,
  Sparkles,
  Layers,
  ShieldCheck,
  Zap,
  BarChart3,
  Code2,
  Search,
  ExternalLink
} from 'lucide-react';
import { PageData, PAGES_DATA } from '../data/pagesData';

// Image paths from batch generation
const HERO_IMG = '/src/assets/images/hero_agency_workspace_1794507386707.jpg';
const WEB_DEV_IMG = '/src/assets/images/service_web_development_1794507387979.jpg';
const SEO_IMG = '/src/assets/images/service_seo_analytics_1794507388957.jpg';
const REGIONAL_IMG = '/src/assets/images/regional_germany_business_1794507389170.jpg';

interface PageRendererProps {
  page: PageData;
  onNavigate: (slug: string) => void;
  onOpenContact: (service?: string) => void;
  onOpenSeoDrawer: () => void;
}

export const PageRenderer: React.FC<PageRendererProps> = ({
  page,
  onNavigate,
  onOpenContact,
  onOpenSeoDrawer
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Synchronize document head metadata with the current page
  useEffect(() => {
    document.title = page.metaTitle;

    const descMeta = document.querySelector('meta[name="description"]');
    if (descMeta) {
      descMeta.setAttribute('content', page.metaDescription);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', page.metaTitle);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', page.metaDescription);

    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute(
        'href',
        `https://www.landing-factory.de/${page.slug}`
      );
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [page]);

  // Determine appropriate context image for page category
  const getImageForPage = () => {
    if (page.category === 'location') return REGIONAL_IMG;
    if (page.category === 'service' && page.slug.includes('seo')) return SEO_IMG;
    if (page.category === 'service') return WEB_DEV_IMG;
    if (page.primaryKeyword.includes('seo')) return SEO_IMG;
    if (page.primaryKeyword.includes('web')) return WEB_DEV_IMG;
    return HERO_IMG;
  };

  const heroImage = getImageForPage();

  return (
    <article className="min-h-screen bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden border-b border-slate-100 bg-linear-to-b from-slate-50/50 via-white to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Value Proposition & H1 */}
            <div className="lg:col-span-7 space-y-5">
              {/* Kicker */}
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                <span className="text-slate-900 font-bold uppercase tracking-wider">
                  Landing Factory
                </span>
                <span aria-hidden="true">·</span>
                <span>{page.kicker}</span>
              </div>

              {/* H1 Heading */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-[1.15] text-balance">
                {page.h1}
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                {page.heroSubtitle}
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  onClick={() => onOpenContact(page.primaryKeyword)}
                  className="px-6 py-3.5 bg-slate-900 text-white text-sm font-semibold rounded-xl hover:bg-slate-800 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                >
                  <span>Projekt jetzt anfragen</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href="https://wa.me/4917629862291?text=Hallo%20Herr%20Polatschek,%20ich%20interessiere%20mich%20f%C3%BCr%20ein%20Web-Projekt."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3.5 bg-emerald-50 text-emerald-800 border border-emerald-200 text-sm font-semibold rounded-xl hover:bg-emerald-100 transition-colors flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-600" />
                  <span>WhatsApp: +49 176 29862291</span>
                </a>
              </div>

              {/* Trust Signal Strip */}
              <div className="pt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-500 border-t border-slate-200/80">
                <div className="flex items-center gap-1.5 font-medium text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-sky-600" />
                  <span>Inhaber Werner Polatschek</span>
                </div>
                <div className="flex items-center gap-1.5 font-medium text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-sky-600" />
                  <span>100% DSGVO & White-Hat SEO</span>
                </div>
                <div className="flex items-center gap-1.5 font-medium text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-sky-600" />
                  <span>Standort Vilshofen (Niederbayern)</span>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Visual Asset with Fallback */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-100 aspect-16/10">
                <img
                  src={heroImage}
                  alt={`${page.primaryKeyword} – Professionelle digitale Agenturleistungen`}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  loading="eager"
                  onError={(e) => {
                    // Fallback container in case of path issue
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/60 via-transparent to-transparent flex flex-col justify-end p-5 text-white">
                  <span className="text-[11px] font-semibold text-sky-300 uppercase tracking-wider">
                    {page.category.toUpperCase()}
                  </span>
                  <p className="text-sm font-bold mt-0.5">
                    {page.primaryKeyword}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. LOCAL NOTE (Only on location-based pages) */}
      {page.localNote && (
        <section className="bg-amber-50/70 border-b border-amber-200/60 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-start gap-3 text-xs text-amber-900 leading-relaxed">
            <MapPin className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold">Transparenzhinweis zum Standort: </span>
              {page.localNote}
            </div>
          </div>
        </section>
      )}

      {/* 3. BUSINESS METRICS & KPI STRIP */}
      <section className="py-10 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-sky-400 tabular-nums">
                &lt; 0.8s
              </div>
              <div className="text-xs text-slate-400 font-medium">
                Blitzschnelle Ladezeit (LCP)
              </div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-white tabular-nums">
                100%
              </div>
              <div className="text-xs text-slate-400 font-medium">
                Maßgeschneiderter Code
              </div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-sky-400 tabular-nums">
                21
              </div>
              <div className="text-xs text-slate-400 font-medium">
                Spezialisierte SEO-Zielseiten
              </div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-white tabular-nums">
                24h
              </div>
              <div className="text-xs text-slate-400 font-medium">
                Reaktionszeit bei Anfragen
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PROBLEM & SOLUTION SECTION */}
      {page.problemSolution && page.problemSolution.length > 0 && (
        <section className="py-16 md:py-24 bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="max-w-2xl space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-600">
                Praxisherausforderungen & Lösungen
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                Warum Standard-Ansätze scheitern – und was wir anders machen
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Viele Unternehmen investieren viel Budget in Webseiten und SEO, ohne je messbare Leads zu sehen. Wir beseitigen die typischen Ursachen.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {page.problemSolution.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 p-6 bg-slate-50/60 hover:bg-slate-50 transition-colors space-y-4"
                >
                  {/* Problem */}
                  <div className="space-y-1.5 pb-4 border-b border-slate-200">
                    <span className="text-[11px] font-bold text-red-600 uppercase tracking-wide">
                      Häufiges Problem
                    </span>
                    <h3 className="text-base font-bold text-slate-900">
                      {item.problemTitle}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.problemDesc}
                    </p>
                  </div>

                  {/* Solution */}
                  <div className="space-y-1.5 pt-1">
                    <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wide">
                      Landing Factory Lösung
                    </span>
                    <h4 className="text-sm font-bold text-slate-900">
                      {item.solutionTitle}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.solutionDesc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. CORE FEATURES & CAPABILITIES */}
      <section className="py-16 md:py-24 bg-slate-50/60 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-600">
              Leistungsspektrum & Spezifikationen
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
              {page.featuresTitle}
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Konkrete Standards und handwerkliche Umsetzungsschritte für Ihren nachhaltigen Wettbewerbsvorteil.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {page.features.map((feat, idx) => (
              <div
                key={idx}
                className="bg-white p-7 rounded-2xl border border-slate-200 shadow-xs hover:border-slate-300 transition-colors space-y-4"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-bold text-slate-900">
                    {feat.title}
                  </h3>
                  <span className="text-xs font-bold text-slate-400 font-mono">
                    0{idx + 1}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed whitespace-pre-line">
                  {feat.description}
                </p>

                {feat.bulletPoints.length > 0 && (
                  <ul className="pt-2 space-y-2 text-xs text-slate-700 border-t border-slate-100">
                    {feat.bulletPoints.map((bp, bpIdx) => (
                      <li key={bpIdx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                        <span>{bp}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAQ ACCORDION */}
      {page.faqs && page.faqs.length > 0 && (
        <section className="py-16 md:py-20 bg-white border-b border-slate-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="text-center space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-600">
                Häufige Fragen
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                Fragen & Antworten zu {page.primaryKeyword}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
                Ehrliche Antworten auf die wichtigsten Fragen unserer Kunden.
              </p>
            </div>

            <div className="space-y-3">
              {page.faqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className="border border-slate-200 rounded-xl overflow-hidden transition-colors"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="w-full text-left px-5 py-4 bg-slate-50/50 hover:bg-slate-50 flex items-center justify-between gap-4 font-semibold text-sm text-slate-900 transition-colors"
                    >
                      <span>{faq.question}</span>
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4 text-slate-500 shrink-0" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-slate-500 shrink-0" />
                      )}
                    </button>
                    {isOpen && (
                      <div className="px-5 py-4 bg-white text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* 7. CONTEXTUAL INTERNAL LINKING */}
      {page.relatedPages && page.relatedPages.length > 0 && (
        <section className="py-14 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Interne Verlinkung & Themencluster
                </span>
                <h3 className="text-lg font-bold text-slate-900">
                  Verwandte Leistungen & Spezialisierungen
                </h3>
              </div>
              <button
                onClick={onOpenSeoDrawer}
                className="text-xs font-semibold text-sky-700 hover:text-sky-900 flex items-center gap-1 self-start sm:self-auto"
              >
                <span>Alle 21 Seiten im Index anzeigen</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {page.relatedPages.map((rp, idx) => (
                <button
                  key={idx}
                  onClick={() => onNavigate(rp.slug)}
                  className="text-left p-4 bg-white border border-slate-200 rounded-xl hover:border-slate-400 hover:shadow-xs transition-all group"
                >
                  <div className="flex items-center justify-between text-xs font-bold text-slate-900 group-hover:text-sky-700 transition-colors">
                    <span>{rp.title}</span>
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1 line-clamp-2">
                    {rp.desc}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 8. BOTTOM CONVERSION ACTION BLOCK */}
      <section className="py-16 md:py-20 bg-slate-950 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-bold text-sky-400 uppercase tracking-widest">
            Jetzt den Grundstein legen
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-balance">
            Bereit für eine Website, die echte Kundenanfragen generiert?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Sprechen Sie direkt mit Inhaber Werner Polatschek. Wir analysieren Ihr Vorhaben und erstellen Ihnen ein transparentes, unverbindliches Festpreisangebot.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row justify-center items-center gap-3">
            <button
              onClick={() => onOpenContact(page.primaryKeyword)}
              className="w-full sm:w-auto px-7 py-3.5 bg-white text-slate-950 font-bold text-sm rounded-xl hover:bg-slate-100 transition-colors shadow-lg"
            >
              Projekt unverbindlich anfragen
            </button>
            <a
              href="https://wa.me/4917629862291?text=Hallo%20Herr%20Polatschek,%20ich%20interessiere%20mich%20f%C3%BCr%20ein%20Web-Projekt."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 bg-emerald-600 text-white font-bold text-sm rounded-xl hover:bg-emerald-500 transition-colors inline-flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Chat (+49 176 29862291)</span>
            </a>
          </div>

          <div className="pt-4 text-xs text-slate-500">
            Bürg 20, 94474 Vilshofen · E-Mail: die@landing-factory.de · Tel: +49 176 29862291
          </div>
        </div>
      </section>
    </article>
  );
};
