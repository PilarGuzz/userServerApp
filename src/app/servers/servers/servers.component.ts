import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServersService } from '../servers.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',

})
export class ServersComponent implements OnInit {
  
  constructor( private serversService: ServersService, 
              private router: Router,
              private route: ActivatedRoute) {
   }

  ngOnInit(): void {

  }

  get resultsServers(){
    return this.serversService.servers
  }

  onReload(){
    this.router.navigate(['servers']);

    //this.router.navigate(['servers'], {relativeTo: this.route});
  }

}
