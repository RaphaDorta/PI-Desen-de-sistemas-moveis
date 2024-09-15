import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PesquisarErroPage } from './pesquisar-erro.page';

describe('PesquisarErroPage', () => {
  let component: PesquisarErroPage;
  let fixture: ComponentFixture<PesquisarErroPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PesquisarErroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
