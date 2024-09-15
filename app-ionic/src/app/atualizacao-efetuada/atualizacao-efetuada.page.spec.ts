import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AtualizacaoEfetuadaPage } from './atualizacao-efetuada.page';

describe('AtualizacaoEfetuadaPage', () => {
  let component: AtualizacaoEfetuadaPage;
  let fixture: ComponentFixture<AtualizacaoEfetuadaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AtualizacaoEfetuadaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
