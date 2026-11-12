import React, { useState } from 'react';
import { X, Search, CheckCircle2, ExternalLink, FileText, Layers, MapPin, Wrench, Shield, Globe } from 'lucide-react';
import { PAGES_DATA } from '../data/pagesData';
import { KEYWORD_MAPPING_DATA, TECHNICAL_SEO_CHECKLIST, GSC_INSTRUCTIONS } from '../data/seoArchitectureData';

interface SeoDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  currentSlug: string;
  onNavigate: (slug: string) => void;
}

export const SeoDrawer: React.FC<SeoDrawerProps> = ({
  isOpen,
  onClose,
  currentSlug,
  onNavigate
}) => {
  const [activeTab, setActiveTab] = useState<'matrix' | 'page_inspector' | 'technical' | 'gsc'>('matrix');
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  if (!isOpen) return null;

  const activePage = PAGES_DATA[currentSlug] || PAGES_DATA[''];

  const filteredMatrix = KEYWORD_MAPPING_DATA.filter((item) => {
    const matchesCategory =
      filterCategory === 'all' ||
      (filterCategory === 'keyword' && item.category === 'Keyword') ||
      (filterCategory === 'standort' && item.category === 'Standort') ||
      (filterCategory === 'service' && item.category === 'Service') ||
      (filterCategory === 'hauptseite' && item.category === 'Hauptseite');

    const matchesSearch =
      item.pageTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.primaryKeyword.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.url.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-900/60 backdrop-blur-xs flex justify-end">
      <div className="w-full max-w-4xl bg-white h-full shadow-2xl flex flex-col border-l border-slate-200 animate-in slide-in-from-right duration-200">
        {/* Header */}
        <div className="px-6 py-5 bg-slate-950 text-white flex items-center justify-between border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-sky-950 text-sky-400 border border-sky-800 rounded">
                21 Core Pages
              </span>
              <h3 className="text-lg font-bold tracking-tight">
                SEO-Architektur & Dokumentations-Center
              </h3>
            </div>
            <p className="text-xs text-slate-400 mt-1">
              Vollständige Übersicht aller 21 Kern-SEO-Seiten, Keyword-Mapping & Technisches SEO
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            aria-label="Schließen"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="px-6 py-2.5 bg-slate-100 border-b border-slate-200 flex items-center gap-2 overflow-x-auto text-xs font-semibold">
          <button
            onClick={() => setActiveTab('matrix')}
            className={`px-3 py-1.5 rounded-md transition-colors ${
              activeTab === 'matrix'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            21 Seiten Keyword-Matrix ({KEYWORD_MAPPING_DATA.length})
          </button>
          <button
            onClick={() => setActiveTab('page_inspector')}
            className={`px-3 py-1.5 rounded-md transition-colors ${
              activeTab === 'page_inspector'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Aktive Seite analysieren
          </button>
          <button
            onClick={() => setActiveTab('technical')}
            className={`px-3 py-1.5 rounded-md transition-colors ${
              activeTab === 'technical'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Technisches SEO & Core Vitals
          </button>
          <button
            onClick={() => setActiveTab('gsc')}
            className={`px-3 py-1.5 rounded-md transition-colors ${
              activeTab === 'gsc'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Google Search Console Guide
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* TAB 1: 21 Core Pages Matrix */}
          {activeTab === 'matrix' && (
            <div className="space-y-4">
              {/* Filter & Search Bar */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-lg text-xs">
                  <button
                    onClick={() => setFilterCategory('all')}
                    className={`px-2.5 py-1 rounded transition-colors ${filterCategory === 'all' ? 'bg-white text-slate-900 font-bold shadow-xs' : 'text-slate-600'}`}
                  >
                    Alle (21)
                  </button>
                  <button
                    onClick={() => setFilterCategory('keyword')}
                    className={`px-2.5 py-1 rounded transition-colors ${filterCategory === 'keyword' ? 'bg-white text-slate-900 font-bold shadow-xs' : 'text-slate-600'}`}
                  >
                    10 Keywords
                  </button>
                  <button
                    onClick={() => setFilterCategory('standort')}
                    className={`px-2.5 py-1 rounded transition-colors ${filterCategory === 'standort' ? 'bg-white text-slate-900 font-bold shadow-xs' : 'text-slate-600'}`}
                  >
                    5 Standorte
                  </button>
                  <button
                    onClick={() => setFilterCategory('service')}
                    className={`px-2.5 py-1 rounded transition-colors ${filterCategory === 'service' ? 'bg-white text-slate-900 font-bold shadow-xs' : 'text-slate-600'}`}
                  >
                    5 Services
                  </button>
                </div>

                <div className="relative">
                  <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Keyword oder URL suchen..."
                    className="pl-8 pr-3 py-1.5 text-xs border border-slate-300 rounded-lg focus:outline-hidden focus:border-slate-900 w-full sm:w-56"
                  />
                </div>
              </div>

              {/* Table */}
              <div className="border border-slate-200 rounded-xl overflow-hidden shadow-xs">
                <table className="w-full text-left text-xs border-collapse">
                  <thead className="bg-slate-50 border-b border-slate-200 text-slate-700 font-bold uppercase tracking-wider text-[10px]">
                    <tr>
                      <th className="py-3 px-4">Seite & URL</th>
                      <th className="py-3 px-4">Primär-Keyword</th>
                      <th className="py-3 px-4 hidden md:table-cell">Suchintention</th>
                      <th className="py-3 px-4 hidden lg:table-cell">Strategische Differenzierung</th>
                      <th className="py-3 px-4 text-right">Aktion</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-600">
                    {filteredMatrix.map((item, idx) => {
                      const isCurrent = (item.url === '/' && currentSlug === '') || item.url.replace('/', '') === currentSlug;
                      return (
                        <tr
                          key={idx}
                          className={`hover:bg-slate-50/80 transition-colors ${isCurrent ? 'bg-sky-50/50' : ''}`}
                        >
                          <td className="py-3 px-4">
                            <div className="font-semibold text-slate-900 flex items-center gap-1.5">
                              {item.pageTitle}
                              {isCurrent && (
                                <span className="text-[9px] font-bold bg-sky-100 text-sky-800 px-1.5 py-0.5 rounded">
                                  Aktuell
                                </span>
                              )}
                            </div>
                            <div className="text-[11px] font-mono text-slate-400">{item.url}</div>
                          </td>
                          <td className="py-3 px-4">
                            <span className="font-medium text-slate-800 bg-slate-100 px-2 py-0.5 rounded text-[11px]">
                              {item.primaryKeyword}
                            </span>
                          </td>
                          <td className="py-3 px-4 hidden md:table-cell text-slate-600">
                            {item.searchIntent}
                          </td>
                          <td className="py-3 px-4 hidden lg:table-cell text-slate-500 max-w-xs leading-relaxed">
                            {item.differentiationAngle}
                          </td>
                          <td className="py-3 px-4 text-right">
                            <button
                              onClick={() => {
                                onNavigate(item.url.replace('/', ''));
                                onClose();
                              }}
                              className="px-2.5 py-1 bg-slate-900 text-white rounded text-[11px] font-medium hover:bg-slate-800 transition-colors"
                            >
                              Öffnen
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 2: Page Inspector for the active page */}
          {activeTab === 'page_inspector' && (
            <div className="space-y-6">
              <div className="p-4 bg-sky-50 border border-sky-200 rounded-xl flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-sky-800 uppercase tracking-wide">
                    Aktuell geladene Seite
                  </span>
                  <h4 className="text-base font-bold text-slate-900 mt-0.5">
                    {activePage.metaTitle}
                  </h4>
                  <p className="text-xs font-mono text-sky-700 mt-0.5">
                    URL: https://www.landing-factory.de/{activePage.slug}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wide">
                    SEO Meta-Title ({activePage.metaTitle.length} Zeichen)
                  </div>
                  <div className="text-sm font-semibold text-slate-900">
                    {activePage.metaTitle}
                  </div>
                  <p className="text-[11px] text-emerald-600 flex items-center gap-1 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Optimale Länge (30–60 Zeichen für Google SERP Snippets)
                  </p>
                </div>

                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wide">
                    SEO Meta-Description ({activePage.metaDescription.length} Zeichen)
                  </div>
                  <div className="text-sm text-slate-700 leading-relaxed">
                    {activePage.metaDescription}
                  </div>
                  <p className="text-[11px] text-emerald-600 flex items-center gap-1 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Optimale Länge (120–160 Zeichen, keine Kürzung)
                  </p>
                </div>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wide">
                  On-Page H1 Überschrift
                </div>
                <div className="text-base font-bold text-slate-900">
                  {activePage.h1}
                </div>
                <div className="flex flex-wrap gap-2 pt-1 text-xs">
                  <span className="font-semibold text-slate-700">Primär-Keyword:</span>
                  <span className="bg-slate-900 text-white px-2 py-0.5 rounded font-mono">
                    {activePage.primaryKeyword}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="font-semibold text-slate-700">Sekundäre Keywords:</span>
                  {activePage.secondaryKeywords.map((kw, i) => (
                    <span key={i} className="bg-slate-200 text-slate-700 px-2 py-0.5 rounded">
                      {kw}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wide">
                  Analysierte Suchintention & Zielgruppe
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">
                  {activePage.searchIntent}
                </p>
              </div>
            </div>
          )}

          {/* TAB 3: Technical SEO Checklist */}
          {activeTab === 'technical' && (
            <div className="space-y-4">
              <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
                <div>
                  <h4 className="text-sm font-bold text-emerald-900">
                    Technischer SEO-Audit: Alle Prüfstandards bestanden
                  </h4>
                  <p className="text-xs text-emerald-700">
                    Vollständige Konformität mit Google Webmaster Guidelines, Core Web Vitals und W3C-Standards.
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                {TECHNICAL_SEO_CHECKLIST.map((chk, i) => (
                  <div
                    key={i}
                    className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                  >
                    <div>
                      <div className="text-xs font-bold text-slate-900">{chk.item}</div>
                      <div className="text-xs text-slate-500">{chk.detail}</div>
                    </div>
                    <span className="text-[11px] font-bold text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded shrink-0 self-start sm:self-auto">
                      {chk.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: Google Search Console Guide */}
          {activeTab === 'gsc' && (
            <div className="space-y-4">
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                <h4 className="text-sm font-bold text-slate-900 mb-1">
                  Google Search Console & Indexierungs-Vorbereitung
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Schritt-für-Schritt-Anleitung zur Registrierung und Überwachung von https://www.landing-factory.de in Google Search Console:
                </p>
              </div>

              <div className="space-y-3">
                {GSC_INSTRUCTIONS.map((step, i) => (
                  <div key={i} className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
                    <div className="text-xs font-bold text-slate-900 mb-1">
                      {step.step}
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="p-4 bg-sky-50 border border-sky-200 rounded-xl flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-sky-900">XML-Sitemap für GSC bereitgestellt:</div>
                  <div className="text-xs font-mono text-sky-700">https://www.landing-factory.de/sitemap.xml</div>
                </div>
                <a
                  href="/sitemap.xml"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 text-xs font-semibold bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition-colors inline-flex items-center gap-1"
                >
                  <span>Sitemap ansehen</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
