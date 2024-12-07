import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { IUser } from '../modelo/iuser';

@Component({
  selector: 'app-users-dashboard',
  templateUrl: './users-dashboard.component.html',
  styleUrl: './users-dashboard.component.css'
})
export class UsersDashboardComponent {

  users_list: IUser[] = [];

  constructor(private _service: UserService) {
    this.loadUsers();
  }

  loadUsers(): void {
    this._service.getAll().subscribe(
      response => this.users_list = response
    );
  }

  onUserAdded(newUser: IUser): void {
    this._service.addUser(newUser).subscribe(
      response => {       
        this.users_list.push(response);
      },
    );
  }
}
