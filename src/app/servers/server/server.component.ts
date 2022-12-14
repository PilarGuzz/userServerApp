import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServersService } from '../servers.service';
import { interfaceServer } from '../interface/server';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [
  ]
})
export class ServerComponent implements OnInit {
  server!: interfaceServer;

    constructor( private serversService: ServersService, 
    private router: Router,
    private route: ActivatedRoute) {
}

  ngOnInit(): void {
    this.route.params
    .subscribe({
      next: resp =>{
        
        this.server = this.serversService.servers[resp['id']];
      }
    })
  }

  get resultsServers(){
    return this.serversService.servers
  }

  onReload(){
    this.router.navigate(['servers']);

    //this.router.navigate(['servers'], {relativeTo: this.route});
  }
}
