import { Injectable, computed, signal } from '@angular/core';

import { DEFAULT_LANGUAGE, Language, TRANSLATIONS } from './translations';

@Injectable({ providedIn: 'root' })
export class TranslationService {
  private readonly currentLanguage = signal<Language>(DEFAULT_LANGUAGE);

  /** Aktuell gewählte Sprache, nur lesbar von außen. */
  readonly language = this.currentLanguage.asReadonly();

  /** Übersetzungen der aktuellen Sprache. In computed()/Templates verwenden. */
  readonly t = computed(() => TRANSLATIONS[this.currentLanguage()]);

  setLanguage(language: Language): void {
    this.currentLanguage.set(language);
  }
}
