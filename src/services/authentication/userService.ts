import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../components/login';
import {map, subscribeOn, tap} from "rxjs/operators";

@Injectable()
export class UserService {
  constructor(private http: HttpClient) { }

  getUser() {
    return this.http.get<User>('/api/Security/user');
  }

  create(user: User) {
    return this.http.post('/api/Security/register', user);
  }

  update(user: User) {
    return this.http.put('/api/users/' + user.id, user);
  }

  delete(id: number) {
    return this.http.delete('/api/users/' + id);
  }
}
