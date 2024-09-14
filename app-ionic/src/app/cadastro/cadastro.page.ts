import { Component } from '@angular/core';
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

  constructor(private cadastroService: CadastroService) { }

  confirmarCadastro() {
    // Lógica para confirmar o cadastro
    this.cadastroService.atualizarCadastro(this.cadastrar).subscribe(response => {
      console.log('Cadastro atualizado com sucesso', response);
    }, error => {
      console.error('Erro ao atualizar cadastro', error);
    });
  }
}
