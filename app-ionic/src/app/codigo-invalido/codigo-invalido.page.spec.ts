import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CodigoInvalidoPage } from './codigo-invalido.page';

describe('CodigoInvalidoPage', () => {
  let component: CodigoInvalidoPage;
  let fixture: ComponentFixture<CodigoInvalidoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CodigoInvalidoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
