import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { CrudService } from './crud.service';
import { environment } from '../../enviroment/enviroment.local';
import { IUser } from '../interfaces/IUser';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class UserService {

  apiUrl = environment.apiUrlRoot + "/user";

  constructor(private crudService: CrudService) { }

  getUser(): Observable<IUser[]> {

    return this.crudService.get(this.apiUrl);

  }

  deleteUser(user: IUser): Observable<IUser> {

    return this.crudService.delete(user, this.apiUrl)

  }

  addUser(user: IUser): Observable<IUser> {

    return this.crudService.post(user, this.apiUrl)

  }

  updateUser(user: IUser): Observable<IUser> {

    return this.crudService.put(user, this.apiUrl)

  }


}

