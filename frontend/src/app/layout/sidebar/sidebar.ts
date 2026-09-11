import { Component, computed, inject } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Avatar } from 'primeng/avatar';
import { Menu } from 'primeng/menu';

import { APP_INFO } from '../../core/config/app-info';
import { TranslationService } from '../../core/i18n/translation.service';

@Component({
  selector: 'app-sidebar',
  imports: [Menu, Avatar],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  private readonly translations = inject(TranslationService);

  protected readonly appInfo = APP_INFO;
  protected readonly t = this.translations.t;

  protected readonly items = computed<MenuItem[]>(() => {
    const nav = this.t().nav;

    return [
      { label: nav.dashboard, icon: 'pi pi-chart-bar', routerLink: '/', routerLinkActiveOptions: { exact: true } },
      { label: nav.recurring, icon: 'pi pi-refresh', routerLink: '/recurring' },
      { label: nav.one_time_costs, icon: 'pi pi-euro', routerLink: '/one-time-costs' },
      { label: nav.settings, icon: 'pi pi-cog', routerLink: '/settings' },
    ];
  });
}
