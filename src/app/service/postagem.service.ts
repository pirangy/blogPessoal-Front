import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { PostagemEditComponent } from '../edit/postagem-edit/postagem-edit.component';
import { Postagem } from '../model/Postagem';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllPostagens(): Observable<Postagem[]>{
    return this.http.get<Postagem[]>('https://blogpessoalback.herokuapp.com/postagens', this.token)
  }

  getByIdPostagem(id: number): Observable<Postagem>{
    return this.http.get<Postagem>(`https://blogpessoalback.herokuapp.com/postagens/${id}`, this.token)
  }

  postPostagem(postagem: Postagem): Observable<Postagem>{
    return this.http.post<Postagem>('https://blogpessoalback.herokuapp.com/postagens', postagem ,this.token)
  }

  putPostagem(postagem: Postagem): Observable<Postagem>{
    return this.http.put<Postagem>('https://blogpessoalback.herokuapp.com/postagens', postagem, this.token)

  }

  deletePostagem(id: number): Observable<Postagem>{
    return this.http.delete<Postagem>(`https://blogpessoalback.herokuapp.com/postagens/${id}`, this.token)
  }


}
