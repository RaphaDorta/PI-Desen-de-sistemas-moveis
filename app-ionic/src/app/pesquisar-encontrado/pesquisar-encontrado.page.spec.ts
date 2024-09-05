import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PesquisarEncontradoPage } from './pesquisar-encontrado.page';

describe('PesquisarEncontradoPage', () => {
  let component: PesquisarEncontradoPage;
  let fixture: ComponentFixture<PesquisarEncontradoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PesquisarEncontradoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
