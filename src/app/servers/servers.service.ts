import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { interfaceUser } from '../users/interface/user';


@Injectable({
  providedIn: 'root',
})
export class ServersService {
  servers = [
    {
      id: 1,
      name: 'Productionserver',
      status: 'online',
    },
    {
      id: 2,
      name: 'Testserver',
      status: 'offline',
    },
    {
      id: 3,
      name: 'Devserver',
      status: 'offline',
    },
  ];
  private url : string = 'http://localhost:3000/users';

  constructor(private http : HttpClient) { }

  users(): Observable<interfaceUser[]>{
    return this.http.get<interfaceUser[]>(this.url)
  }

  user(id: string): Observable<interfaceUser>{
    return this.http.get<interfaceUser>(`${this.url}/${id}`)
  }


}
