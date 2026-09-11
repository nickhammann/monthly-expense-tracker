import { Component } from '@angular/core';

import { APP_INFO } from '../../core/config/app-info';

@Component({
  selector: 'app-top-nav',
  imports: [],
  templateUrl: './top-nav.html',
  styleUrl: './top-nav.scss',
})
export class TopNav {
  protected readonly appInfo = APP_INFO;
}
