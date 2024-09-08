import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastroSenhaPage } from './cadastro-senha.page';

describe('CadastroSenhaPage', () => {
  let component: CadastroSenhaPage;
  let fixture: ComponentFixture<CadastroSenhaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroSenhaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
