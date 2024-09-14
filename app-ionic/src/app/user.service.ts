import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:3000/api/users'; // Altere para o URL da sua API

  constructor(private http: HttpClient) { }

  getUserData(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/profile`); // Altere para o endpoint apropriado
  }
}
