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
  }

  @Output() event = new EventEmitter<string>();

  agregarUsuario(): void{
    
  }

}
