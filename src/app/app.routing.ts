import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServersComponent } from './servers/servers/servers.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { UsersComponent } from './users/users/users.component';
import { UserComponent } from './user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full'
    },
    {
        path: 'servers',  component: ServersComponent,
         children: [
            {path: ':id/edit', 
            component: EditServerComponent },
            {path: ':id', 
            component: ServerComponent },
        ]
    },

    {
        path: 'users', component: UsersComponent

    },
    {   path: 'users/:id',
        component: UserComponent},
    {
        path: '**',
        component: NotFoundComponent
    }
];


@NgModule({
    imports: [
        RouterModule.forRoot( routes )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}