export interface PageFaq {
  question: string;
  answer: string;
}

export interface ProblemSolution {
  problemTitle: string;
  problemDesc: string;
  solutionTitle: string;
  solutionDesc: string;
}

export interface PageData {
  slug: string; // '' for homepage, 'webentwicklung-agentur', etc.
  category: 'home' | 'keyword' | 'location' | 'service' | 'supporting' | 'legal';
  primaryKeyword: string;
  secondaryKeywords: string[];
  searchIntent: string; // e.g. "Kommerziell (B2B Agenturauswahl)"
  metaTitle: string;
  metaDescription: string;
  h1: string;
  kicker: string;
  heroSubtitle: string;
  problemSolution: ProblemSolution[];
  featuresTitle: string;
  features: {
    title: string;
    description: string;
    bulletPoints: string[];
  }[];
  localNote?: string;
  faqs: PageFaq[];
  relatedPages: { slug: string; title: string; desc: string }[];
}

export const PAGES_DATA: Record<string, PageData> = {
  // 1. MAIN HOMEPAGE
  '': {
    slug: '',
    category: 'home',
    primaryKeyword: 'webentwicklung und seo agentur',
    secondaryKeywords: [
      'webentwicklung agentur',
      'seo agentur deutschland',
      'webdesign und seo',
      'conversion landingpage',
      'technisches seo',
      'local seo agentur'
    ],
    searchIntent: 'Kommerziell & Transaktional (Entscheider suchen ganzheitliche Agentur für Entwicklung & organische Google-Sichtbarkeit)',
    metaTitle: 'Landing Factory – Webentwicklung und SEO Agentur in Deutschland',
    metaDescription: 'Landing Factory ist Ihre deutsche Webentwicklung und SEO Agentur. Maßgeschneiderte Websites, technisches SEO und nachhaltige Lead-Generierung für Ihr Business.',
    h1: 'Webentwicklung und SEO Agentur für messbaren Kundenzuwachs',
    kicker: 'Landing Factory · Deutschlandweite Umsetzung aus Niederbayern',
    heroSubtitle: 'Wir konzipieren und entwickeln maßgeschneiderte Websites und Conversion-starke Landingpages, die bei Google gefunden werden und aus anonymen Besuchern qualifizierte Geschäftsanfragen machen.',
    problemSolution: [
      {
        problemTitle: 'Hübsche Website ohne Besucher',
        problemDesc: 'Viele Unternehmen investieren in ein schickes Redesign, bleiben jedoch bei Google auf Seite 4 unsichtbar, weil SEO erst nachträglich bedacht wurde.',
        solutionTitle: 'Technisches SEO von der ersten Zeile Code',
        solutionDesc: 'Bei Landing Factory greifen saubere semantische Webentwicklung und datenbasierte Suchmaschinenoptimierung nahtlos ineinander.'
      },
      {
        problemTitle: 'Hohe Klickkosten durch bezahlte Ads',
        problemDesc: 'Steigende CPCs bei Google Ads schmälern die Marge, während die Abhängigkeit von monatlichen Werbebudgets stetig wächst.',
        solutionTitle: 'Nachhaltiges organisches Ranking',
        solutionDesc: 'Organische Spitzenpositionen schaffen einen kontinuierlichen Strom vorqualifizierter Kundenanfragen ohne laufende Klickkosten.'
      },
      {
        problemTitle: 'Langsame Ladezeiten & schlechte Mobile-Usability',
        problemDesc: 'Überladene Baukästen und Theme-Plugins ruinieren die Core Web Vitals. Mobile Nutzer springen vor der Kontaktaufnahme frustriert ab.',
        solutionTitle: 'Ultraschnelle, saubere Codebasis',
        solutionDesc: 'Schlanker, modularer Code sorgt für blitzschnelle Ladezeiten unter einer Sekunde und maximale Conversion-Raten auf Smartphones.'
      }
    ],
    featuresTitle: 'Ganzheitliche Agenturleistungen für Ihren digitalen Erfolg',
    features: [
      {
        title: 'Maßgeschneiderte Webentwicklung',
        description: 'Individuelle Programmierung ohne starre Baukasten-Einschränkungen. Wartbar, modular und zukunftssicher.',
        bulletPoints: ['Modernes HTML5, CSS & TypeScript', '100% responsive für alle Displaygrößen', 'Keine unnötigen Drittanbieter-Skripte']
      },
      {
        title: 'Technisches & Strategisches SEO',
        description: 'Fundierte On-Page-Optimierung, saubere Informationsarchitektur und Core Web Vitals auf Top-Niveau.',
        bulletPoints: ['Gezielte Keyword-Clustering-Strategie', 'Strukturierte Daten nach Schema.org', 'Indexierungs- & Crawling-Optimierung']
      },
      {
        title: 'Conversion-optimierte Landingpages',
        description: 'Verkaufspsychologisch aufgebaute Zielseiten, die Besucher zielgerichtet zur Kontaktaufnahme führen.',
        bulletPoints: ['Klare Wertversprechen & USPs', 'Friktionsfreie Kontakt- und WhatsApp-Pfade', 'Messbare Lead-Generierung']
      },
      {
        title: 'Local SEO & Google Maps',
        description: 'Gezielte lokale Auffindbarkeit für Handwerk, Dienstleister und den gehobenen Mittelstand.',
        bulletPoints: ['Optimierung des Google Unternehmensprofils', 'Lokale Signalstärkung & Relevanz', 'Regionale Landingpage-Konzepte']
      }
    ],
    faqs: [
      {
        question: 'Warum sollte Webentwicklung und SEO zusammen gedacht werden?',
        answer: 'Wird SEO erst nach dem Launch einer Website beauftragt, müssen häufig teure Strukturänderungen und Code-Refactorings durchgeführt werden. Bei Landing Factory planen wir Keyword-Mapping, URL-Hierarchie und technische Ladezeiten von der ersten Codezeile an mit.'
      },
      {
        question: 'Wie läuft die Zusammenarbeit mit Landing Factory ab?',
        answer: 'Nach einem unverbindlichen Erstgespräch analysieren wir Ihren Markt und Ihre Mitbewerber. Wir definieren eine klare Seitenarchitektur, erstellen das Design und programmieren die Seite schlank und performant. Vor dem Go-Live testen wir alle Funktionen und die technische SEO-Konfiguration.'
      },
      {
        question: 'Arbeitet Landing Factory auch überregional in ganz Deutschland?',
        answer: 'Ja. Unser Firmensitz ist in Vilshofen (Niederbayern), doch wir betreuen Unternehmen und Mittelständler in ganz Deutschland – von München und Stuttgart bis nach Frankfurt, Köln und Berlin via strukturierter digitaler Abstimmung.'
      },
      {
        question: 'Gibt Landing Factory Ranking- oder Lead-Garantien ab?',
        answer: 'Nein, seriöse Agenturen geben niemals unrealistische Ranking-Garantien ab, da der Google-Algorithmus Hunderten dynamischen Faktoren unterliegt. Wir garantieren jedoch erstklassige technische Umsetzung, saubere semantische Auszeichnung und bewährte Best Practices.'
      }
    ],
    relatedPages: [
      { slug: 'webentwicklung-agentur', title: 'Webentwicklung Agentur', desc: 'Maßgeschneiderte Webentwicklung für anspruchsvolle B2B-Unternehmen.' },
      { slug: 'seo-agentur', title: 'SEO Agentur', desc: 'Nachhaltige Suchmaschinenoptimierung für messbare Google-Sichtbarkeit.' },
      { slug: 'landingpage-agentur', title: 'Landingpage Agentur', desc: 'Conversion-starke Landingpages für maximale Anfrageraten.' },
      { slug: 'local-seo-agentur', title: 'Local SEO Agentur', desc: 'Regionale Auffindbarkeit in Google Search und Google Maps.' }
    ]
  },

  // 10 KEYWORD-BASED PAGES
  'webentwicklung-agentur': {
    slug: 'webentwicklung-agentur',
    category: 'keyword',
    primaryKeyword: 'webentwicklung agentur',
    secondaryKeywords: ['web development agentur', 'agentur für programmierung', 'b2b webentwicklung', 'individuelle webentwicklung'],
    searchIntent: 'Kommerziell (Entscheider suchen einen verlässlichen Entwicklungspartner für Neuentwicklungen oder Plattform-Relaunches)',
    metaTitle: 'Webentwicklung Agentur – Maßgeschneiderter Code | Landing Factory',
    metaDescription: 'Professionelle Webentwicklung Agentur für Unternehmen: Schlanker Code, exzellente Performance und nahtlose Suchmaschinenoptimierung.',
    h1: 'Webentwicklung Agentur für zukunftssichere digitale Lösungen',
    kicker: 'Webentwicklung · Höchste Code-Standards',
    heroSubtitle: 'Als spezialisierte Webentwicklung Agentur bauen wir maßgeschneiderte Unternehmens-Websites und Web-Applikationen mit Fokus auf Stabilität, Performance und Skalierbarkeit.',
    problemSolution: [
      {
        problemTitle: 'Unflexibler Spaghetti-Code bisheriger Dienstleister',
        problemDesc: 'Gewachsene Code-Monolithen lassen sich kaum erweitern und verursachen bei jeder Änderung hohe Wartungskosten.',
        solutionTitle: 'Modulare Komponentenarchitektur',
        solutionDesc: 'Wir schreiben sauberen, standardkonformen Code nach aktuellen Best Practices, der sich jederzeit flexibel erweitern lässt.'
      },
      {
        problemTitle: 'Träge Ladezeiten durch überladene Frameworks',
        problemDesc: 'Viele Agenturen installieren Dutzende Drittanbieter-Plugins, was zu massiven Sicherheitslücken und schlechten Core Web Vitals führt.',
        solutionTitle: 'Leichtgewichtiger, optimierter Stack',
        solutionDesc: 'Jede Codezeile erfüllt einen konkreten Zweck. Keine unnötige Bloatware, maximale Rendergeschwindigkeit auf allen Geräten.'
      }
    ],
    featuresTitle: 'Unser Anspruch an moderne Webentwicklung',
    features: [
      {
        title: 'Saubere semantische HTML5-Struktur',
        description: 'Korrekte DOM-Hierarchien erleichtern Screenreadern und Suchmaschinen-Crawlern das fehlerfreie Verstehen der Inhalte.',
        bulletPoints: ['Validierte W3C-Standards', 'Accessible ARIA-Rollen', 'Logische Überschriftenhierarchien']
      },
      {
        title: 'Modernes responsive CSS',
        description: 'Mobile-first Styling mit CSS Grid und Flexbox ohne Layout-Shifts (CLS = 0).',
        bulletPoints: ['Optimiert für Mobile, Tablet & 4K-Desktop', 'Kein horizontales Scrollen', 'Flüssige Übergänge']
      },
      {
        title: 'Datenschutzkonforme Architektur',
        description: 'DSGVO-konforme Einbindung lokaler Schriftarten und Verzicht auf ungesicherte externe Tracking-CDNs.',
        bulletPoints: ['Server- und DSGVO-sicher', 'Transparente Skriptsteuerung', 'Keine Datenabflüsse']
      }
    ],
    faqs: [
      {
        question: 'Welche Technologien setzt Landing Factory in der Webentwicklung ein?',
        answer: 'Wir setzen auf moderne, schlanke Webtechnologien wie standardkonformes HTML5, CSS3, modulares TypeScript und erprobte Frameworks – exakt passend zur Anforderung Ihres Projekts.'
      },
      {
        question: 'Können bestehende Systeme übernommen oder migriert werden?',
        answer: 'Ja, wir analysieren bestehende Webauftritte, identifizieren Performance-Bremsen und führen saubere Relaunches inklusive 301-Weiterleitungsmanagement durch.'
      }
    ],
    relatedPages: [
      { slug: 'individuelle-webentwicklung', title: 'Individuelle Webentwicklung', desc: 'Spezifische Funktionen und individuelle Lösungen nach Maß.' },
      { slug: 'webdesign-agentur', title: 'Webdesign Agentur', desc: 'Ästhetik trifft auf durchdachte Nutzerführung.' },
      { slug: 'seo-audit-agentur', title: 'SEO Audit Agentur', desc: 'Technische Schwachstellen im Code aufdecken.' }
    ]
  },

  'agentur-fuer-webentwicklung': {
    slug: 'agentur-fuer-webentwicklung',
    category: 'keyword',
    primaryKeyword: 'agentur für webentwicklung',
    secondaryKeywords: ['partner für webentwicklung', 'dienstleister webentwicklung', 'website programmieren lassen'],
    searchIntent: 'Kommerziell (Evaluation eines verlässlichen Projektpartners mit partnerschaftlicher Beratung auf Augenhöhe)',
    metaTitle: 'Agentur für Webentwicklung – Zuverlässig & Performant | Landing Factory',
    metaDescription: 'Ihre Agentur für Webentwicklung: Wir begleiten Sie von der Konzeption bis zum Go-Live mit schnellem Code, sauberem SEO und persönlicher Betreuung.',
    h1: 'Ihre verlässliche Agentur für Webentwicklung in Deutschland',
    kicker: 'Partnerschaft · Verlässlichkeit · Transparenz',
    heroSubtitle: 'Sie suchen eine Agentur für Webentwicklung, die mitdenkt, Termine einhält und Code liefert, der Ihr Unternehmen messbar voranbringt? Landing Factory verbindet Ingenieursdisziplin mit digitaler Innovationskraft.',
    problemSolution: [
      {
        problemTitle: 'Agenturen, die nach dem Launch abtauchen',
        problemDesc: 'Viele Auftraggeber bleiben nach Projektabschluss mit technischen Problemen und unbeantworteten E-Mails allein.',
        solutionTitle: 'Persönlicher Ansprechpartner Werner Polatschek',
        solutionDesc: 'Bei uns sprechen Sie direkt mit dem Verantwortlichen. Klare Kommunikationswege per Telefon, WhatsApp und E-Mail.'
      },
      {
        problemTitle: 'Unerwartete Kostenexplosionen',
        problemDesc: 'Unklare Pflichtenhefte führen bei vielen Agenturen zu endlosen Nachtragsangeboten.',
        solutionTitle: 'Transparenter Scope & verlässliche Festpreise',
        solutionDesc: 'Vor Projektbeginn definieren wir den genauen Leistungsumfang transparent und verbindlich.'
      }
    ],
    featuresTitle: 'Warum Unternehmen uns als Agentur für Webentwicklung wählen',
    features: [
      {
        title: 'Verständliche technische Beratung',
        description: 'Wir erklären komplexe technische Entscheidungen verständlich ohne unnötiges IT-Kauderwelsch.',
        bulletPoints: ['Ehrliche Machbarkeitseinschätzung', 'Fokus auf Ihren wirtschaftlichen ROI', 'Keine unnötigen Features']
      },
      {
        title: 'Zukunftssichere Programmierstandards',
        description: 'Code, der auch nach Jahren noch wartbar und updatesicher bleibt.',
        bulletPoints: ['Klare Ordnerstrukturen', 'Umfassende Dokumentation', 'Keine Vendor-Lock-ins']
      }
    ],
    faqs: [
      {
        question: 'Wie schnell kann ein Webentwicklungsprojekt starten?',
        answer: 'Nach einem ersten Vorgespräch können wir in der Regel innerhalb von 1–2 Wochen mit der detaillierten Konzeption und Umsetzung starten.'
      },
      {
        question: 'Wie wird die Qualität während der Entwicklung gesichert?',
        answer: 'Jede Seite durchläuft vor Bereitstellung strukturierte Tests für Cross-Browser-Kompatibilität, Mobile Responsiveness, Ladezeiten und Barrierefreiheit.'
      }
    ],
    relatedPages: [
      { slug: 'webentwicklung-agentur', title: 'Webentwicklung Agentur', desc: 'Erfahren Sie mehr über unseren Entwicklungsansatz.' },
      { slug: 'webentwicklung-und-webdesign', title: 'Webentwicklung & Webdesign', desc: 'Design und Code im perfekten Einklang.' }
    ]
  },

  'agentur-webentwicklung': {
    slug: 'agentur-webentwicklung',
    category: 'keyword',
    primaryKeyword: 'agentur webentwicklung',
    secondaryKeywords: ['web entwicklung agentur', 'website agentur', 'corporate webentwicklung'],
    searchIntent: 'Kommerziell (Suche nach technischer Umsetzungskompetenz für moderne Unternehmensauftritte)',
    metaTitle: 'Agentur Webentwicklung – Schnelle & Sichere Websites | Landing Factory',
    metaDescription: 'Landing Factory ist Ihre Agentur für Webentwicklung: Stabile Architekturen, blitzschnelle Ladezeiten und optimale Konversionspfade.',
    h1: 'Agentur Webentwicklung für anspruchsvolle Unternehmens-Websites',
    kicker: 'Technik · Sicherheit · Skalierbarkeit',
    heroSubtitle: 'Eine erfolgreiche Website erfordert mehr als optische Reize: Stabilität, Sicherheit vor Cyber-Angriffen und millimetergenaue Ausrichtung auf Geschäftsziele stehen im Zentrum unserer Arbeit.',
    problemSolution: [
      {
        problemTitle: 'Sicherheitsrisiken durch ungepflegte Baukastensysteme',
        problemDesc: 'Veraltete CMS-Themes und überflüssige Addons machen Unternehmens-Websites zu leichten Zielen für Schadsoftware.',
        solutionTitle: 'Gehärtete, minimale Angriffsflächen',
        solutionDesc: 'Durch Verzicht auf unnötige Abhängigkeiten und strenge Sicherheitsrichtlinien schützen wir Ihre Daten und Ihren Ruf.'
      }
    ],
    featuresTitle: 'Kernkompetenzen unserer Agentur für Webentwicklung',
    features: [
      {
        title: 'Performance-First Architektur',
        description: 'Optimale Ressourcennutzung mit minimaler Latenz und erstklassigen Core Web Vitals.',
        bulletPoints: ['Minimale Dateigrößen', 'Optimierte Asset-Auslieferung', 'Top-Lighthouse-Werte']
      },
      {
        title: 'Systemunabhängige Entwicklung',
        description: 'Wir entwickeln Lösungen, die unabhängig von proprietären Baukasten-Anbietern funktionieren.',
        bulletPoints: ['Volle Eigentümerschaft des Codes', 'Einfaches Hosting auf Standard-Servern', 'Volle Datenkontrolle']
      }
    ],
    faqs: [
      {
        question: 'Gehört der Quellcode nach Projektabschluss mir?',
        answer: 'Selbstverständlich. Sie erhalten das vollständige uneingeschränkte Nutzungsrecht am entwickelten Quellcode ohne wiederkehrende Lizenzgebühren an uns.'
      }
    ],
    relatedPages: [
      { slug: 'webentwickler-agentur', title: 'Webentwickler Agentur', desc: 'Erfahrene Coder für anspruchsvolle Aufgaben.' },
      { slug: 'landingpage-agentur', title: 'Landingpage Agentur', desc: 'Gezielte Lead-Generierung für Kampagnen.' }
    ]
  },

  'webentwickler-agentur': {
    slug: 'webentwickler-agentur',
    category: 'keyword',
    primaryKeyword: 'webentwickler agentur',
    secondaryKeywords: ['webentwickler buchen', 'frontend entwickler agentur', 'full stack webentwickler'],
    searchIntent: 'Kommerziell (Kunden suchen fundiertes Entwickler-Know-how statt oberflächlichem Agentur-Marketing)',
    metaTitle: 'Webentwickler Agentur – Handwerklicher Code & Präzision | Landing Factory',
    metaDescription: 'Landing Factory als Webentwickler Agentur: Wir programmieren saubere, robuste und schnelle Web-Lösungen mit handwerklicher Präzision.',
    h1: 'Webentwickler Agentur: Programmierpräzision statt Standard-Themes',
    kicker: 'Developer Expertise · Clean Code',
    heroSubtitle: 'Wenn Standardlösungen an ihre Grenzen stoßen, braucht es echte Programmierkompetenz. Als Webentwickler Agentur lösen wir technische Hürden dort, wo Baukästen scheitern.',
    problemSolution: [
      {
        problemTitle: 'Standard-Themes lassen sich nicht anpassen',
        problemDesc: 'Baukästen und Fertig-Themes zwingen Unternehmen in starre Raster, die nicht zu den internen Prozessen passen.',
        solutionTitle: 'Individuelle Frontend- und Backend-Lösungen',
        solutionDesc: 'Wir schreiben maßgeschneiderte Logiken, die sich nahtlos an Ihre Vertriebsprozesse und Ihr Corporate Design anpassen.'
      }
    ],
    featuresTitle: 'Entwicklungsstandards bei Landing Factory',
    features: [
      {
        title: 'Modernste Frontend-Technologie',
        description: 'Semantische Strukturen, flüssige Animationen und optimale Rendering-Pipelines.',
        bulletPoints: ['Kein CSS-Overhead', 'Asynchrones Asset-Loading', 'Native Browser-APIs']
      },
      {
        title: 'Höchste Code-Lesbarkeit',
        description: 'Strukturierte Benennungen und modulare Gliederung für einfache zukünftige Pflege.',
        bulletPoints: ['Eindeutige Komponenten', 'Strikte Typisierung', 'Fehlerfreie Konsole']
      }
    ],
    faqs: [
      {
        question: 'Unterstützen Sie auch bei der Fehlerbehebung in bestehenden Websites?',
        answer: 'Ja, wir analysieren bestehende Projekte auf Script-Fehler, Ladezeitprobleme und Darstellungsfehler und beheben diese gezielt.'
      }
    ],
    relatedPages: [
      { slug: 'individuelle-webentwicklung', title: 'Individuelle Webentwicklung', desc: 'Maßgeschneiderte Webanwendungen.' },
      { slug: 'seo-audit-agentur', title: 'SEO Audit Agentur', desc: 'Gründliche Analyse der Codebasis.' }
    ]
  },

  'webdesign-agentur': {
    slug: 'webdesign-agentur',
    category: 'keyword',
    primaryKeyword: 'webdesign agentur',
    secondaryKeywords: ['ux ui agentur', 'website design agentur', 'responsive webdesign', 'b2b webdesign'],
    searchIntent: 'Kommerziell (Unternehmen suchen moderne Gestaltung, professionelle Markenwirkung und intuitive Nutzerführung)',
    metaTitle: 'Webdesign Agentur – Modernes UI/UX & Conversion-Fokus | Landing Factory',
    metaDescription: 'Als deutsche Webdesign Agentur gestalten wir moderne, ästhetische Websites, die Vertrauen stiften und aus Besuchern kaufbereite Interessenten machen.',
    h1: 'Webdesign Agentur für überzeugende Markenauftritte & Leads',
    kicker: 'Design · UX & UI · Markenwirkung',
    heroSubtitle: 'Modernes Webdesign ist kein Selbstzweck: Es führt den Blick des Nutzers, baut innerhalb von Millisekunden Vertrauen auf und leitet Interessenten gezielt zur Kontaktaufnahme.',
    problemSolution: [
      {
        problemTitle: 'Altbackenes Design schreckt B2B-Kunden ab',
        problemDesc: 'Entscheider verlassen eine Website innerhalb von 3 Sekunden, wenn sie unmodern, unübersichtlich oder verstaubt wirkt.',
        solutionTitle: 'Klar strukturiertes deutsches Corporate Design',
        solutionDesc: 'Wir kreieren visuelle Hierarchien mit klaren Freiräumen, lesefreundlicher Typografie und markanter Markenidentität.'
      },
      {
        problemTitle: 'Unklare Nutzerführung & verwirrende Menüs',
        problemDesc: 'Findet der Interessent die gewünschte Information oder das Kontaktformular nicht sofort, bricht er den Besuch ab.',
        solutionTitle: 'Intuitive UX-Architektur',
        solutionDesc: 'Logische Klickpfade und präsente Kontakt-Affordanzen machen die Kontaktaufnahme so mühelos wie möglich.'
      }
    ],
    featuresTitle: 'Prinzipien unseres Webdesigns',
    features: [
      {
        title: 'Verkaufspsychologische Nutzerführung',
        description: 'Gezielte Platzierung von Handlungsaufforderungen (CTAs), Vertrauenselementen und Leistungsübersichten.',
        bulletPoints: ['Conversion-optimierte Farb- und Raumaufteilung', 'Reduzierung kognitiver Reizüberflutung', 'Gezielte Blickführung']
      },
      {
        title: 'Pixelgenaue responsive Umsetzung',
        description: 'Vom Smartphone über das Tablet bis zum hochauflösenden 4K-Desktop – Ihr Design wirkt immer makellos.',
        bulletPoints: ['Mobile-First Konzeption', 'Optimale Lesbarkeit aller Schriftgrade', 'Berührungsgerechte Bedienelemente']
      }
    ],
    faqs: [
      {
        question: 'Erhalte ich vor der Programmierung Designentwürfe?',
        answer: 'Ja, wir stimmen das visuelle Konzept, Schrift- und Farbwelten sowie die Layoutstruktur eng mit Ihnen ab, bevor die Programmierung finalisiert wird.'
      }
    ],
    relatedPages: [
      { slug: 'webentwicklung-und-webdesign', title: 'Webentwicklung & Webdesign', desc: 'Beide Disziplinen aus einer Hand.' },
      { slug: 'landingpage-agentur', title: 'Landingpage Agentur', desc: 'Fokus auf sofortige Conversion-Steigerung.' }
    ]
  },

  'webentwicklung-und-webdesign': {
    slug: 'webentwicklung-und-webdesign',
    category: 'keyword',
    primaryKeyword: 'webentwicklung und webdesign',
    secondaryKeywords: ['webdesign und programmierung', 'homepage erstellen lassen', 'full service webagentur'],
    searchIntent: 'Kommerziell (Kunden möchten Design und technische Umsetzung aus einer Hand ohne Reibungsverluste)',
    metaTitle: 'Webentwicklung und Webdesign aus einer Hand | Landing Factory',
    metaDescription: 'Webentwicklung und Webdesign nahtlos vereint: Gestalterische Eleganz trifft auf höchste technische Performance und integrierte SEO-Strategie.',
    h1: 'Webentwicklung und Webdesign: Perfektes Zusammenspiel aus Form & Funktion',
    kicker: 'Full-Service · Ganzheitlicher Ansatz',
    heroSubtitle: 'Wenn Designer und Entwickler nicht harmonieren, leidet das Ergebnis. Bei Landing Factory entstehen Konzeption, Design, Code und SEO in einer kohärenten Pipeline – für kompromisslose Qualität.',
    problemSolution: [
      {
        problemTitle: 'Reibungsverluste zwischen Design- und Dev-Teams',
        problemDesc: 'Designer entwerfen Layouts, die technisch langsam sind – Programmierer vereinfachen das Design auf Kosten der Ästhetik.',
        solutionTitle: 'Ganzheitliche Realisierung aus einer Feder',
        solutionDesc: 'Jedes Gestaltungselement wird von Anfang an auf Machbarkeit, Ladezeiten und SEO-Wirksamkeit geprüft.'
      }
    ],
    featuresTitle: 'Vorteile unseres integrierten Ansatzes',
    features: [
      {
        title: 'Einheitlicher Projektfortschritt',
        description: 'Keine Schuldzuweisungen zwischen verschiedenen Dienstleistern, ein zentraler Verantwortlicher.',
        bulletPoints: ['Schnellere Projektlaufzeiten', 'Garantierte Übereinstimmung von Entwurf und Live-Seite', 'Geringerer Abstimmungsaufwand']
      },
      {
        title: 'Durchgängige Qualitätskontrolle',
        description: 'Sowohl die visuelle Wirkung als auch die Core Web Vitals werden kontinuierlich gemessen.',
        bulletPoints: ['Harmonische Animationen', 'Perfekte Typografie', 'Optimale Performance-Scores']
      }
    ],
    faqs: [
      {
        question: 'Wie sparen Kunden Zeit und Geld durch die Kombination beider Leistungen?',
        answer: 'Durch den Wegfall doppelter Briefings und aufwendiger Schnittstellenabstimmungen zwischen externen Designern und Codern verringern sich Projektzeiten und Reibungsverluste spürbar.'
      }
    ],
    relatedPages: [
      { slug: 'webentwicklung-agentur', title: 'Webentwicklung Agentur', desc: 'Der technische Part im Detail.' },
      { slug: 'webdesign-agentur', title: 'Webdesign Agentur', desc: 'Der gestalterische Part im Detail.' }
    ]
  },

  'seo-agentur': {
    slug: 'seo-agentur',
    category: 'keyword',
    primaryKeyword: 'seo agentur',
    secondaryKeywords: ['suchmaschinenoptimierung agentur', 'google seo agentur', 'seo beratung', 'seo experte'],
    searchIntent: 'Kommerziell & Transaktional (Suche nach nachhaltiger Steigerung der organischen Google-Rankings und relevanter Besucherströme)',
    metaTitle: 'SEO Agentur – Nachhaltige Google-Rankings & Traffic | Landing Factory',
    metaDescription: 'Erfahrene SEO Agentur für den Mittelstand: Technisches SEO, Content-Strategie und On-Page-Optimierung für Top-Rankings in Google.',
    h1: 'SEO Agentur für dauerhafte Sichtbarkeit auf Google Seite 1',
    kicker: 'Suchmaschinenoptimierung · Messbare Rankings',
    heroSubtitle: 'Was nützt die beste Website, wenn Ihre Zielgruppe Sie nicht findet? Als SEO Agentur bringen wir Ihre Angebote bei kaufrelevanten Suchbegriffen nach ganz vorn – transparent, seriös und datengetrieben.',
    problemSolution: [
      {
        problemTitle: 'Geldverbrennung durch leere SEO-Versprechen',
        problemDesc: 'Viele Agenturen verkaufen automatisierte Monatsreports ohne greifbare Verbesserungen bei Rankings oder Anfragen.',
        solutionTitle: 'Fokus auf kommerzielle Suchintentionen',
        solutionDesc: 'Wir optimieren nicht für unbedeutende Zufallsbegriffe, sondern für Suchanfragen, die tatsächlich zu qualifizierten Kundenanfragen führen.'
      },
      {
        problemTitle: 'Penalisierung durch unsaubere Black-Hat-Methoden',
        problemDesc: 'Fragwürdige Backlink-Käufe riskieren die dauerhafte Abstrafung Ihrer Domain im Google-Index.',
        solutionTitle: '100% White-Hat & zukunftssichere Methoden',
        solutionDesc: 'Wir optimieren exakt nach den Qualitätsrichtlinien von Google: Hochwertiger Inhalt, sauberer Code und exzellente Nutzersignale.'
      }
    ],
    featuresTitle: 'Die Bausteine unserer SEO-Betreuung',
    features: [
      {
        title: 'Umfassendes technisches SEO',
        description: 'Fehlerfreies Crawling, optimierte Indexierung, strukturierte Daten (Schema.org) und Top-Ladezeiten.',
        bulletPoints: ['XML-Sitemaps & Robots.txt Konfiguration', 'Kanonische URLs gegen Duplicate Content', 'Vermeidung von 404-Sackgassen']
      },
      {
        title: 'Semantisches Keyword-Clustering',
        description: 'Gezielte Zuordnung von Primär- und Sekundär-Keywords verhindert Keyword-Kannibalisierung zwischen Unterseiten.',
        bulletPoints: ['Detaillierte Suchintentionsanalyse', 'Optimierte H1-H3 Überschriftenstrukturen', 'Meta-Title & Description Feinschliff']
      },
      {
        title: 'Interne Verlinkungsarchitektur',
        description: 'Logische Verteilung von Link-Equity (PageRank) stärkt Ihre wichtigsten kommerziellen Leistungsseiten.',
        bulletPoints: ['Thematische Silos', 'Kontextuelle Ankertexte', 'Vollständige Vermeidung verwaister Seiten']
      }
    ],
    faqs: [
      {
        question: 'Wie lange dauert es, bis erste SEO-Ergebnisse sichtbar werden?',
        answer: 'Suchmaschinenoptimierung ist ein nachhaltiger Prozess. Erste spürbare Verbesserungen bei Indexierung und Rankings zeigen sich meist nach 2–4 Monaten, substanzieller organischer Lead-Zuwachs nach 4–9 Monaten.'
      },
      {
        question: 'Garantieren Sie Platz 1 bei Google?',
        answer: 'Nein. Eine Agentur, die Platz 1 garantiert, handelt unseriös. Google verändert seinen Algorithmus tausende Male im Jahr. Wir garantieren jedoch professionelle, fundierte Arbeit nach den aktuellsten Google Webmaster Guidelines.'
      }
    ],
    relatedPages: [
      { slug: 'seo-audit-agentur', title: 'SEO Audit Agentur', desc: 'Lassen Sie den aktuellen Status Ihrer Domain prüfen.' },
      { slug: 'local-seo-agentur', title: 'Local SEO Agentur', desc: 'Regionale Kundengewinnung über Google Maps.' },
      { slug: 'shopify-seo-agentur', title: 'Shopify SEO Agentur', desc: 'E-Commerce Suchmaschinenoptimierung.' }
    ]
  },

  'agentur-fuer-seo': {
    slug: 'agentur-fuer-seo',
    category: 'keyword',
    primaryKeyword: 'agentur für seo',
    secondaryKeywords: ['partner für seo', 'suchmaschinenoptimierung partner', 'organischer traffic agentur'],
    searchIntent: 'Kommerziell (Unternehmen suchen einen vertrauenswürdigen strategischen SEO-Partner)',
    metaTitle: 'Agentur für SEO – Strategische Suchmaschinenoptimierung | Landing Factory',
    metaDescription: 'Landing Factory ist Ihre Agentur für SEO in Deutschland. Wir analysieren Suchintentionen und platzieren Ihr Angebot vor Ihrer kaufkräftigen Zielgruppe.',
    h1: 'Agentur für SEO: Strategischer Ausbau Ihrer Google-Reichweite',
    kicker: 'Strategie · Marktrelevanz · Wachstum',
    heroSubtitle: 'Suchmaschinenoptimierung ist kein Zufallsprodukt, sondern das Resultat systematischer Marktanalyse, technischer Präzision und relevanter Inhalte, die Kundenfragen exakt beantworten.',
    problemSolution: [
      {
        problemTitle: 'Hoher Streuverlust bei Content-Erstellung',
        problemDesc: 'Viele Unternehmen bloggen fleißig, erzielen jedoch weder Rankings noch Leads, weil die Suchintention nicht getroffen wird.',
        solutionTitle: 'Gezielte Content-Architektur',
        solutionDesc: 'Jeder Text wird für eine klar umrissene Zielgruppe mit realem Kaufinteresse konzipiert.'
      }
    ],
    featuresTitle: 'Leistungsschwerpunkte unserer Agentur für SEO',
    features: [
      {
        title: 'Fundierte Wettbewerbs- und Marktanalyse',
        description: 'Wir durchleuchten die Stärken und Schwächen Ihrer Top-Wettbewerber in den Google-Suchergebnissen.',
        bulletPoints: ['Keyword-Gap-Analyse', 'SERP-Feature-Optimierung', 'Identifikation ungenutzter Nischen']
      },
      {
        title: 'Messbare KPIs & verständliche Reports',
        description: 'Fokus auf tatsächliche geschäftliche Kennzahlen wie Klicks, qualifizierte Anfragen und ROI.',
        bulletPoints: ['Keine irreführenden Eitelkeitsmetriken', 'Transparente Google Search Console Daten', 'Regelmäßige Fortschrittsgespräche']
      }
    ],
    faqs: [
      {
        question: 'Warum ist technisches SEO die Grundlage jeder Kampagne?',
        answer: 'Wenn Google Ihre Seiten aufgrund von Crawling-Fehlern, Ladezeitproblemen oder falschen Canonical-Tags nicht sauber erfassen kann, verpufft auch der beste Inhalt wirkungslos.'
      }
    ],
    relatedPages: [
      { slug: 'seo-agentur', title: 'SEO Agentur', desc: 'Unser Gesamtspektrum in der Suchmaschinenoptimierung.' },
      { slug: 'seo-marketing-agentur', title: 'SEO Marketing Agentur', desc: 'Verbindung von Ranking und Conversion.' }
    ]
  },

  'seo-marketing-agentur': {
    slug: 'seo-marketing-agentur',
    category: 'keyword',
    primaryKeyword: 'seo marketing agentur',
    secondaryKeywords: ['search engine marketing', 'inbound marketing agentur', 'organische leadgenerierung'],
    searchIntent: 'Kommerziell (Verbindung von SEO-Rankings mit Inbound-Marketing und gezielter Lead-Generierung)',
    metaTitle: 'SEO Marketing Agentur – Sichtbarkeit & Lead-Generierung | Landing Factory',
    metaDescription: 'Als SEO Marketing Agentur verwandeln wir Google-Rankings in zahlende Kunden. Ganzheitliche Inbound-Strategien für B2B und Mittelstand.',
    h1: 'SEO Marketing Agentur: Mehr als nur Klicks – Echte Kundenanfragen',
    kicker: 'Inbound Marketing · Lead Generation',
    heroSubtitle: 'Rankings sind gut, qualifizierte Anfragen sind besser. Wir optimieren Ihre Website so, dass aus organischen Google-Besuchern zahlende Geschäftskunden werden.',
    problemSolution: [
      {
        problemTitle: 'Viele Besucher, aber keine Kontaktaufnahmen',
        problemDesc: 'Eine Website hat Tausende monatliche Klicks, doch das Kontaktformular bleibt leer, weil die Conversion-Pfade fehlen.',
        solutionTitle: 'Verknüpfung von SEO mit Conversion Rate Optimization (CRO)',
        solutionDesc: 'Wir platzieren klare Handlungsaufforderungen, Testimonials und relevante Kontaktoptionen direkt im Sichtfeld des Nutzers.'
      }
    ],
    featuresTitle: 'Die Säulen unseres SEO-Marketings',
    features: [
      {
        title: 'Verkaufsorientierte Inhaltsgestaltung',
        description: 'Inhalte, die nicht nur Algorithmen zufriedenstellen, sondern menschliche Entscheider überzeugen.',
        bulletPoints: ['Präzise Problem-Lösungs-Darstellung', 'Kaufentscheidende Einwandbehandlung', 'Klare Nutzenargumentation']
      },
      {
        title: 'Multi-Kanal Kontaktmöglichkeiten',
        description: 'Niederschwellige Einstiegspunkte wie direkte WhatsApp-Anfrage, Telefon-Direktwahl und validierte Webformulare.',
        bulletPoints: ['Maximale Conversion-Freundlichkeit', 'Friktionsfreie mobile Interaktion', 'DSGVO-konforme Datenerfassung']
      }
    ],
    faqs: [
      {
        question: 'Was unterscheidet SEO-Marketing von klassischer Suchmaschinenoptimierung?',
        answer: 'Klassisches SEO endet oft beim Ranking auf Position 1–3. SEO-Marketing begleitet den Besucher weiter: Wie erlebt er die Zielseite, welche Signale schaffen Vertrauen und wie wird er mühelos zum Anfrager?'
      }
    ],
    relatedPages: [
      { slug: 'landingpage-agentur', title: 'Landingpage Agentur', desc: 'Fokussierte Zielseiten für maximale Conversion.' },
      { slug: 'seo-agentur', title: 'SEO Agentur', desc: 'Nachhaltige organische Reichweite.' }
    ]
  },

  'online-agentur': {
    slug: 'online-agentur',
    category: 'keyword',
    primaryKeyword: 'online agentur',
    secondaryKeywords: ['digitalagentur', 'internetagentur', 'full service online agentur', 'agentur digitalisierung'],
    searchIntent: 'Kommerziell (Unternehmen suchen einen ganzheitlichen digitalen Begleiter für Web, SEO und Lead-Prozesse)',
    metaTitle: 'Online Agentur für Web & Suchmaschinen | Landing Factory Deutschland',
    metaDescription: 'Landing Factory ist Ihre deutsche Online Agentur: Konzeption, Entwicklung und Suchmaschinenoptimierung für nachhaltigen geschäftlichen Erfolg.',
    h1: 'Ihre deutsche Online Agentur für digitale Exzellenz & Sichtbarkeit',
    kicker: 'Digitalagentur · Webentwicklung & SEO',
    heroSubtitle: 'Wir begleiten Unternehmen bei der erfolgreichen Positionierung im Internet. Von der ersten Konzeptidee über den fertigen Code bis zur kontinuierlichen Google-Optimierung.',
    problemSolution: [
      {
        problemTitle: 'Zersplitterte Dienstleister-Landschaft',
        problemDesc: 'Eine Agentur baut die Website, ein Freelancer macht SEO, ein Dritter kümmert sich um die Texte – niemand übernimmt die Gesamtverantwortung.',
        solutionTitle: 'Ganzheitliche Betreuung aus einer Hand',
        solutionDesc: 'Bei Landing Factory greifen alle Disziplinen nahtlos ineinander. Ein strategischer Fahrplan für Ihren digitalen Marktauftritt.'
      }
    ],
    featuresTitle: 'Leistungsspektrum unserer Online Agentur',
    features: [
      {
        title: 'Digitale Markenführung & Web-Präsenz',
        description: 'Professionelle Außendarstellung, die den Wert Ihrer Dienstleistungen adäquat widerspiegelt.',
        bulletPoints: ['Corporate Webdesign', 'Moderne Benutzeroberflächen', 'Klare Markenidentität']
      },
      {
        title: 'Organische Kundengewinnung',
        description: 'Nachhaltige Ausrichtung aller Kanäle auf den organischen Zulauf neuer Interessenten.',
        bulletPoints: ['Google Search & Google Maps', 'Lokale und überregionale Strategien', 'Dauerhafte Sichtbarkeit']
      }
    ],
    faqs: [
      {
        question: 'Für welche Unternehmensgrößen arbeitet Landing Factory?',
        answer: 'Wir arbeiten vorwiegend für inhabergeführte mittelständische Unternehmen, anspruchsvolle Dienstleister, Handwerksbetriebe und wachsende E-Commerce-Händler.'
      }
    ],
    relatedPages: [
      { slug: 'webentwicklung-agentur', title: 'Webentwicklung Agentur', desc: 'Maßgeschneiderte Webentwicklung.' },
      { slug: 'seo-agentur', title: 'SEO Agentur', desc: 'Gezielte Suchmaschinenoptimierung.' }
    ]
  },

  // 5 LOCATION-BASED PAGES
  // Note: Headquarters is in Vilshofen, Bavaria; remote services available nationwide without false local branch claims.
  'webentwicklung-agentur-berlin': {
    slug: 'webentwicklung-agentur-berlin',
    category: 'location',
    primaryKeyword: 'webentwicklung agentur berlin',
    secondaryKeywords: ['seo agentur berlin', 'webdesign berlin', 'softwareentwicklung berlin remote'],
    searchIntent: 'Kommerziell & Regional (Berliner Unternehmen, Startups und Mittelständler suchen spezialisierte Web- und SEO-Agenturen)',
    metaTitle: 'Webentwicklung Agentur Berlin – Schneller Code & SEO | Landing Factory',
    metaDescription: 'Webentwicklung und SEO für Berliner Unternehmen: Landing Factory realisiert performante Websites und Landingpages für den dynamischen Markt der Hauptstadt.',
    h1: 'Webentwicklung Agentur für Berliner Unternehmen & Pioniere',
    kicker: 'Berlin · Dynamischer Markt · Remote-Exzellenz',
    heroSubtitle: 'In der Bundeshauptstadt ist der Wettbewerb um digitale Aufmerksamkeit besonders intensiv. Wir entwickeln für Berliner Unternehmen blitzschnelle Websites und fundierte SEO-Strategien mit bayerischer Gründlichkeit.',
    localNote: 'Transparenter Hinweis: Unser Hauptsitz befindet sich in Vilshofen an der Donau (Niederbayern). Wir betreuen unsere Berliner Kunden vollständig remote über modernste Kollaborationstools – ohne teure Hauptstadtagentur-Overheads.',
    problemSolution: [
      {
        problemTitle: 'Überhitzter Berliner Agenturmarkt mit hohen Stundensätzen',
        problemDesc: 'Viele Berliner Agenturen verlangen astronomische Honorare für Standardlösungen und leiden unter hoher Mitarbeiterfluktuation.',
        solutionTitle: 'Persönliche Betreuung & stabiles Preis-Leistungs-Verhältnis',
        solutionDesc: 'Bei Landing Factory erhalten Sie inhabergeführte Betreuung durch Werner Polatschek mit verlässlichen Festpreisen und schnellen Reaktionszeiten.'
      },
      {
        problemTitle: 'Hohe Konkurrenzdichte in den Berliner Google SERPs',
        problemDesc: 'In Berlin umkämpfen Hunderte Mitbewerber dieselben Suchbegriffe.',
        solutionTitle: 'Präzises Nischen-Keyword-Clustering',
        solutionDesc: 'Wir identifizieren exakt die B2B- und B2C-Suchbegriffe mit höchster Kaufabsicht und optimieren Ihre Seiten zielgerichtet darauf.'
      }
    ],
    featuresTitle: 'Leistungen für Berliner Kunden',
    features: [
      {
        title: 'Skalierbare Webarchitektur für Wachstumsmärkte',
        description: 'Code, der problemlos mit Ihrem Unternehmen mitwächst – von der ersten Landingpage bis zur komplexen Plattform.',
        bulletPoints: ['Modernste Frontend-Standards', 'Skalierbare Performance', '100% DSGVO-konform']
      },
      {
        title: 'Hauptstadt-SEO mit Tiefgang',
        description: 'Lokales und überregionales SEO zur Erschließung des Berliner Ballungsraums und deutschlandweiter Märkte.',
        bulletPoints: ['Wettbewerbsanalyse Berlin', 'Technisches SEO Audit', 'Strukturierte Daten für Rich Snippets']
      }
    ],
    faqs: [
      {
        question: 'Wie funktioniert die Zusammenarbeit mit Landing Factory aus Berlin?',
        answer: 'Die Zusammenarbeit erfolgt reibungslos digital über Video-Calls, Telefon, E-Mail und WhatsApp. Wir halten feste Meilensteine ein und geben Ihnen vollen Einblick in den Entwicklungsfortschritt.'
      }
    ],
    relatedPages: [
      { slug: 'webentwicklung-agentur', title: 'Webentwicklung Agentur', desc: 'Unsere technische Philosophie.' },
      { slug: 'seo-agentur', title: 'SEO Agentur', desc: 'Organische Reichweite aufbauen.' },
      { slug: 'kontakt', title: 'Projekt unverbindlich anfragen', desc: 'Sprechen Sie jetzt mit Werner Polatschek.' }
    ]
  },

  'webentwicklung-agentur-muenchen': {
    slug: 'webentwicklung-agentur-muenchen',
    category: 'location',
    primaryKeyword: 'webentwicklung agentur münchen',
    secondaryKeywords: ['seo agentur münchen', 'webdesign münchen', 'b2b webentwicklung bayern'],
    searchIntent: 'Kommerziell & Regional (Münchner Mittelständler, Industrie- und Technologieunternehmen suchen verlässliche Partner)',
    metaTitle: 'Webentwicklung Agentur München – Präzision & SEO | Landing Factory',
    metaDescription: 'Webentwicklung und SEO für München und Oberbayern: Landing Factory bietet maßgeschneiderten Code, Top-Ladezeiten und fundiertes SEO für den Mittelstand.',
    h1: 'Webentwicklung Agentur für München & den bayerischen Mittelstand',
    kicker: 'München · Wirtschaftsstärke · Bayerische Präzision',
    heroSubtitle: 'Münchens Wirtschaft steht für höchste Qualität und Innovationskraft. Wir bauen Websites und SEO-Architekturen, die diesen hohen Ansprüchen gerecht werden und Entscheider in ganz Deutschland überzeugen.',
    localNote: 'Transparenter Hinweis: Als niederbayerische Agentur mit Sitz in Vilshofen (ca. 1,5 Stunden von München entfernt) verbinden wir regionale Verbundenheit in Bayern mit effizienter digitaler Projektabwicklung.',
    problemSolution: [
      {
        problemTitle: 'Hohe Erwartungen an Seriosität & Datenschutz',
        problemDesc: 'Münchner B2B-Kunden und Konzerne prüfen Webdienstleister streng auf Zuverlässigkeit und DSGVO-Konformität.',
        solutionTitle: 'Rechtssichere, saubere Programmierung',
        solutionDesc: 'Verzicht auf bedenkliche Drittanbieter-Tools, DSGVO-konforme Architektur und professionelle Impressums- und Datenschutzstrukturen.'
      }
    ],
    featuresTitle: 'Fokusbereiche für den Wirtschaftsraum München',
    features: [
      {
        title: 'B2B-Lead-Generierung für Premium-Dienstleister',
        description: 'Landingpages und Websites, die komplexe erklärungsbedürftige Produkte und Services klar auf den Punkt bringen.',
        bulletPoints: ['Verkaufsorientierte Struktur', 'Klare Nutzenargumentation', 'Conversion-optimierte Formulare']
      },
      {
        title: 'SEO für den süddeutschen Raum & bundesweit',
        description: 'Dominieren Sie relevante Suchbegriffe in der Region München und deutschlandweit.',
        bulletPoints: ['Local SEO für Ballungsräume', 'B2B Keyword-Mapping', 'Core Web Vitals Optimierung']
      }
    ],
    faqs: [
      {
        question: 'Sind auch persönliche Termine im Raum München möglich?',
        answer: 'Unser primärer Workflow ist effizient und digital organisiert. Bei größeren Projekten sind Abstimmungen im Raum München nach Vereinbarung selbstverständlich möglich.'
      }
    ],
    relatedPages: [
      { slug: 'individuelle-webentwicklung', title: 'Individuelle Webentwicklung', desc: 'Bespoke Lösungen für B2B.' },
      { slug: 'local-seo-agentur', title: 'Local SEO Agentur', desc: 'Regionale Auffindbarkeit in Bayern.' }
    ]
  },

  'webentwicklung-agentur-koeln': {
    slug: 'webentwicklung-agentur-koeln',
    category: 'location',
    primaryKeyword: 'webentwicklung agentur köln',
    secondaryKeywords: ['seo agentur köln', 'webdesign köln', 'landingpage agentur nrw'],
    searchIntent: 'Kommerziell & Regional (Kölner Unternehmen und Dienstleister suchen moderne Web- und SEO-Lösungen)',
    metaTitle: 'Webentwicklung Agentur Köln – Performance & SEO | Landing Factory',
    metaDescription: 'Webentwicklung und SEO für Köln und das Rheinland: Landing Factory entwickelt schnelle, konversionsstarke Websites für mehr organischen Kundenzulauf.',
    h1: 'Webentwicklung Agentur für Köln & das Rheinland',
    kicker: 'Köln · Medien- & Wirtschaftsmetropole · Digitale Power',
    heroSubtitle: 'Köln ist ein pulsierender Knotenpunkt für Handel, Medien und Dienstleistungen. Wir sorgen dafür, dass Ihr Webauftritt im rheinischen Wettbewerb hervorsticht und messbare Anfragen generiert.',
    localNote: 'Transparenter Hinweis: Wir betreuen Kölner Unternehmen deutschlandweit von unserem Hauptsitz in Vilshofen aus – partnerschaftlich, transparent und mit schnellen Reaktionszeiten.',
    problemSolution: [
      {
        problemTitle: 'Starker Verdrängungswettbewerb im Rheinland',
        problemDesc: 'In Köln und Umgebung werben zahlreiche Anbieter um dieselben Kundenkontingente.',
        solutionTitle: 'Klarer Vorsprung durch Ladezeit und SEO-Architektur',
        solutionDesc: 'Während Mitbewerber-Websites langsam laden, bietet Ihre Website dank schlankem Code ein blitzschnelles Nutzererlebnis.'
      }
    ],
    featuresTitle: 'Webentwicklung & SEO maßgeschneidert für Köln',
    features: [
      {
        title: 'Verkaufsorientierte Webauftritte',
        description: 'Websites, die rheinische Lebensfreude mit deutscher Verlässlichkeit und klarer Handlungsaufforderung verbinden.',
        bulletPoints: ['Modernes UI/UX-Design', 'Friktionsfreie Kontaktaufnahme', 'Optimale Mobile-Darstellung']
      },
      {
        title: 'Gezieltes Rheinland-SEO',
        description: 'Optimierung für relevante Suchbegriffe in Köln, Bonn, Leverkusen und überregional.',
        bulletPoints: ['Strukturierte Geo-Signale', 'Google Unternehmensprofil Optimierung', 'Technisches On-Page SEO']
      }
    ],
    faqs: [
      {
        question: 'Wie gewährleistet Landing Factory eine reibungslose Abstimmung mit Kölner Kunden?',
        answer: 'Über digitale Kommunikationskanäle wie Video-Meetings, WhatsApp und Telefon sind wir jederzeit erreichbar und stimmen alle Schritte transparent ab.'
      }
    ],
    relatedPages: [
      { slug: 'landingpage-agentur', title: 'Landingpage Agentur', desc: 'Mehr Anfragen aus dem Rheinland generieren.' },
      { slug: 'seo-agentur', title: 'SEO Agentur', desc: 'Organisches Google-Wachstum.' }
    ]
  },

  'webentwicklung-agentur-frankfurt': {
    slug: 'webentwicklung-agentur-frankfurt',
    category: 'location',
    primaryKeyword: 'webentwicklung agentur frankfurt',
    secondaryKeywords: ['seo agentur frankfurt', 'webdesign frankfurt', 'b2b webentwicklung hessen'],
    searchIntent: 'Kommerziell & Regional (Finanz-, Beratungs- und B2B-Unternehmen im Rhein-Main-Gebiet suchen erstklassige Web-Partner)',
    metaTitle: 'Webentwicklung Agentur Frankfurt – B2B Exzellenz | Landing Factory',
    metaDescription: 'Webentwicklung und SEO für Frankfurt am Main & Rhein-Main: Seriöser Code, höchste Ladezeiten und gezielte B2B-Suchmaschinenoptimierung.',
    h1: 'Webentwicklung Agentur für Frankfurt am Main & Rhein-Main',
    kicker: 'Frankfurt · Finanzplatz & B2B-Zentrum · Höchste Ansprüche',
    heroSubtitle: 'In Frankfurt zählen Fakten, Geschwindigkeit und Professionalität. Wir entwickeln Websites und SEO-Konzepte für anspruchsvolle B2B-Dienstleister, Kanzleien und Unternehmen im Finanz- und Technologiesektor.',
    localNote: 'Transparenter Hinweis: Wir betreuen Kunden im gesamten Rhein-Main-Gebiet remote aus unserem Büro in Vilshofen (Bayern) mit höchster Zuverlässigkeit und persönlicher Beratung.',
    problemSolution: [
      {
        problemTitle: 'Mangelnde Glaubwürdigkeit durch amateurhafte Webauftritte',
        problemDesc: 'In Frankfurt entscheiden oft Nuancen über das Vertrauen finanzstarker Kunden. Ein billig wirkendes Template kostet lukrative Aufträge.',
        solutionTitle: 'Repräsentatives, kompromisslos professionelles Webdesign',
        solutionDesc: 'Hochwertige Ästhetik, klare Typografie und subtile Animationen unterstreichen Ihre B2B-Kompetenz.'
      }
    ],
    featuresTitle: 'Leistungspaket für das Rhein-Main-Gebiet',
    features: [
      {
        title: 'Sichere, wartungsarme B2B-Architekturen',
        description: 'Websites, die strengen Sicherheits- und Compliance-Standards genügen und dauerhaft stabil laufen.',
        bulletPoints: ['Verzicht auf unsichere Plugins', 'Optimale Verschlüsselung & HTTPS', 'DSGVO-konforme Formularverarbeitung']
      },
      {
        title: 'B2B-SEO für anspruchsvolle Dienstleistungen',
        description: 'Ranken Sie für spezifische Fachbegriffe, nach denen Entscheider und C-Level-Führungskräfte suchen.',
        bulletPoints: ['High-Intent Keyword-Recherche', 'Content mit fachlicher Tiefe', 'Strikte semantische Auszeichnung']
      }
    ],
    faqs: [
      {
        question: 'Erfüllen die Websites die hohen Datenschutzstandards für Beratungs- und Finanzunternehmen?',
        answer: 'Ja, wir legen größten Wert auf datenschutzkonforme Programmierung ohne ungefragte Drittanbieter-Tracker und mit sauberen Consent-Mechanismen.'
      }
    ],
    relatedPages: [
      { slug: 'webentwicklung-agentur', title: 'Webentwicklung Agentur', desc: 'Technisch erstklassiger Code.' },
      { slug: 'seo-audit-agentur', title: 'SEO Audit Agentur', desc: 'Sicherheits- und SEO-Check.' }
    ]
  },

  'webentwicklung-agentur-stuttgart': {
    slug: 'webentwicklung-agentur-stuttgart',
    category: 'location',
    primaryKeyword: 'webentwicklung agentur stuttgart',
    secondaryKeywords: ['seo agentur stuttgart', 'webdesign stuttgart', 'industrie webentwicklung baden-württemberg'],
    searchIntent: 'Kommerziell & Regional (Baden-Württembergische Industrie, Mittelstand und Tech-Unternehmen suchen Ingenieursqualität im Web)',
    metaTitle: 'Webentwicklung Agentur Stuttgart – Ingenieursqualität im Web | Landing Factory',
    metaDescription: 'Webentwicklung und SEO für Stuttgart und Baden-Württemberg: Präziser Code, maximale Performance und messbare B2B-Sichtbarkeit.',
    h1: 'Webentwicklung Agentur für Stuttgart & Baden-Württemberg',
    kicker: 'Stuttgart · Technologie- & Industrieregion · Präzision',
    heroSubtitle: 'Baden-Württemberg ist die Wiege des deutschen Erfindergeistes. Wir übertragen den baden-württembergischen Anspruch an Präzision und Effizienz in digitale Web-Lösungen und nachhaltige SEO-Rankings.',
    localNote: 'Transparenter Hinweis: Wir unterstützen innovative Unternehmen im Raum Stuttgart und Baden-Württemberg zuverlässig und remote von unserem bayerischen Standort in Vilshofen aus.',
    problemSolution: [
      {
        problemTitle: 'Technologische Exzellenz wird online nicht sichtbar',
        problemDesc: 'Viele hochspezialisierte Hidden Champions haben veraltete Webseiten, die ihre technologische Marktführerschaft nicht widerspiegeln.',
        solutionTitle: 'Digitale Präsentation auf Augenhöhe mit den Produkten',
        solutionDesc: 'Wir transformieren komplexe technische Kompetenzen in klare, verständliche und visuell beeindruckende Online-Auftritte.'
      }
    ],
    featuresTitle: 'Lösungen für Stuttgarter Unternehmen',
    features: [
      {
        title: 'Technisches SEO für Industrie & Engineering',
        description: 'Gezielte Auffindbarkeit für industrielle B2B-Suchanfragen im gesamten DACH-Raum.',
        bulletPoints: ['Fachspezifische Keyword-Cluster', 'Internationale SEO-Grundlagen', 'Google Maps Optimierung für regionale Standorte']
      },
      {
        title: 'Effiziente, modulare Code-Architektur',
        description: 'Präziser Code ohne überflüssige Ballaststoffe, der auf jedem Endgerät sofort blitzschnell reagiert.',
        bulletPoints: ['Hervorragende Core Web Vitals', 'Höchste Ladezeiten-Effizienz', 'Zukunftssichere Erweiterbarkeit']
      }
    ],
    faqs: [
      {
        question: 'Können auch mehrsprachige Webauftritte für den Export realisiert werden?',
        answer: 'Ja, wir legen Webarchitekturen so an, dass sie problemlos um weitere Sprachen und regionale Zielmärkte erweitert werden können.'
      }
    ],
    relatedPages: [
      { slug: 'individuelle-webentwicklung', title: 'Individuelle Webentwicklung', desc: 'Spezifische Anforderungen exakt umgesetzt.' },
      { slug: 'seo-agentur', title: 'SEO Agentur', desc: 'Suchmaschinen-Power für Industrie & Mittelstand.' }
    ]
  },

  // 5 SERVICE-BASED PAGES
  'individuelle-webentwicklung': {
    slug: 'individuelle-webentwicklung',
    category: 'service',
    primaryKeyword: 'individuelle webentwicklung',
    secondaryKeywords: ['custom web development', 'maßgeschneiderte website', 'programmierung nach maß', 'web app entwicklung'],
    searchIntent: 'Kommerziell (Unternehmen benötigen maßgefertigten Quellcode für spezifische Geschäftsanforderungen ohne Standard-Grenzen)',
    metaTitle: 'Individuelle Webentwicklung nach Maß | Landing Factory',
    metaDescription: 'Individuelle Webentwicklung für höchste Ansprüche: Maßgeschneiderter Code, maßgefertigte Funktionen und maximale Performance ohne Baukasten-Limits.',
    h1: 'Individuelle Webentwicklung: Maßarbeit statt Stangenware',
    kicker: 'Bespoke Development · Keine Baukasten-Grenzen',
    heroSubtitle: 'Ihr Geschäftsmodell ist einzigartig – Ihre Website sollte es auch sein. Mit individueller Webentwicklung realisieren wir exakt die Funktionen, Designs und Nutzerpfade, die Ihr Unternehmen benötigt.',
    problemSolution: [
      {
        problemTitle: 'Baukästen und CMS-Plugins stoßen an ihre Grenzen',
        problemDesc: 'Sobald ein Prozess von der Standard-Vorlage abweicht, erfordern Standard-CMS teure Frickellösungen oder sind gar nicht umsetzbar.',
        solutionTitle: 'Vollkommene gestalterische und funktionale Freiheit',
        solutionDesc: 'Wir programmieren jede Komponente bedarfsgerecht, sodass Ihre Website exakt Ihre internen Abläufe und Kundenbedürfnisse unterstützt.'
      },
      {
        problemTitle: 'Schleichender Leistungsabfall durch Plugin-Chaos',
        problemDesc: 'Dutzende installierte Erweiterungen verlangsamen die Website und führen bei jedem Systemupdate zu Inkompatibilitäten.',
        solutionTitle: 'Schlanke, autarke Programmierung',
        solutionDesc: 'Alles aus einem Guss: Weniger Codezeilen bedeuten geringere Fehleranfälligkeit, maximale Geschwindigkeit und absolute Zukunftssicherheit.'
      }
    ],
    featuresTitle: 'Was individuelle Webentwicklung bei uns umfasst',
    features: [
      {
        title: 'Maßgeschneiderte Benutzeroberflächen',
        description: 'Einzigartiges Design, das Ihre Markenidentität unverkennbar transportiert.',
        bulletPoints: ['Individuelle interaktive Komponenten', 'Passgenaue Formulare und Rechner', 'Konsistentes Look & Feel']
      },
      {
        title: 'Höchste Sicherheits- und Qualitätsstandards',
        description: 'Keine bekannten Schwachstellen vorgefertigter Open-Source-Themes.',
        bulletPoints: ['Minimale externe Angriffsfläche', 'Saubere Eingabevalidierung', 'Strikte Trennung von Daten und Darstellung']
      }
    ],
    faqs: [
      {
        question: 'Ist individuelle Webentwicklung deutlich teurer als ein Baukasten?',
        answer: 'Die anfängliche Investition ist etwas höher als bei einem billigen Baukasten. Betrachtet man jedoch die dauerhafte Stabilität, wegfallende Plugin-Abokosten, höhere Conversion-Raten und ausbleibende Wartungskrisen, ist individuelle Entwicklung langfristig oft die wirtschaftlichere Wahl.'
      }
    ],
    relatedPages: [
      { slug: 'webentwicklung-agentur', title: 'Webentwicklung Agentur', desc: 'Unsere Arbeitsweise im Überblick.' },
      { slug: 'landingpage-agentur', title: 'Landingpage Agentur', desc: 'Fokussierte Zielseiten entwickeln.' }
    ]
  },

  'local-seo-agentur': {
    slug: 'local-seo-agentur',
    category: 'service',
    primaryKeyword: 'local seo agentur',
    secondaryKeywords: ['lokale suchmaschinenoptimierung', 'google maps optimierung', 'google unternehmensprofil agentur', 'regionales seo'],
    searchIntent: 'Kommerziell & Transaktional (Lokale Dienstleister, Handwerker und Praxen wollen im Google Local Pack auf Position 1 stehen)',
    metaTitle: 'Local SEO Agentur – Google Maps & Lokale Suche | Landing Factory',
    metaDescription: 'Local SEO Agentur für maximale regionale Sichtbarkeit: Google Maps Optimierung, Google Unternehmensprofil und regionale Landingpages für mehr Kunden vor Ort.',
    h1: 'Local SEO Agentur: Dominieren Sie die lokale Google-Suche & Maps',
    kicker: 'Regionale Sichtbarkeit · Google Maps · Lokale Kunden',
    heroSubtitle: 'Wenn Kunden in Ihrer Region nach Ihren Leistungen suchen, müssen Sie im Google Local Pack ganz oben stehen. Wir optimieren Ihr Google Unternehmensprofil und Ihre Website für maximale lokale Neukundengewinnung.',
    localNote: 'Praxisbeispiel Niederbayern: Wir optimieren lokale und regionale Sichtbarkeiten für Unternehmen in Vilshofen, Passau, Landshut, Rottal-Inn und ganz Deutschland.',
    problemSolution: [
      {
        problemTitle: 'Mitbewerber stehen im Google Local Pack vor Ihnen',
        problemDesc: 'Kunden rufen den erstbesten Treffer auf Google Maps an – wer nicht unter den Top 3 ist, existiert lokal praktisch nicht.',
        solutionTitle: 'Systematische Optimierung lokaler Relevanzsignale',
        solutionDesc: 'Wir optimieren Kategorien, Beschreibungen, Öffnungszeiten, Standort-Keywords und Google-Signale für verlässliche Top-Platzierungen.'
      },
      {
        problemTitle: 'Unvollständige oder widersprüchliche Adressdaten (NAP-Inkonsistenz)',
        problemDesc: 'Weichen Name, Adresse oder Telefonnummer im Web voneinander ab, straft Google den Standort mit schlechteren Rängen ab.',
        solutionTitle: 'Strikte NAP-Konsistenz & Schema.org LocalBusiness Markup',
        solutionDesc: 'Wir stellen sicher, dass Ihre Daten überall exakt übereinstimmen und strukturierte Daten den Suchmaschinen glasklare Signale liefern.'
      }
    ],
    featuresTitle: 'Leistungsbausteine unserer Local SEO Optimierung',
    features: [
      {
        title: 'Google Unternehmensprofil (ehemals Google My Business)',
        description: 'Vollständige professionelle Einrichtung und laufende Pflege Ihres Profils.',
        bulletPoints: ['Optimale Primär- und Sekundärkategorien', 'Suchbegriff-optimierte Unternehmensbeschreibung', 'Einbindung von Leistungs- und Produktkatalogen']
      },
      {
        title: 'Regionale Landingpage-Konzepte',
        description: 'Erstellung relevanter Unterseiten für bediente Einzugsgebiete ohne Duplicate Content.',
        bulletPoints: ['Lokale Keyword-Kombinationen', 'Echte Mehrwerte für lokale Kunden', 'Klare Klick-to-Call und WhatsApp-Anbindungen']
      }
    ],
    faqs: [
      {
        question: 'Wie schnell wirkt lokale Suchmaschinenoptimierung?',
        answer: 'Lokale Signale werden von Google oft schneller verarbeitet als überregionale Keywords. Häufig sind erste Verbesserungen im Local Pack bereits nach 4–8 Wochen spürbar.'
      }
    ],
    relatedPages: [
      { slug: 'seo-agentur', title: 'SEO Agentur', desc: 'Überregionales SEO im Vergleich.' },
      { slug: 'seo-audit-agentur', title: 'SEO Audit Agentur', desc: 'Lokalen Ist-Zustand prüfen lassen.' }
    ]
  },

  'shopify-seo-agentur': {
    slug: 'shopify-seo-agentur',
    category: 'service',
    primaryKeyword: 'shopify seo agentur',
    secondaryKeywords: ['shopify agentur', 'shopify suchmaschinenoptimierung', 'e-commerce seo', 'shopify speed optimierung'],
    searchIntent: 'Kommerziell (Shop-Betreiber wollen organische Umsätze steigern und Abhängigkeit von teuren Social- und Search-Ads verringern)',
    metaTitle: 'Shopify SEO Agentur – Mehr organischer Umsatz | Landing Factory',
    metaDescription: 'Shopify SEO Agentur für E-Commerce: Kategorieseiten-Optimierung, strukturierte Daten für Google Shopping und technische Speed-Optimierung für Shopify.',
    h1: 'Shopify SEO Agentur: Organische Kaufsignale & steigende Shop-Umsätze',
    kicker: 'E-Commerce SEO · Shopify Optimierung · Mehr Marge',
    heroSubtitle: 'Steigende Klickpreise bei Meta und Google Ads fressen Ihre Shop-Marge auf. Wir optimieren Ihren Shopify-Store so, dass kaufbereite Kunden Ihre Produkte organisch über die Google-Suche finden und kaufen.',
    problemSolution: [
      {
        problemTitle: 'Doppelter Content durch Shopifys URL-Struktur',
        problemDesc: 'Standardmäßig erzeugt Shopify URLs wie /collections/.../products/..., was ohne saubere Canonical-Steuerung zu schwerem Duplicate Content führt.',
        solutionTitle: 'Beseitigung von Canonical- und Pagination-Problemen',
        solutionDesc: 'Wir bereinigen die interne Shopify-Verlinkung, sodass Google stets die kanonische Haupt-URL indexiert und wertvolles Ranking-Potenzial bündelt.'
      },
      {
        problemTitle: 'Schwache Kategorieseiten ohne echten Textinhalt',
        problemDesc: 'Reine Produktgitter ranken bei wettbewerbsintensiven Suchbegriffen nicht, weil Google thematische Relevanz fehlt.',
        solutionTitle: 'SEO-starke Kategorieseiten mit Mehrwert',
        solutionDesc: 'Wir strukturieren Kategorieseiten mit gezielten Infotexten, FAQs und Filter-Optimierungen ohne den Kaufabschluss zu behindern.'
      }
    ],
    featuresTitle: 'Spezifische Maßnahmen für Ihren Shopify-Store',
    features: [
      {
        title: 'Strukturierte Daten für Produkte & Rich Snippets',
        description: 'Auszeichnung von Preisen, Verfügbarkeiten und Produkt-Attributen für auffällige Google-Ergebnisse.',
        bulletPoints: ['JSON-LD Product & Offer Schema', 'Optimierte Vorschau in den Suchergebnissen', 'Vermeidung von Merchant-Center Fehlern']
      },
      {
        title: 'Shopify Speed & Core Web Vitals Optimierung',
        description: 'Beseitigung von Code-Altlasten gelöschter Shopify-Apps und Asset-Komprimierung.',
        bulletPoints: ['Liquid-Code Bereinigung', 'Optimierung von Lazy-Loading und Bildformaten', 'Bessere Conversion-Raten durch schnelle Ladezeiten']
      }
    ],
    faqs: [
      {
        question: 'Kann SEO in Shopify trotz der vorgegebenen URL-Struktur erfolgreich sein?',
        answer: 'Absolut. Zwar hat Shopify gewisse starre URL-Pfade (/products/, /collections/), doch durch saubere Canonical-Konfiguration, optimierte Kategorieseiten und erstklassiges Content-Design lassen sich hervorragende Top-Rankings erzielen.'
      }
    ],
    relatedPages: [
      { slug: 'seo-agentur', title: 'SEO Agentur', desc: 'Allgemeine SEO-Grundlagen.' },
      { slug: 'landingpage-agentur', title: 'Landingpage Agentur', desc: 'Verkaufsseiten für Bestseller-Produkte.' }
    ]
  },

  'landingpage-agentur': {
    slug: 'landingpage-agentur',
    category: 'service',
    primaryKeyword: 'landingpage agentur',
    secondaryKeywords: ['landingpage optimierung agentur', 'conversion rate optimierung', 'lead landingpage erstellen', 'verkaufsseite erstellen'],
    searchIntent: 'Kommerziell & Transaktional (Werbetreibende und Vertriebsleiter wollen aus Besuchern maximale Leads und Anfragen generieren)',
    metaTitle: 'Landingpage Agentur – Maximale Conversion & Leads | Landing Factory',
    metaDescription: 'Professionelle Landingpage Agentur: Verkaufspsychologisch optimierte Zielseiten, die Besucher in qualifizierte Kundenanfragen verwandeln.',
    h1: 'Landingpage Agentur: Zielseiten, die aus Klicks echte Kunden machen',
    kicker: 'Conversion Optimization · Lead-Maschinen · Verkaufspsychologie',
    heroSubtitle: 'Landing Factory trägt die Landingpage nicht umsonst im Namen: Wir konzipieren und programmieren fokussierte Zielseiten, die Einwände abbauen, Vertrauen stiften und die Conversion Rate Ihrer Kampagnen maximieren.',
    problemSolution: [
      {
        problemTitle: 'Traffic verpufft auf unübersichtlichen Startseiten',
        problemDesc: 'Wer bezahlte Werbung oder SEO-Traffic auf eine allgemeine Homepage leitet, verliert bis zu 80% der Interessenten durch mangelnden Fokus.',
        solutionTitle: 'Fokussierte One-Problem-One-Solution Zielseiten',
        solutionDesc: 'Jede Landingpage widmet sich exakt dem Bedürfnis, nach dem der Nutzer gesucht hat – ohne ablenkende Navigation oder irrelevante Nebenschauplätze.'
      },
      {
        problemTitle: 'Lange, komplizierte Formulare schrecken Nutzer ab',
        problemDesc: 'Zu viele Pflichtfelder und umständliche Bedienung führen zu hohen Absprungraten kurz vor dem Ziel.',
        solutionTitle: 'Friktionsfreie, intuitive Anfragepfade',
        solutionDesc: 'Wir gestalten Kontaktformulare und direkte WhatsApp-Wege so einfach und sympathisch, dass Interessenten gerne anfragen.'
      }
    ],
    featuresTitle: 'Die Anatomie einer erfolgreichen Landingpage',
    features: [
      {
        title: 'Verkaufspsychologische Hero-Section',
        description: 'Ein glasklares Nutzenversprechen, das innerhalb von 3 Sekunden klarmacht: Was habe ich davon?',
        bulletPoints: ['Starke, unmissverständliche Headline', 'Relevantes visuelles Hero-Element', 'Sofort sichtbarer primärer Call-to-Action']
      },
      {
        title: 'Strukturierter Vertrauensaufbau',
        description: 'Gezielte Platzierung von Referenzen, Zertifikaten, Leistungsnachweisen und FAQ.',
        bulletPoints: ['Beseitigung typischer Kaufbedenken', 'Transparente Leistungsauflistung', 'Menschliche, nahbare Ansprache']
      }
    ],
    faqs: [
      {
        question: 'Eignen sich Landingpages für Google Ads oder für SEO?',
        answer: 'Für beides! Spezifische SEO-Landingpages fangen Nischen-Suchbegriffe mit hoher Kaufabsicht organisch ab, während Paid-Ads-Landingpages für maximale Konversionsraten bei bezahlten Kampagnen sorgen.'
      }
    ],
    relatedPages: [
      { slug: 'webentwicklung-agentur', title: 'Webentwicklung Agentur', desc: 'Technischer Unterbau für Ihre Seiten.' },
      { slug: 'seo-marketing-agentur', title: 'SEO Marketing Agentur', desc: 'Inbound-Traffic gezielt leiten.' }
    ]
  },

  'seo-audit-agentur': {
    slug: 'seo-audit-agentur',
    category: 'service',
    primaryKeyword: 'seo audit agentur',
    secondaryKeywords: ['website analyse agentur', 'technisches seo audit', 'core web vitals check', 'google ranking analyse'],
    searchIntent: 'Kommerziell & Analytisch (Unternehmen wollen exakt wissen, warum ihre Website nicht rankt und wo Optimierungshebel liegen)',
    metaTitle: 'SEO Audit Agentur – Tiefgehende Website- & Ranking-Analyse | Landing Factory',
    metaDescription: 'SEO Audit Agentur für fundierte Analysen: Wir decken technische Fehler, Ladezeitbremsen, Content-Lücken und Indexierungsprobleme schonungslos auf.',
    h1: 'SEO Audit Agentur: Fundierte Analyse statt oberflächlicher Tools',
    kicker: 'Tiefenprüfung · Fehleranalyse · Konkreter Maßnahmenplan',
    heroSubtitle: 'Warum stagniert Ihr Google-Traffic? Ein fundierter SEO Audit von Landing Factory deckt die wahren Ursachen auf – von fehlerhafter Indexierung und Canonical-Konflikten bis hin zu Core Web Vitals Bremsen.',
    problemSolution: [
      {
        problemTitle: 'Oberflächliche Standard-Reports automatischer Tools',
        problemDesc: 'Viele kostenlose Tool-Checks spucken 50 Seiten generische PDF-Tabellen aus, die niemand versteht und die keine Prioritäten setzen.',
        solutionTitle: 'Manuelle Expertenanalyse mit priorisierter Roadmap',
        solutionDesc: 'Wir bewerten gefundene Punkte nach geschäftlicher Auswirkung und liefern einen glasklaren, praxisnahen Maßnahmenkatalog.'
      },
      {
        problemTitle: 'Unbemerkte technische Barrieren verhindern Google-Rankings',
        problemDesc: 'Falsche Noindex-Tags, fehlerhafte Robots.txt-Einträge oder Redirect-Schleifen sperren Google-Crawler unbemerkt aus.',
        solutionTitle: 'Vollständige Prüfung der technischen Indexierbarkeit',
        solutionDesc: 'Wir überprüfen den HTTP-Status, Server-Antwortzeiten, JavaScript-Rendering und XML-Sitemaps auf Herz und Nieren.'
      }
    ],
    featuresTitle: 'Prüfdimensionen unseres SEO Audits',
    features: [
      {
        title: 'Technisches SEO & Indexierung',
        description: 'Robots.txt, XML-Sitemap, 301/404 Statuscodes, Canonical-Tags und HTTPS-Sicherheit.',
        bulletPoints: ['Aufdecken verwaister Seiten (Orphan Pages)', 'Vermeidung von Crawl-Budget Verschwendung', 'Prüfung strukturierter Daten (Schema.org)']
      },
      {
        title: 'Core Web Vitals & Ladezeit-Messung',
        description: 'Detaillierte Analyse von LCP (Largest Contentful Paint), CLS (Cumulative Layout Shift) und INP.',
        bulletPoints: ['Asset-Größen und Script-Laufzeiten', 'Optimierungspotenziale bei Bildern und Fonts', 'Mobile Usability Prüfung']
      },
      {
        title: 'On-Page Content & Keyword-Architektur',
        description: 'Analyse auf Keyword-Kannibalisierung, Textqualität, Überschriftenhierarchien und interne Verlinkung.',
        bulletPoints: ['Identifikation dünner Inhalte (Thin Content)', 'Optimierungspotenzial für Snippets (Title/Meta)', 'Konkreter Umsetzungsleitfaden']
      }
    ],
    faqs: [
      {
        question: 'Was kostet ein SEO Audit und was erhalte ich als Ergebnis?',
        answer: 'Nach einer Vorprüfung Ihrer Domain erhalten Sie ein transparentes Festpreisangebot. Als Ergebnis bekommen Sie einen verständlichen Analysebericht mit konkreter Prioritätenliste – von kritischen Sofortmaßnahmen bis zu strategischen Ausbauchancen.'
      }
    ],
    relatedPages: [
      { slug: 'seo-agentur', title: 'SEO Agentur', desc: 'Die anschließende Umsetzung begleiten.' },
      { slug: 'webentwicklung-agentur', title: 'Webentwicklung Agentur', desc: 'Gefundene Codefehler fachgerecht beheben.' }
    ]
  },

  // SUPPORTING & LEGAL PAGES
  'ueber-uns': {
    slug: 'ueber-uns',
    category: 'supporting',
    primaryKeyword: 'über landing factory',
    secondaryKeywords: ['werner polatschek', 'webagentur niederbayern', 'philosophie webentwicklung'],
    searchIntent: 'Informationell (Besucher möchten mehr über die Menschen, Werte und Arbeitsweise von Landing Factory erfahren)',
    metaTitle: 'Über uns – Landing Factory & Werner Polatschek | Vilshofen',
    metaDescription: 'Lernen Sie Landing Factory kennen: Inhaber Werner Polatschek steht für handwerkliche Programmierqualität, ehrliches SEO und persönliche Betreuung aus Niederbayern.',
    h1: 'Über Landing Factory: Handwerkliche Präzision im Web',
    kicker: 'Über uns · Werte · Inhabergeführt',
    heroSubtitle: 'Wir glauben, dass erfolgreiche Websites auf zwei unverhandelbaren Säulen ruhen: Technisch exzellenter, schlanker Code und fundierte, ehrliche Suchmaschinenoptimierung.',
    problemSolution: [
      {
        problemTitle: 'Unpersönliche Großagenturen mit ständig wechselnden Kontakten',
        problemDesc: 'Bei großen Agenturen landet man nach dem Verkaufsgespräch oft bei unerfahrenen Junioren.',
        solutionTitle: 'Inhabergeführte Betreuung durch Werner Polatschek',
        solutionDesc: 'Sie sprechen direkt mit dem Macher. Klare Zusagen, kurze Wege und echte Verbindlichkeit.'
      }
    ],
    featuresTitle: 'Unsere Grundwerte & Arbeitsprinzipien',
    features: [
      {
        title: 'Kein Baukasten-Pfusch',
        description: 'Wir programmieren sauberen, standardkonformen Code, der schnell lädt und dauerhaft erweiterbar bleibt.',
        bulletPoints: ['Schlanker, moderner Tech-Stack', 'Verzicht auf überflüssige Abhängigkeiten', 'Volle Kontrolle über die eigene Website']
      },
      {
        title: 'Ehrliches, nachhaltiges SEO',
        description: 'Wir verkaufen keine dubiosen Ranking-Garantien, sondern liefern fundierte, datengestützte Suchmaschinenoptimierung nach Google-Richtlinien.',
        bulletPoints: ['Fokus auf qualifizierte B2B-Anfragen', 'Saubere Informationsarchitektur', 'Transparente Arbeitsweise']
      }
    ],
    faqs: [
      {
        question: 'Wo befindet sich der Firmensitz von Landing Factory?',
        answer: 'Unser Firmensitz ist in Bürg 20, 94474 Vilshofen an der Donau in Niederbayern. Wir arbeiten für Kunden in ganz Deutschland, Österreich und der Schweiz.'
      }
    ],
    relatedPages: [
      { slug: 'kontakt', title: 'Kontakt aufnehmen', desc: 'Starten Sie jetzt Ihr Projekt.' },
      { slug: 'webentwicklung-agentur', title: 'Webentwicklung Agentur', desc: 'Erfahren Sie mehr über unsere Leistungen.' }
    ]
  },

  'kontakt': {
    slug: 'kontakt',
    category: 'supporting',
    primaryKeyword: 'kontakt landing factory',
    secondaryKeywords: ['werner polatschek kontakt', 'webentwicklung anfrage', 'seo agentur termin'],
    searchIntent: 'Transaktional (Direkte Kontaktaufnahme für Projektanfragen, Beratung oder Termine)',
    metaTitle: 'Kontakt – Sprechen Sie mit Landing Factory | Vilshofen & Deutschland',
    metaDescription: 'Kontaktieren Sie Landing Factory: Telefon +49 176 29862291, WhatsApp oder Kontaktformular. Wir beraten Sie unverbindlich zu Ihrem Web- und SEO-Projekt.',
    h1: 'Kontaktieren Sie Landing Factory: Wir freuen uns auf Ihr Projekt',
    kicker: 'Kontakt · Unverbindliche Erstberatung · Direkter Draht',
    heroSubtitle: 'Ob Neuentwicklung, technischer Relaunch oder organisches Google-Wachstum: Lassen Sie uns unverbindlich über Ihre Ziele sprechen. Wir melden uns verlässlich innerhalb von 24 Stunden.',
    problemSolution: [],
    featuresTitle: 'Ihre direkten Kontaktwege',
    features: [
      {
        title: 'Direkt per WhatsApp oder Telefon',
        description: 'Schnelle Antworten auf Ihre Fragen ohne bürokratische Hürden.',
        bulletPoints: ['Telefon: +49 176 29862291', 'WhatsApp-Chat mit einem Klick', 'E-Mail: die@landing-factory.de']
      },
      {
        title: 'Persönliche Projektberatung',
        description: 'Wir analysieren Ihren aktuellen Webauftritt und geben Ihnen eine ehrliche Einschätzung.',
        bulletPoints: ['Kostenloses telefonisches Erstgespräch', 'Klare Einschätzung von Aufwand & Machbarkeit', 'Verbindliches Festpreisangebot nach Absprache']
      }
    ],
    faqs: [
      {
        question: 'Wie schnell erhalte ich eine Rückmeldung auf meine Anfrage?',
        answer: 'Wir antworten in der Regel innerhalb weniger Stunden, spätestens jedoch am nächsten Werktag.'
      }
    ],
    relatedPages: [
      { slug: 'ueber-uns', title: 'Über uns', desc: 'Erfahren Sie mehr über Landing Factory.' },
      { slug: 'faq', title: 'Häufig gestellte Fragen', desc: 'Antworten auf typische Kundenfragen.' }
    ]
  },

  'faq': {
    slug: 'faq',
    category: 'supporting',
    primaryKeyword: 'faq webentwicklung und seo',
    secondaryKeywords: ['fragen webentwicklung agentur', 'fragen seo agentur kosten', 'ablauf website projekt'],
    searchIntent: 'Informationell (Wissbegierige Interessenten suchen Antworten auf Kosten, Abläufe und Garantien)',
    metaTitle: 'FAQ – Häufige Fragen zu Webentwicklung & SEO | Landing Factory',
    metaDescription: 'Antworten auf häufig gestellte Fragen zu Webentwicklung, Kosten, Projektabläufen und Suchmaschinenoptimierung bei Landing Factory.',
    h1: 'Häufig gestellte Fragen (FAQ) zu Webentwicklung & SEO',
    kicker: 'Wissenswertes · Transparenz · Antworten',
    heroSubtitle: 'Transparenz ist das Fundament einer vertrauensvollen Zusammenarbeit. Hier beantworten wir die häufigsten Fragen unserer Kunden zu Projektabläufen, Technologien, SEO und Kosten.',
    problemSolution: [],
    featuresTitle: 'Kategorien unserer Fragen & Antworten',
    features: [
      {
        title: 'Projektablauf & Zusammenarbeit',
        description: 'Wie läuft die Konzeption ab, wie viel Zeit müssen Sie einplanen und wie werden Abstimmungen durchgeführt?',
        bulletPoints: ['Strukturierte Phasen vom Kickoff bis zum Go-Live', 'Volle Transparenz zu jedem Zeitpunkt', 'Feste Ansprechpartner']
      },
      {
        title: 'SEO, Rankings & Google-Indexierung',
        description: 'Was kann Suchmaschinenoptimierung leisten, wann sind erste Effekte spürbar und wie messen wir den Erfolg?',
        bulletPoints: ['Fokus auf qualifizierte Anfragen', 'Verständliche Search Console Kennzahlen', 'White-Hat Methoden']
      }
    ],
    faqs: [
      {
        question: 'Wie viel kostet eine professionelle Website bei Landing Factory?',
        answer: 'Die Kosten hängen vom gewünschten Funktionsumfang, der Anzahl der Unterseiten und den SEO-Anforderungen ab. Nach einem kurzen Kennenlerngespräch erhalten Sie ein detailliertes und verbindliches Festpreisangebot ohne versteckte Kosten.'
      },
      {
        question: 'Kann ich Inhalte später selbst anpassen?',
        answer: 'Ja, wir können die Seite so strukturieren, dass Sie Textänderungen, neue Angebote oder Blogbeiträge unkompliziert selbst pflegen können.'
      },
      {
        question: 'Welche Rolle spielt die Ladegeschwindigkeit für SEO?',
        answer: 'Eine elementare Rolle. Google hat die Core Web Vitals zu einem offiziellen Rankingfaktor gemacht. Langsame Websites werden nicht nur schlechter gerankt, sondern verlieren auch bis zu 40% der Besucher vor der Interaktion.'
      },
      {
        question: 'Bieten Sie auch laufende Wartung und SEO-Betreuung an?',
        answer: 'Ja, wir bieten flexible Betreuungspakete für laufende technische Updates, Sicherheitsüberwachung und kontinuierlichen SEO-Ausbau.'
      }
    ],
    relatedPages: [
      { slug: 'kontakt', title: 'Frage nicht dabei? Kontaktieren Sie uns!', desc: 'Wir beantworten Ihre individuelle Frage gerne direkt.' }
    ]
  },

  'impressum': {
    slug: 'impressum',
    category: 'legal',
    primaryKeyword: 'impressum landing factory',
    secondaryKeywords: ['angaben gemäß § 5 tmg', 'werner polatschek impressum'],
    searchIntent: 'Navigational & Rechtlich',
    metaTitle: 'Impressum – Gesetzliche Anbieterkennzeichnung | Landing Factory',
    metaDescription: 'Gesetzlich vorgeschriebenes Impressum von Landing Factory, Inhaber Werner Polatschek, Bürg 20, 94474 Vilshofen, Deutschland.',
    h1: 'Impressum',
    kicker: 'Gesetzliche Anbieterkennzeichnung nach § 5 TMG / DDG',
    heroSubtitle: 'Verantwortlich für den Inhalt nach § 5 TMG / § 18 Abs. 2 MStV.',
    problemSolution: [],
    featuresTitle: 'Rechtliche Angaben',
    features: [
      {
        title: 'Angaben gemäß § 5 TMG / Digitale-Dienste-Gesetz (DDG)',
        description: 'Landing Factory\nInhaber: Werner Polatschek\nBürg 20\n94474 Vilshofen\nDeutschland',
        bulletPoints: ['Telefon: +49 176 29862291', 'E-Mail: die@landing-factory.de', 'Website: https://www.landing-factory.de']
      },
      {
        title: 'Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV',
        description: 'Werner Polatschek\nBürg 20\n94474 Vilshofen\nDeutschland',
        bulletPoints: ['Inhaltlich Verantwortlicher: Werner Polatschek']
      },
      {
        title: 'EU-Streitschlichtung & Verbraucherstreitbeilegung',
        description: 'Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: https://ec.europa.eu/consumers/odr/.\nWir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.',
        bulletPoints: []
      }
    ],
    faqs: [],
    relatedPages: [
      { slug: 'datenschutz', title: 'Datenschutzerklärung', desc: 'Informationen zur Verarbeitung personenbezogener Daten.' }
    ]
  },

  'datenschutz': {
    slug: 'datenschutz',
    category: 'legal',
    primaryKeyword: 'datenschutzerklärung landing factory',
    secondaryKeywords: ['datenschutz dsgvo', 'privatsphäre landing factory'],
    searchIntent: 'Navigational & Rechtlich',
    metaTitle: 'Datenschutzerklärung – Schutz Ihrer Daten | Landing Factory',
    metaDescription: 'Datenschutzerklärung von Landing Factory gemäß DSGVO: Transparente Informationen über die Erhebung und Speicherung personenbezogener Daten.',
    h1: 'Datenschutzerklärung',
    kicker: 'Datenschutz nach DSGVO & TDDDG',
    heroSubtitle: 'Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen. Wir verarbeiten personenbezogene Daten stets im Einklang mit der Datenschutz-Grundverordnung (DSGVO).',
    problemSolution: [],
    featuresTitle: 'Datenschutz-Informationen im Detail',
    features: [
      {
        title: '1. Verantwortliche Stelle',
        description: 'Verantwortlich für die Datenverarbeitung auf dieser Website ist:\nWerner Polatschek, Landing Factory, Bürg 20, 94474 Vilshofen, Deutschland. E-Mail: die@landing-factory.de, Telefon: +49 176 29862291.',
        bulletPoints: []
      },
      {
        title: '2. Erhebung und Speicherung personenbezogener Daten',
        description: 'Beim Besuch unserer Website erheben wir nur die Daten, die Ihr Browser technisch übermittelt (Server-Logfiles: IP-Adresse, Datum, Uhrzeit, abgerufene Seite). Bei Kontaktaufnahme per E-Mail, Telefon oder Formular speichern wir Ihre Angaben zur Bearbeitung der Anfrage (Art. 6 Abs. 1 lit. b DSGVO).',
        bulletPoints: ['Zweckgebundene Verarbeitung', 'Keine Weitergabe an unbefugte Dritte', 'Löschung nach Wegfall des Verarbeitungszwecks']
      },
      {
        title: '3. Ihre Rechte als betroffene Person',
        description: 'Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten.',
        bulletPoints: ['Recht auf Auskunft (Art. 15 DSGVO)', 'Recht auf Berichtigung (Art. 16 DSGVO)', 'Recht auf Löschung (Art. 17 DSGVO)', 'Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)']
      }
    ],
    faqs: [],
    relatedPages: [
      { slug: 'impressum', title: 'Impressum', desc: 'Gesetzliche Anbieterkennzeichnung.' }
    ]
  }
};

