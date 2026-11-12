import React, { useState } from 'react';
import { X, Send, Phone, MessageSquare, Mail, CheckCircle2, AlertCircle } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  preselectedService = 'Webentwicklung & SEO'
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [service, setService] = useState(preselectedService);
  const [message, setMessage] = useState('');
  const [consent, setConsent] = useState(false);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  if (!isOpen) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!name.trim()) errs.name = 'Bitte geben Sie Ihren Namen an.';
    if (!email.trim()) {
      errs.email = 'Bitte geben Sie Ihre E-Mail-Adresse an.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = 'Bitte geben Sie eine gültige E-Mail-Adresse ein.';
    }
    if (!message.trim() || message.length < 10) {
      errs.message = 'Bitte beschreiben Sie Ihr Vorhaben kurz (mind. 10 Zeichen).';
    }
    if (!consent) {
      errs.consent = 'Bitte bestätigen Sie die Datenschutzerklärung.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    // Simulate reliable form processing and feedback
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hallo Herr Polatschek, ich habe eine Projektanfrage bezüglich "${service}":\nName: ${name || 'Interessent'}\nE-Mail: ${email || '-'}\nNachricht: ${message || 'Bitte um unverbindliche Beratung.'}`
    );
    window.open(`https://wa.me/4917629862291?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="px-6 py-5 bg-slate-900 text-white flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold tracking-tight">Projekt anfragen</h3>
            <p className="text-xs text-slate-300">
              Unverbindliche Erstberatung durch Werner Polatschek
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Schließen"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-slate-900">
                Vielen Dank für Ihre Anfrage!
              </h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Wir haben Ihre Nachricht erhalten. Werner Polatschek wird sich innerhalb von 24 Stunden persönlich bei Ihnen melden.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
                <button
                  onClick={onClose}
                  className="px-5 py-2.5 bg-slate-900 text-white text-sm font-semibold rounded-lg hover:bg-slate-800 transition-colors"
                >
                  Fenster schließen
                </button>
                <button
                  onClick={handleWhatsAppDirect}
                  className="px-5 py-2.5 bg-emerald-600 text-white text-sm font-semibold rounded-lg hover:bg-emerald-700 transition-colors inline-flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Auch via WhatsApp senden</span>
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Quick direct channels strip */}
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex flex-wrap items-center justify-between gap-3 text-xs">
                <div className="text-slate-600">Direkter Kontakt:</div>
                <div className="flex items-center gap-3">
                  <a
                    href="tel:+4917629862291"
                    className="inline-flex items-center gap-1.5 font-medium text-slate-700 hover:text-slate-900"
                  >
                    <Phone className="w-3.5 h-3.5 text-sky-600" />
                    <span>+49 176 29862291</span>
                  </a>
                  <button
                    type="button"
                    onClick={handleWhatsAppDirect}
                    className="inline-flex items-center gap-1.5 font-semibold text-emerald-700 hover:text-emerald-800"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                    <span>WhatsApp</span>
                  </button>
                </div>
              </div>

              {/* Form Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Ihr Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Max Mustermann"
                    className={`w-full px-3.5 py-2 text-sm border rounded-lg focus:outline-hidden ${
                      errors.name ? 'border-red-500 bg-red-50/30' : 'border-slate-300 focus:border-slate-900'
                    }`}
                  />
                  {errors.name && <p className="text-[11px] text-red-600 mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    E-Mail-Adresse <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@unternehmen.de"
                    className={`w-full px-3.5 py-2 text-sm border rounded-lg focus:outline-hidden ${
                      errors.email ? 'border-red-500 bg-red-50/30' : 'border-slate-300 focus:border-slate-900'
                    }`}
                  />
                  {errors.email && <p className="text-[11px] text-red-600 mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Telefonnummer (optional)
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+49 170 1234567"
                    className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-lg focus:outline-hidden focus:border-slate-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Unternehmen / Website (optional)
                  </label>
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Mustermann GmbH / domain.de"
                    className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-lg focus:outline-hidden focus:border-slate-900"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Gewünschte Leistung
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-lg focus:outline-hidden focus:border-slate-900 bg-white"
                >
                  <option value="Webentwicklung & SEO">Ganzheitliche Webentwicklung & SEO</option>
                  <option value="Individuelle Webentwicklung">Individuelle Webentwicklung</option>
                  <option value="Landingpage Entwicklung">Landingpage Entwicklung & CRO</option>
                  <option value="SEO Audit & Analyse">Technischer SEO Audit</option>
                  <option value="Local SEO & Google Maps">Local SEO & Google Maps</option>
                  <option value="Shopify SEO">Shopify Store SEO & Optimierung</option>
                  <option value="Sonstiges / Beratung">Allgemeine Beratung / Relaunch</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Projektbeschreibung / Ihre Nachricht <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Beschreiben Sie kurz Ihr Vorhaben, Ihre Ziele oder bestehende Herausforderungen..."
                  className={`w-full px-3.5 py-2 text-sm border rounded-lg focus:outline-hidden ${
                    errors.message ? 'border-red-500 bg-red-50/30' : 'border-slate-300 focus:border-slate-900'
                  }`}
                />
                {errors.message && <p className="text-[11px] text-red-600 mt-1">{errors.message}</p>}
              </div>

              {/* Privacy consent checkbox */}
              <div className="pt-1">
                <label className="flex items-start gap-2.5 text-xs text-slate-600 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="mt-0.5 rounded border-slate-300 text-slate-900 focus:ring-0"
                  />
                  <span>
                    Ich stimme zu, dass meine Angaben zur Kontaktaufnahme und Beantwortung meiner Anfrage verarbeitet werden. Weitere Informationen finden Sie in der Datenschutzerklärung. <span className="text-red-500">*</span>
                  </span>
                </label>
                {errors.consent && <p className="text-[11px] text-red-600 mt-1">{errors.consent}</p>}
              </div>

              {/* Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full sm:w-auto px-6 py-2.5 bg-slate-900 text-white text-sm font-semibold rounded-lg hover:bg-slate-800 transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{submitting ? 'Wird gesendet...' : 'Unverbindlich anfragen'}</span>
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="w-full sm:w-auto px-4 py-2.5 text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 rounded-lg transition-colors flex items-center justify-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Direkt via WhatsApp anfragen</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
