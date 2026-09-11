import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Sidebar } from './layout/sidebar/sidebar';
import { TopNav } from './layout/top-nav/top-nav';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Sidebar, TopNav],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('frontend');
}
