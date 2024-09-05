import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecuperarSenhaCodigoPage } from './recuperar-senha-codigo.page';

describe('RecuperarSenhaCodigoPage', () => {
  let component: RecuperarSenhaCodigoPage;
  let fixture: ComponentFixture<RecuperarSenhaCodigoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RecuperarSenhaCodigoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
