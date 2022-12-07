import { Component, OnInit } from '@angular/core';
import { ServersService } from 'src/app/servers/servers.service';
import { interfaceUser } from '../interface/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: [
  ]
})
export class UsersComponent implements OnInit {

  usuarios : interfaceUser[] = [];
  
  constructor(private userService : ServersService) { }

  ngOnInit(): void {
    this.userService.users()
    .subscribe({
      next: (resp) => {
        this.usuarios = resp
      }
    })

  }


}
