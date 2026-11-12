export interface KeywordMappingItem {
  pageTitle: string;
  url: string;
  category: 'Hauptseite' | 'Keyword' | 'Standort' | 'Service';
  primaryKeyword: string;
  searchIntent: string;
  secondaryKeywords: string[];
  differentiationAngle: string;
}

export const KEYWORD_MAPPING_DATA: KeywordMappingItem[] = [
  {
    pageTitle: 'Hauptseite (Homepage)',
    url: '/',
    category: 'Hauptseite',
    primaryKeyword: 'webentwicklung und seo agentur',
    searchIntent: 'Kommerziell & Ganzheitlich',
    secondaryKeywords: ['webentwicklung agentur', 'seo agentur', 'landingpage agentur', 'webdesign und seo'],
    differentiationAngle: 'Die zentrale Marke: Verbindung von handwerklicher Programmierung mit datengetriebenem SEO für nachhaltige B2B-Leads.'
  },
  {
    pageTitle: 'Webentwicklung Agentur',
    url: '/webentwicklung-agentur',
    category: 'Keyword',
    primaryKeyword: 'webentwicklung agentur',
    searchIntent: 'Kommerziell (Agentursuche)',
    secondaryKeywords: ['web development agentur', 'agentur für programmierung', 'b2b webentwicklung'],
    differentiationAngle: 'Fokus auf Code-Qualität, modulare Architektur und Vermeidung technischer Schulden.'
  },
  {
    pageTitle: 'Agentur für Webentwicklung',
    url: '/agentur-fuer-webentwicklung',
    category: 'Keyword',
    primaryKeyword: 'agentur für webentwicklung',
    searchIntent: 'Kommerziell (Partnersuche)',
    secondaryKeywords: ['partner für webentwicklung', 'dienstleister webentwicklung', 'website programmieren lassen'],
    differentiationAngle: 'Fokus auf partnerschaftliche Zusammenarbeit auf Augenhöhe, Termintreue und transparente Festpreise.'
  },
  {
    pageTitle: 'Agentur Webentwicklung',
    url: '/agentur-webentwicklung',
    category: 'Keyword',
    primaryKeyword: 'agentur webentwicklung',
    searchIntent: 'Kommerziell (Technik)',
    secondaryKeywords: ['web entwicklung agentur', 'website agentur', 'corporate webentwicklung'],
    differentiationAngle: 'Fokus auf Datensicherheit, Systemunabhängigkeit, gehärtete Angriffsflächen und volle Code-Eigentümerschaft.'
  },
  {
    pageTitle: 'Webentwickler Agentur',
    url: '/webentwickler-agentur',
    category: 'Keyword',
    primaryKeyword: 'webentwickler agentur',
    searchIntent: 'Kommerziell (Entwickler-Know-how)',
    secondaryKeywords: ['webentwickler buchen', 'frontend entwickler agentur', 'full stack webentwickler'],
    differentiationAngle: 'Fokus auf tiefes Entwickler-Handwerk statt austauschbarer Baukasten-Klickerei.'
  },
  {
    pageTitle: 'Webdesign Agentur',
    url: '/webdesign-agentur',
    category: 'Keyword',
    primaryKeyword: 'webdesign agentur',
    searchIntent: 'Kommerziell (Design & Branding)',
    secondaryKeywords: ['ux ui agentur', 'website design agentur', 'responsive webdesign'],
    differentiationAngle: 'Fokus auf moderne Ästhetik, intuitive Nutzerführung und verkaufspsychologischen Aufbau.'
  },
  {
    pageTitle: 'Webentwicklung und Webdesign',
    url: '/webentwicklung-und-webdesign',
    category: 'Keyword',
    primaryKeyword: 'webentwicklung und webdesign',
    searchIntent: 'Kommerziell (Full-Service)',
    secondaryKeywords: ['webdesign und programmierung', 'homepage erstellen lassen', 'full service webagentur'],
    differentiationAngle: 'Beseitigung von Reibungsverlusten zwischen Design- und Coding-Phasen durch integrierte Realisierung.'
  },
  {
    pageTitle: 'SEO Agentur',
    url: '/seo-agentur',
    category: 'Keyword',
    primaryKeyword: 'seo agentur',
    searchIntent: 'Kommerziell (Google-Rankings)',
    secondaryKeywords: ['suchmaschinenoptimierung agentur', 'google seo agentur', 'seo beratung'],
    differentiationAngle: 'Ganzheitliche organische Suchmaschinenoptimierung ohne leere Versprechungen nach Google-Richtlinien.'
  },
  {
    pageTitle: 'Agentur für SEO',
    url: '/agentur-fuer-seo',
    category: 'Keyword',
    primaryKeyword: 'agentur für seo',
    searchIntent: 'Kommerziell (Strategie)',
    secondaryKeywords: ['partner für seo', 'suchmaschinenoptimierung partner', 'organischer traffic'],
    differentiationAngle: 'Strategische Beratung, SERP-Analyse und gezielte Erschließung lukrativer B2B-Suchbegriffsnischen.'
  },
  {
    pageTitle: 'SEO Marketing Agentur',
    url: '/seo-marketing-agentur',
    category: 'Keyword',
    primaryKeyword: 'seo marketing agentur',
    searchIntent: 'Kommerziell (Lead-Fokus)',
    secondaryKeywords: ['search engine marketing', 'inbound marketing agentur', 'organische leadgenerierung'],
    differentiationAngle: 'Verbindung von Suchmaschinen-Rankings mit aktiver Conversion Rate Optimization für reale Kundenanfragen.'
  },
  {
    pageTitle: 'Online Agentur',
    url: '/online-agentur',
    category: 'Keyword',
    primaryKeyword: 'online agentur',
    searchIntent: 'Kommerziell (Digitalagentur)',
    secondaryKeywords: ['digitalagentur', 'internetagentur', 'full service online agentur'],
    differentiationAngle: 'Der ganzheitliche digitale Begleiter für den deutschen Mittelstand von Web bis SEO.'
  },
  // 5 Locations
  {
    pageTitle: 'Webentwicklung Agentur Berlin',
    url: '/webentwicklung-agentur-berlin',
    category: 'Standort',
    primaryKeyword: 'webentwicklung agentur berlin',
    searchIntent: 'Kommerziell & Regional Berlin',
    secondaryKeywords: ['seo agentur berlin', 'webdesign berlin', 'softwareentwicklung berlin'],
    differentiationAngle: 'Skalierbare Webarchitektur für den Berliner Markt; remote betreut ohne teure Hauptstadtagentur-Zuschläge.'
  },
  {
    pageTitle: 'Webentwicklung Agentur München',
    url: '/webentwicklung-agentur-muenchen',
    category: 'Standort',
    primaryKeyword: 'webentwicklung agentur münchen',
    searchIntent: 'Kommerziell & Regional München',
    secondaryKeywords: ['seo agentur münchen', 'webdesign münchen', 'b2b webentwicklung bayern'],
    differentiationAngle: 'Höchste bayerische Präzision und Datensicherheit für den Münchner B2B-Mittelstand und Industrie.'
  },
  {
    pageTitle: 'Webentwicklung Agentur Köln',
    url: '/webentwicklung-agentur-koeln',
    category: 'Standort',
    primaryKeyword: 'webentwicklung agentur köln',
    searchIntent: 'Kommerziell & Regional Köln',
    secondaryKeywords: ['seo agentur köln', 'webdesign köln', 'landingpage agentur nrw'],
    differentiationAngle: 'Konversionsstarke Webauftritte für das Rheinland mit klarem Ladezeit-Vorsprung vor Mitbewerbern.'
  },
  {
    pageTitle: 'Webentwicklung Agentur Frankfurt',
    url: '/webentwicklung-agentur-frankfurt',
    category: 'Standort',
    primaryKeyword: 'webentwicklung agentur frankfurt',
    searchIntent: 'Kommerziell & Regional Frankfurt',
    secondaryKeywords: ['seo agentur frankfurt', 'webdesign frankfurt', 'b2b webentwicklung hessen'],
    differentiationAngle: 'Repräsentatives, seriöses Webdesign & B2B-SEO für das anspruchsvolle Rhein-Main-Gebiet.'
  },
  {
    pageTitle: 'Webentwicklung Agentur Stuttgart',
    url: '/webentwicklung-agentur-stuttgart',
    category: 'Standort',
    primaryKeyword: 'webentwicklung agentur stuttgart',
    searchIntent: 'Kommerziell & Regional Stuttgart',
    secondaryKeywords: ['seo agentur stuttgart', 'webdesign stuttgart', 'industrie webentwicklung baden-württemberg'],
    differentiationAngle: 'Ingenieursqualität im Web für die Innovationsregion Baden-Württemberg und den Maschinenbau.'
  },
  // 5 Services
  {
    pageTitle: 'Individuelle Webentwicklung',
    url: '/individuelle-webentwicklung',
    category: 'Service',
    primaryKeyword: 'individuelle webentwicklung',
    searchIntent: 'Kommerziell (Maßanfertigung)',
    secondaryKeywords: ['custom web development', 'maßgeschneiderte website', 'programmierung nach maß'],
    differentiationAngle: 'Maßgeschneiderte Webprogrammierung ohne die Fesseln und Update-Risiken von Baukästen.'
  },
  {
    pageTitle: 'Local SEO Agentur',
    url: '/local-seo-agentur',
    category: 'Service',
    primaryKeyword: 'local seo agentur',
    searchIntent: 'Kommerziell (Google Maps)',
    secondaryKeywords: ['lokale suchmaschinenoptimierung', 'google maps optimierung', 'regionales seo'],
    differentiationAngle: 'Google Unternehmensprofil Optimierung und lokale Relevanzsignale für regionale Spitzenränge.'
  },
  {
    pageTitle: 'Shopify SEO Agentur',
    url: '/shopify-seo-agentur',
    category: 'Service',
    primaryKeyword: 'shopify seo agentur',
    searchIntent: 'Kommerziell & E-Commerce',
    secondaryKeywords: ['shopify agentur', 'shopify suchmaschinenoptimierung', 'e-commerce seo'],
    differentiationAngle: 'Behebung von Shopifys Canonical-Schwächen, Kategorieseiten-Optimierung und Produkt-Schema.'
  },
  {
    pageTitle: 'Landingpage Agentur',
    url: '/landingpage-agentur',
    category: 'Service',
    primaryKeyword: 'landingpage agentur',
    searchIntent: 'Transaktional & Lead Gen',
    secondaryKeywords: ['landingpage optimierung agentur', 'conversion rate optimierung', 'lead landingpage erstellen'],
    differentiationAngle: 'Verkaufspsychologisch aufgebaute Zielseiten für bezahlte Kampagnen und organische Nischen-Leads.'
  },
  {
    pageTitle: 'SEO Audit Agentur',
    url: '/seo-audit-agentur',
    category: 'Service',
    primaryKeyword: 'seo audit agentur',
    searchIntent: 'Analytisch & Fehlerbehebung',
    secondaryKeywords: ['website analyse agentur', 'technisches seo audit', 'core web vitals check'],
    differentiationAngle: 'Manuelle Tiefenanalyse von Technik, Indexierung und Content mit priorisiertem Maßnahmenkatalog.'
  }
];

