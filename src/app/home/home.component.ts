import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  constructor( private router: Router,
    private authService: AuthService) { }

  ngOnInit(): void {
  }
  onLoadServers(){
    this.router.navigate(['/servers'])
  }
  onlogin() {
    this.authService.login();
  }
 
  onlogout() {
    this.authService.logout();
  }

}
