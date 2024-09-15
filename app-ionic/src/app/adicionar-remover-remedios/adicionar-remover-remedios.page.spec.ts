import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdicionarRemoverRemediosPage } from './adicionar-remover-remedios.page';

describe('AdicionarRemoverRemediosPage', () => {
  let component: AdicionarRemoverRemediosPage;
  let fixture: ComponentFixture<AdicionarRemoverRemediosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionarRemoverRemediosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