export const TECHNICAL_SEO_CHECKLIST = [
  { item: 'Kanonische URLs (rel="canonical")', status: '100% Implementiert', detail: 'Jede Unterseite deklariert ihre eindeutige kanonische URL ohne Session-Parameter.' },
  { item: 'XML-Sitemap (sitemap.xml)', status: '100% Implementiert', detail: 'Alle 21 Core SEO URLs + 5 Supporting URLs sauber aufgelistet unter /sitemap.xml.' },
  { item: 'Crawler-Steuerung (robots.txt)', status: '100% Implementiert', detail: 'Saubere Direktiven und Verweis auf die Sitemap unter /robots.txt.' },
  { item: 'HTML5 Semantik & Überschriften', status: '100% Konform', detail: 'Exakt 1x H1 pro Seite, gefolgt von logischer H2- und H3-Hierarchie.' },
  { item: 'Sprachauszeichnung & UTF-8', status: '100% Konform', detail: 'Deklariert als lang="de" mit korrekt kodierten Umlauten (ä, ö, ü, ß).' },
  { item: 'Strukturierte Daten (JSON-LD)', status: '100% Validiert', detail: 'Schema.org Markup für Organization, WebSite, LocalBusiness und PostalAddress.' },
  { item: 'Mobile-First & Viewport', status: '100% Responsive', detail: 'Perfekt skaliert von 360px bis 4K, kein horizontales Scrollen.' },
  { item: 'DSGVO & Datenschutz', status: '100% Konform', detail: 'Keine ungefragten Tracking-Pixel, transparenter Cookie-Banner, sauberes Impressum.' }
];

