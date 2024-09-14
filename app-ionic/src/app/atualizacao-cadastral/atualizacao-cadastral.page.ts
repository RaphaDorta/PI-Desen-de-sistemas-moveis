import { Component } from '@angular/core';
import { CadastroService } from '../services/cadastro.service'; // Ajuste o caminho conforme necessário

@Component({
  selector: 'app-atualizacao-cadastral',
  templateUrl: './atualizacao-cadastral.page.html',
  styleUrls: ['./atualizacao-cadastral.page.scss'],
})
export class AtualizacaoCadastralPage {

  nome: string = '';
  sobrenome: string = '';
  dataNascimento: string = '';

  constructor(private cadastroService: CadastroService) { }

  confirmarAlteracoes() {
    const dados = {
      nome: this.nome,
      sobrenome: this.sobrenome,
      dataNascimento: this.dataNascimento
    };

    this.cadastroService.atualizarCadastro(dados).subscribe(response => {
      console.log('Cadastro atualizado com sucesso!', response);
      // Adicione lógica adicional para lidar com a resposta
    }, error => {
      console.error('Erro ao atualizar cadastro', error);
      // Adicione lógica adicional para lidar com erros
    });
  }
}
