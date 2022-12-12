import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { interfaceUser } from '../users/interface/user';
import { ServersService } from '../servers/servers.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: [
  ]
})
export class UserComponent implements OnInit {

  
  constructor(private service: ServersService,
    private route: ActivatedRoute) { }
  user!: interfaceUser;
    
  ngOnInit(): void {
    this.service.user(this.route.snapshot.params['id'])
    .subscribe({
      next:(resp) => this.user=resp
    })
  };
}


