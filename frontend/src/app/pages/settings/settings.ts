import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { Users } from './users/users';
import { SelectModule } from 'primeng/select';

@Component({
  selector: 'app-settings',
  imports: [CardModule, Users, SelectModule, FormsModule],
  templateUrl: './settings.html',
  styleUrl: './settings.scss',
})
export class Settings {

  currencies = [
    { label: 'USD', value: 'USD' },
    { label: 'EUR', value: 'EUR' },
    { label: 'GBP', value: 'GBP' },
  ];

  selectedCurrency = this.currencies[0].value;
}
