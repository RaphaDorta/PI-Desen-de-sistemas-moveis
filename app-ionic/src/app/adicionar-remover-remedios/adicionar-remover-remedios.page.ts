import { Component, OnInit } from '@angular/core';
import { MedicationService } from '../services/medication.service';

@Component({
  selector: 'app-adicionar-remover-remedios',
  templateUrl: './adicionar-remover-remedios.page.html',
  styleUrls: ['./adicionar-remover-remedios.page.scss'],
})
export class AdicionarRemoverRemediosPage implements OnInit {
  medicationName: string = '';
  quantity: number = 0;
  message: string = '';

  constructor(private medicationService: MedicationService) { }

  ngOnInit() { }

  addMedication() {
    if (this.medicationName && this.quantity > 0) {
      this.medicationService.modifyMedication('add', this.medicationName, this.quantity).subscribe(
        response => this.message = 'Medicamento adicionado com sucesso!',
        error => this.message = 'Erro ao adicionar medicamento. Tente novamente mais tarde.'
      );
    } else {
      this.message = 'Por favor, preencha todos os campos corretamente.';
    }
  }

  removeMedication() {
    if (this.medicationName && this.quantity > 0) {
      this.medicationService.modifyMedication('remove', this.medicationName, this.quantity).subscribe(
        response => this.message = 'Medicamento removido com sucesso!',
        error => this.message = 'Erro ao remover medicamento. Tente novamente mais tarde.'
      );
    } else {
      this.message = 'Por favor, preencha todos os campos corretamente.';
    }
  }
}
