import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: any = null; // Armazena informações do usuário. Inicialmente nulo.

  constructor() {
    // Você pode inicializar o estado do usuário com dados da sessão ou local storage aqui.
    this.loadUserFromStorage();
  }

  // Simula a autenticação e o carregamento de informações do usuário
  login(username: string, password: string): void {
    // Aqui você faria uma chamada HTTP para autenticar o usuário
    // Exemplo de simulação:
    if (username === 'admin' && password === 'password') {
      this.user = { isAdmin: true };
    } else {
      this.user = { isAdmin: false };
    }
    this.saveUserToStorage();
  }

  // Verifica se o usuário é administrador
  isAdmin(): boolean {
    return this.user ? this.user.isAdmin : false;
  }

  // Simula o carregamento de dados do usuário a partir de armazenamento local
  private loadUserFromStorage(): void {
    const user = localStorage.getItem('user');
    this.user = user ? JSON.parse(user) : null;
  }

  // Simula o salvamento de dados do usuário no armazenamento local
  private saveUserToStorage(): void {
    if (this.user) {
      localStorage.setItem('user', JSON.stringify(this.user));
    }
  }

  // Simula o logout do usuário
  logout(): void {
    this.user = null;
    localStorage.removeItem('user');
  }
}
