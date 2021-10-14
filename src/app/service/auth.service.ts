import { UserLogin } from './../model/UserLogin'
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/User';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}
  

  entrar(userLogin: UserLogin): Observable<UserLogin> {
    return this.http.post<UserLogin>('https://blogpessoalback.herokuapp.com/usuarios/logar', userLogin)
  }

  cadastrar(user: User): Observable<User> {

    return this.http.post<User>('https://blogpessoalback.herokuapp.com/usuarios/cadastrar', user)

  }

  alterar(user: User): Observable<User> {

    return this.http.put<User>('https://blogpessoalback.herokuapp.com/usuarios/alterar', user)
    
  }

  getByIdUser(id: number): Observable<User> {
    return this.http.get<User>(`https://blogpessoalback.herokuapp.com/usuarios/${id}`)
  }

  logado() {
    let ok: boolean = false

    if (environment.token != '') {
      ok = true
    }

    return ok
  }
}
