import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'recuperar-senha',
    loadChildren: () => import('./recuperar-senha/recuperar-senha.module').then(m => m.RecuperarSenhaPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then(m => m.PerfilPageModule)
  },  {
    path: 'recuperar-senha-codigo',
    loadChildren: () => import('./recuperar-senha-codigo/recuperar-senha-codigo.module').then( m => m.RecuperarSenhaCodigoPageModule)
  },
  {
    path: 'atualizacao-cadastral',
    loadChildren: () => import('./atualizacao-cadastral/atualizacao-cadastral.module').then( m => m.AtualizacaoCadastralPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'pesquisar',
    loadChildren: () => import('./pesquisar/pesquisar.module').then( m => m.PesquisarPageModule)
  },
  {
    path: 'pesquisar-encontrado',
    loadChildren: () => import('./pesquisar-encontrado/pesquisar-encontrado.module').then( m => m.PesquisarEncontradoPageModule)
  },
  {
    path: 'pesquisar-erro',
    loadChildren: () => import('./pesquisar-erro/pesquisar-erro.module').then( m => m.PesquisarErroPageModule)
  },
  {
    path: 'atualizacao-efetuada',
    loadChildren: () => import('./atualizacao-efetuada/atualizacao-efetuada.module').then( m => m.AtualizacaoEfetuadaPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

