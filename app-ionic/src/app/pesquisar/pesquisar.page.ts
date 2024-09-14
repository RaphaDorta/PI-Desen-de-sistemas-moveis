import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service'; // Importe o serviço
import { SearchService } from '../services/search.service'; // Importe o SearchService

@Component({
  selector: 'app-pesquisar',
  templateUrl: 'pesquisar.page.html',
  styleUrls: ['pesquisar.page.scss'],
})
export class PesquisarPage {
  searchTerm: string = '';
  isAdmin: boolean = false; // Variável para armazenar o estado de administrador

  constructor(
    private searchService: SearchService,
    private router: Router,
    private authService: AuthService // Injete o serviço
  ) {
    this.isAdmin = this.authService.isAdmin(); // Verifique se o usuário é administrador
  }

  onSubmit() {
    this.searchService.searchMedicine(this.searchTerm).subscribe(response => {
      if (response.found) {
        this.router.navigate(['/pesquisar-encontrado'], { queryParams: { data: JSON.stringify(response.data) } });
      } else {
        this.router.navigate(['/pesquisar-erro']);
      }
    }, error => {
      this.router.navigate(['/pesquisar-erro']);
    });
  }
}
