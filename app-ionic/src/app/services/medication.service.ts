import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicationService {

  private apiUrl = 'http://localhost/medicamentos-api/check_medication.php'; // URL do seu backend PHP

  constructor(private http: HttpClient) { }

  checkMedicationAvailability(medicationName: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?name=${medicationName}`);
  }
}