// Summary list of the 21 Core SEO Pages
export const CORE_21_PAGES = [
  { slug: '', title: 'Hauptseite (Webentwicklung und SEO Agentur)', category: '1 Hauptseite', keyword: 'webentwicklung und seo agentur' },
  { slug: 'webentwicklung-agentur', title: 'Webentwicklung Agentur', category: '10 Keyword-Seiten', keyword: 'webentwicklung agentur' },
  { slug: 'agentur-fuer-webentwicklung', title: 'Agentur für Webentwicklung', category: '10 Keyword-Seiten', keyword: 'agentur für webentwicklung' },
  { slug: 'agentur-webentwicklung', title: 'Agentur Webentwicklung', category: '10 Keyword-Seiten', keyword: 'agentur webentwicklung' },
  { slug: 'webentwickler-agentur', title: 'Webentwickler Agentur', category: '10 Keyword-Seiten', keyword: 'webentwickler agentur' },
  { slug: 'webdesign-agentur', title: 'Webdesign Agentur', category: '10 Keyword-Seiten', keyword: 'webdesign agentur' },
  { slug: 'webentwicklung-und-webdesign', title: 'Webentwicklung und Webdesign', category: '10 Keyword-Seiten', keyword: 'webentwicklung und webdesign' },
  { slug: 'seo-agentur', title: 'SEO Agentur', category: '10 Keyword-Seiten', keyword: 'seo agentur' },
  { slug: 'agentur-fuer-seo', title: 'Agentur für SEO', category: '10 Keyword-Seiten', keyword: 'agentur für seo' },
  { slug: 'seo-marketing-agentur', title: 'SEO Marketing Agentur', category: '10 Keyword-Seiten', keyword: 'seo marketing agentur' },
  { slug: 'online-agentur', title: 'Online Agentur', category: '10 Keyword-Seiten', keyword: 'online agentur' },
  { slug: 'webentwicklung-agentur-berlin', title: 'Webentwicklung Agentur Berlin', category: '5 Standort-Seiten', keyword: 'webentwicklung agentur berlin' },
  { slug: 'webentwicklung-agentur-muenchen', title: 'Webentwicklung Agentur München', category: '5 Standort-Seiten', keyword: 'webentwicklung agentur münchen' },
  { slug: 'webentwicklung-agentur-koeln', title: 'Webentwicklung Agentur Köln', category: '5 Standort-Seiten', keyword: 'webentwicklung agentur köln' },
  { slug: 'webentwicklung-agentur-frankfurt', title: 'Webentwicklung Agentur Frankfurt', category: '5 Standort-Seiten', keyword: 'webentwicklung agentur frankfurt' },
  { slug: 'webentwicklung-agentur-stuttgart', title: 'Webentwicklung Agentur Stuttgart', category: '5 Standort-Seiten', keyword: 'webentwicklung agentur stuttgart' },
  { slug: 'individuelle-webentwicklung', title: 'Individuelle Webentwicklung', category: '5 Service-Seiten', keyword: 'individuelle webentwicklung' },
  { slug: 'local-seo-agentur', title: 'Local SEO Agentur', category: '5 Service-Seiten', keyword: 'local seo agentur' },
  { slug: 'shopify-seo-agentur', title: 'Shopify SEO Agentur', category: '5 Service-Seiten', keyword: 'shopify seo agentur' },
  { slug: 'landingpage-agentur', title: 'Landingpage Agentur', category: '5 Service-Seiten', keyword: 'landingpage agentur' },
  { slug: 'seo-audit-agentur', title: 'SEO Audit Agentur', category: '5 Service-Seiten', keyword: 'seo audit agentur' }
];
