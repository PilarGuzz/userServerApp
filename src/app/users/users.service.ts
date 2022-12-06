import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class UsersService {
       users : [
         {
         "id": 1,
         "name": 'Jack',
         "email": 'jack@iesjacaranda.es'
         },
         {
         "id": 2,
         "name": 'Claire',
         "email": 'claire@iesjacaranda.es'
         },
         {
         "id": 3,
         "name": 'Jamie',
         "email": 'jamie@iesjacaranda.es'
         }
         ]
        

  constructor(private http: HttpClient) {}
}