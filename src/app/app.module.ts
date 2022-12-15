import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { HomeComponent } from './home/home.component';
import { ServersModule } from './servers/servers.module';
import { SharedModule } from './shared/shared.module';
import { UsersModule } from './users/users.module';
import { UserComponent } from './user/user.component';
import { ServersService } from './servers/servers.service';
import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    ServersModule,
    AppRoutingModule,
    HttpClientModule,
    UsersModule
    
  ],
  providers: [ServersService, AuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
