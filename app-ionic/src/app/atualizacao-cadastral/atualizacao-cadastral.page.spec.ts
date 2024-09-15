import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AtualizacaoCadastralPage } from './atualizacao-cadastral.page';

describe('AtualizacaoCadastralPage', () => {
  let component: AtualizacaoCadastralPage;
  let fixture: ComponentFixture<AtualizacaoCadastralPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AtualizacaoCadastralPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
