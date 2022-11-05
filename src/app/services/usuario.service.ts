import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Usuario } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  private BASE_URL = 'https://reqres.ins/api'

  getUsers():Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.BASE_URL}/users`)
     .pipe(
        map((response:any) => response.data)
     )
  }

  getUser(id: string):Observable<Usuario> {
    return this.http.get<Usuario>(`${this.BASE_URL}/users/${id}`)
     .pipe(
        map((response:any) => response.data)
     )
  }


}
