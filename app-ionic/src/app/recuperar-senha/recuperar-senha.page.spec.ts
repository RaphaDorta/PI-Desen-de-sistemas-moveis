import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecuperarSenhaPage } from './recuperar-senha.page';

describe('RecuperarSenhaPage', () => {
  let component: RecuperarSenhaPage;
  let fixture: ComponentFixture<RecuperarSenhaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RecuperarSenhaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
