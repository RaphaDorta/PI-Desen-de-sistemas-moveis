import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicationService {

  private apiUrl = 'http://localhost/medicamentos-api/'; // URL base do seu backend PHP

  constructor(private http: HttpClient) { }

  checkMedicationAvailability(medicationName: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}check_medication.php?name=${medicationName}`);
  }

  modifyMedication(action: 'add' | 'remove', medicationName: string, quantity: number): Observable<any> {
    const url = `${this.apiUrl}${action}_medication.php`; // URL do seu backend PHP para adicionar ou remover medicamento
    return this.http.post<any>(url, { name: medicationName, quantity });
  }
}
