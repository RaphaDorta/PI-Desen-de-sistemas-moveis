import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'; // Ajuste o caminho conforme necessário

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  userData: any = {}; // Inicialize com um objeto vazio

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUserData().subscribe(data => {
      this.userData = data;
    });
  }
}

