import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastroSucessoPage } from './cadastro-sucesso.page';

describe('CadastroSucessoPage', () => {
  let component: CadastroSucessoPage;
  let fixture: ComponentFixture<CadastroSucessoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroSucessoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
