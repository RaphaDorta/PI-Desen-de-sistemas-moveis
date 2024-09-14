import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private apiUrl = 'http://localhost/your-backend-api/search'; // Substitua pelo URL da sua API

  constructor(private http: HttpClient) { }

  searchMedicine(name: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?name=${name}`);
  }
}
