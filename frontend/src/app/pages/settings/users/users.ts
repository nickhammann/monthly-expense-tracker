import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ToggleSwitchModule } from 'primeng/toggleswitch';

import { UserService } from '../../../core/services/user.service';
import { ExpenseUser } from '../../../core/model/user.model';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    AsyncPipe,
    FormsModule,
    TableModule,
    InputTextModule,
    ButtonModule,
    ToggleSwitchModule
  ],
  templateUrl: './users.html',
  styleUrl: './users.scss'
})
export class Users {
  constructor(private readonly userService: UserService) {}

  get users$() {
    return this.userService.users$;
  }

  private originalUser: ExpenseUser | null = null;

  onEditInit(user: ExpenseUser) {
    this.originalUser = { ...user };
  }

  onEditSave(user: ExpenseUser) {
    this.userService.updateUser(user);
    this.originalUser = null;
  }

  onEditCancel(user: ExpenseUser) {
    if (!this.originalUser) return;

    Object.assign(user, this.originalUser);
    this.originalUser = null;
  }

  onDelete(user: ExpenseUser) {
    this.userService.deleteUser(user.id);
  }
}