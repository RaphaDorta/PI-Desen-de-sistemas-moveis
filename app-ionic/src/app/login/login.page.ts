import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup | undefined;

  constructor(private http: HttpClient, private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email_usuario: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required]]
    });
  }


onSubmit() {//+
  if (this.loginForm && this.loginForm.valid) {//+
    this.http.post('http://localhost/buscaFarma/api/login_usuario.php', this.loginForm.value)//+
      .subscribe({//+
        next: (response) => {//+
          console.log(response);//+
          // Exibir mensagem de sucesso//+
          // Por exemplo, você pode usar um serviço de notificação para isso//+
          // Se o login for bem-sucedido, redirecione para a página inicial//+
          this.router.navigate(['/home']);//+
        },//+
        error: (error) => {//+
          console.error('Erro de login:', error);//+
          // Exibir mensagem de erro//+
          // Por exemplo, você pode usar um serviço de notificação para isso//+
        }//+
      });//+
  }//+
}//+
}