export const GSC_INSTRUCTIONS = [
  { step: '1. Property in Google Search Console anlegen', desc: 'Öffnen Sie https://search.google.com/search-console und wählen Sie Domain-Property "landing-factory.de" oder URL-Präfix "https://www.landing-factory.de".' },
  { step: '2. Inhaberschaft verifizieren', desc: 'Verifizieren Sie die Domain bevorzugt über den DNS-TXT-Eintrag bei Ihrem Domain-Registrar oder über ein HTML-Tag.' },
  { step: '3. XML-Sitemap einreichen', desc: 'Navigieren Sie im linken Menü zu "Sitemaps" und geben Sie "sitemap.xml" ein. Google erfasst dadurch sofort alle 21 Core SEO Seiten.' },
  { step: '4. Wichtige URLs prüfen (URL-Prüfung)', desc: 'Nutzen Sie das Suchfeld oben für Ihre Startseite und die wichtigsten Leistungsseiten, um den Live-Status und die Mobile-Freundlichkeit zu prüfen.' },
  { step: '5. Indexierung anfordern', desc: 'Klicken Sie bei den Kernseiten auf "Indexierung beantragen", um Google den Crawl-Auftrag zu priorisieren.' },
  { step: '6. Leistungsbericht überwachen', desc: 'Prüfen Sie wöchentlich Klicks, Impressionen, CTR und die durchschnittliche Position für die hinterlegten Ziel-Keywords.' }
];
