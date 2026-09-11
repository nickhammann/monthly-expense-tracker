export type Language = 'de' | 'en';

//übersetzungen für die deutsche Sprache
const de = {
  nav: {
    dashboard: 'Übersicht',
    recurring: 'Wiederkehrende Kosten',
    one_time_costs: 'Einmalige Kosten',
    settings: 'Einstellungen',
  },
  account: {
    label: 'Konto',
  },
};

export type Translation = typeof de;

//übersetzungen für die englische Sprache
const en: Translation = {
  nav: {
    dashboard: 'Dashboard',
    recurring: 'Recurring Costs',
    one_time_costs: 'One-time Costs',
    settings: 'Settings',
  },
  account: {
    label: 'Account',
  },
};

export const TRANSLATIONS: Record<Language, Translation> = { de, en };

export const DEFAULT_LANGUAGE: Language = 'de';
