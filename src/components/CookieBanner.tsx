import React, { useState, useEffect } from 'react';
import { Shield, Check, X, Settings2 } from 'lucide-react';

interface CookieBannerProps {
  forceOpenModal?: boolean;
  onCloseModal?: () => void;
  onNavigate: (slug: string) => void;
}

export const CookieBanner: React.FC<CookieBannerProps> = ({
  forceOpenModal = false,
  onCloseModal,
  onNavigate
}) => {
  const [consentGiven, setConsentGiven] = useState<boolean | null>(null);
  const [settingsModalOpen, setSettingsModalOpen] = useState(false);

  // Cookie categories
  const [essential] = useState(true); // always true
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('landing_factory_cookie_consent');
    if (saved) {
      setConsentGiven(true);
      try {
        const parsed = JSON.parse(saved);
        setAnalytics(parsed.analytics || false);
        setMarketing(parsed.marketing || false);
      } catch (e) {
        // ignore
      }
    } else {
      setConsentGiven(false);
    }
  }, []);

  useEffect(() => {
    if (forceOpenModal) {
      setSettingsModalOpen(true);
    }
  }, [forceOpenModal]);

  const saveConsent = (allowAnalytics: boolean, allowMarketing: boolean) => {
    const consent = {
      essential: true,
      analytics: allowAnalytics,
      marketing: allowMarketing,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem('landing_factory_cookie_consent', JSON.stringify(consent));
    setAnalytics(allowAnalytics);
    setMarketing(allowMarketing);
    setConsentGiven(true);
    setSettingsModalOpen(false);
    if (onCloseModal) onCloseModal();
  };

  const acceptAll = () => saveConsent(true, true);
  const acceptEssential = () => saveConsent(false, false);

  return (
    <>
      {/* Bottom Floating Banner (only if not consented yet) */}
      {!consentGiven && (
        <div className="fixed bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-md z-45 bg-slate-900 text-white p-5 rounded-2xl shadow-2xl border border-slate-800 animate-in fade-in slide-in-from-bottom-4 duration-200">
          <div className="flex items-start gap-3">
            <div className="p-2 bg-slate-800 rounded-lg text-sky-400 shrink-0">
              <Shield className="w-5 h-5" />
            </div>
            <div className="space-y-2">
              <h4 className="text-sm font-bold tracking-tight">Privatsphäre & Datenschutz</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Wir nutzen technisch notwendige Cookies zur Bereitstellung der Website. Zusätzliche Dienste werden erst nach Ihrer freiwilligen Zustimmung geladen. Weitere Details in unserer{' '}
                <button
                  onClick={() => onNavigate('datenschutz')}
                  className="text-sky-400 underline hover:text-sky-300"
                >
                  Datenschutzerklärung
                </button>.
              </p>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-800 flex flex-wrap items-center gap-2">
            <button
              onClick={acceptAll}
              className="px-3.5 py-1.5 text-xs font-semibold bg-white text-slate-900 rounded-lg hover:bg-slate-100 transition-colors"
            >
              Alle akzeptieren
            </button>
            <button
              onClick={acceptEssential}
              className="px-3.5 py-1.5 text-xs font-medium bg-slate-800 text-slate-300 rounded-lg hover:bg-slate-700 transition-colors"
            >
              Nur Essenziell
            </button>
            <button
              onClick={() => setSettingsModalOpen(true)}
              className="px-2.5 py-1.5 text-xs font-medium text-slate-400 hover:text-white transition-colors ml-auto"
            >
              Einstellungen
            </button>
          </div>
        </div>
      )}

      {/* Settings Modal */}
      {settingsModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Settings2 className="w-5 h-5 text-sky-400" />
                <h3 className="text-base font-bold">Cookie-Einstellungen verwalten</h3>
              </div>
              <button
                onClick={() => {
                  setSettingsModalOpen(false);
                  if (onCloseModal) onCloseModal();
                }}
                className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                aria-label="Schließen"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-4">
              <p className="text-xs text-slate-600 leading-relaxed">
                Hier können Sie festlegen, welche Kategorien von Cookies und Tracking-Technologien Sie zulassen möchten. Sie können diese Auswahl jederzeit über den Link im Footer ändern.
              </p>

              {/* Essential */}
              <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between gap-4">
                <div>
                  <div className="text-sm font-semibold text-slate-900">Essenziell (Erforderlich)</div>
                  <div className="text-xs text-slate-500">Notwendig für die grundlegende Navigation und Sicherheitsfunktionen.</div>
                </div>
                <div className="text-xs font-bold text-slate-400 px-2 py-1 bg-slate-200 rounded">
                  Immer aktiv
                </div>
              </div>

              {/* Analytics */}
              <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between gap-4">
                <div>
                  <div className="text-sm font-semibold text-slate-900">Statistiken & Performance</div>
                  <div className="text-xs text-slate-500">Hilft uns zu verstehen, welche Seiten am häufigsten besucht werden.</div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={analytics}
                    onChange={(e) => setAnalytics(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-slate-300 peer-focus:outline-hidden rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-slate-900"></div>
                </label>
              </div>

              {/* Marketing */}
              <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between gap-4">
                <div>
                  <div className="text-sm font-semibold text-slate-900">Marketing & Externe Medien</div>
                  <div className="text-xs text-slate-500">Für gezielte Einbindungen externer Inhalte wie Karten oder Medien.</div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={marketing}
                    onChange={(e) => setMarketing(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-slate-300 peer-focus:outline-hidden rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-slate-900"></div>
                </label>
              </div>

              <div className="pt-4 flex items-center justify-between gap-3">
                <button
                  onClick={() => saveConsent(analytics, marketing)}
                  className="px-5 py-2.5 bg-slate-900 text-white text-xs font-semibold rounded-lg hover:bg-slate-800 transition-colors"
                >
                  Auswahl speichern
                </button>
                <button
                  onClick={acceptAll}
                  className="px-5 py-2.5 bg-slate-100 text-slate-800 text-xs font-semibold rounded-lg hover:bg-slate-200 transition-colors"
                >
                  Alle akzeptieren
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
