import { Component, OnInit } from '@angular/core';
import { MedicationService } from '../services/medication.service' // Certifique-se de que o caminho está correto

interface MedicationResponse {
  available: boolean;
}

@Component({
  selector: 'app-pesquisar',
  templateUrl: './pesquisar.page.html',
  styleUrls: ['./pesquisar.page.scss'],
})
export class PesquisarPage implements OnInit {
  medicationName: string = '';
  availabilityMessage: string = '';

  constructor(private medicationService: MedicationService) { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.medicationName) {
      this.medicationService.checkMedicationAvailability(this.medicationName).subscribe(
        (response: MedicationResponse) => {
          if (response.available) {
            this.availabilityMessage = 'O medicamento está disponível em estoque.';
          } else {
            this.availabilityMessage = 'O medicamento não está disponível em estoque.';
          }
        },
        (error: any) => {
          console.error('Erro ao verificar a disponibilidade:', error);
          this.availabilityMessage = 'Erro ao verificar a disponibilidade. Tente novamente mais tarde.';
        }
      );
    } else {
      this.availabilityMessage = 'Por favor, digite o nome do medicamento.';
    }
  }
}
