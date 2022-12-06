import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServersComponent } from './servers/servers.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ServersComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ServersModule { }
