import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cadastro-senha',
  templateUrl: './cadastro-senha.page.html',
  styleUrls: ['./cadastro-senha.page.scss'],
})
export class CadastroSenhaPage {
  senha: string = '';
  confirmacaoSenha: string = '';

  constructor(private router: Router, private http: HttpClient) {}

  concluirCadastro() {
    if (this.senha.length < 5) {
      alert('A senha deve ter no mínimo 5 caracteres.');
      return;
    }

    if (this.senha !== this.confirmacaoSenha) {
      alert('As senhas não coincidem.');
      return;
    }

    // Enviar a senha para o backend
    this.http.post('http://localhost/your-backend-endpoint', { senha: this.senha })
      .subscribe(
        response => {
          // Navegar para a página de sucesso
          this.router.navigate(['/cadastro-sucesso']);
        },
        error => {
          console.error('Erro ao cadastrar a senha', error);
        }
      );
  }
}
