import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ExpenseUser } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly usersSubject = new BehaviorSubject<ExpenseUser[]>([
    {
      id: '1',
      firstName: 'Nick',
      lastName: 'Hammann',
      email: 'nick@example.com',
      monthlyEmailRequested: true,
      monthlyEmailEnabled: false
    },
    {
      id: '2',
      firstName: 'Max',
      lastName: 'Mustermann',
      email: 'max@example.com',
      monthlyEmailRequested: false,
      monthlyEmailEnabled: false
    }
  ]);

  readonly users$ = this.usersSubject.asObservable();

  addUser(user: ExpenseUser) {
    this.usersSubject.next([
      ...this.usersSubject.value,
      user
    ]);
  }

  updateUser(updatedUser: ExpenseUser) {
    this.usersSubject.next(
      this.usersSubject.value.map(user =>
        user.id === updatedUser.id ? updatedUser : user
      )
    );
  }

  deleteUser(id: string) {
    this.usersSubject.next(
      this.usersSubject.value.filter(user => user.id !== id)
    );
  }     
}