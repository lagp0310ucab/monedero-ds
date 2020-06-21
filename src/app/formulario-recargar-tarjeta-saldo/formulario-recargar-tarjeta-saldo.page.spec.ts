import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormularioRecargarTarjetaSaldoPage } from './formulario-recargar-tarjeta-saldo.page';

describe('FormularioRecargarTarjetaSaldoPage', () => {
  let component: FormularioRecargarTarjetaSaldoPage;
  let fixture: ComponentFixture<FormularioRecargarTarjetaSaldoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioRecargarTarjetaSaldoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormularioRecargarTarjetaSaldoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
