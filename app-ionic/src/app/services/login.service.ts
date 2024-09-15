import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface login {
  email_usuario: string;
  senha: string;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = 'http://localhost/buscaFarma/api/login_usuario.php'; // URL do backend que faz login

  constructor(private http: HttpClient) { }

  login(dados: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, dados);
  }
}
