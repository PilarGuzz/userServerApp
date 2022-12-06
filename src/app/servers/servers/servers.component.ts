import { Component, OnInit } from '@angular/core';
import { ServersService } from '../servers.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',

})
export class ServersComponent implements OnInit {
  servers;
  constructor( private serversService: ServersService) {
    this.servers = this.serversService.servers;
   }

  ngOnInit(): void {
  }

  get resultsServers(){
    return this.serversService.servers
  }

}