import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Definindo a interface cadastro com as propriedades do usuário
export interface Cadastro {
  nome_usuario: string;
  sobrenome_usuario: string;
  email_usuario: string;
  cpf_usuario: string;
  data_nascimento: string;
  nickname_usuario: string;
  senha: string;
}

@Injectable({
  providedIn: 'root'
})

export class CadastroService {

  private apiUrl = 'http://localhost/buscaFarma/api/cadastrar_usuario.php'; // Substitua pelo URL correto da sua API

  constructor(private http: HttpClient) { }

  // Método para atualizar cadastro
  atualizarCadastro(dados: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/atualizar`, dados);
  }

  // Método para cadastrar novo usuário
  cadastrar(dados: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/cadastrar`, dados);
  }
}
