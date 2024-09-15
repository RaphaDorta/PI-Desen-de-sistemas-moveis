import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CadastroService } from '../services/cadastro.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage {
  cadastrar = {
    nome: '',
    sobrenome: '',
    email: '',
    cpf: '',
    dataNascimento: ''
  };

  constructor(private cadastroService: CadastroService, private router: Router) { }

  confirmarCadastro() {
    // Lógica para confirmar o cadastro
    this.cadastroService.atualizarCadastro(this.cadastrar).subscribe(response => {
      console.log('Cadastro atualizado com sucesso', response);
      // Redireciona para a página cadastro-sucesso após sucesso
      this.router.navigate(['/cadastro-senha']);
    }, error => {
      console.error('Erro ao atualizar cadastro', error);
    });
  }
}
