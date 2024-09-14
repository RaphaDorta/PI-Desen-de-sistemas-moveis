import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  private apiUrl = 'http://localhost:8080/api/cadastro'; // Substitua pelo URL correto da sua API

  constructor(private http: HttpClient) { }

  atualizarCadastro(dados: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/atualizar`, dados);
  }
}
