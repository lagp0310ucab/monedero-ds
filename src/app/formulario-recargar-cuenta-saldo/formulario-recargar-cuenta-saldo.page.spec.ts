import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormularioRecargarCuentaSaldoPage } from './formulario-recargar-cuenta-saldo.page';

describe('FormularioRecargarCuentaSaldoPage', () => {
  let component: FormularioRecargarCuentaSaldoPage;
  let fixture: ComponentFixture<FormularioRecargarCuentaSaldoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioRecargarCuentaSaldoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormularioRecargarCuentaSaldoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
