import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUser } from '../modelo/iuser';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent {

  @Input() user: IUser = {
    id: 0,
    name: "",
    username: "",
    phone: "",
    website: ""
  };

  @Output() userAdded = new EventEmitter<IUser>();

  agregarUsuario(): void {
    if (this.user.name && this.user.username && this.user.phone && this.user.website) {
      this.userAdded.emit(this.user); 
      this.user = { id: 0, name: "", username: "", phone: "", website: "" };
    } else {
      console.log("Por favor completa todos los campos");
    }
  }
}
