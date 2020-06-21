import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecargarCuentaBancariaPage } from './recargar-cuenta-bancaria.page';

describe('RecargarCuentaBancariaPage', () => {
  let component: RecargarCuentaBancariaPage;
  let fixture: ComponentFixture<RecargarCuentaBancariaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecargarCuentaBancariaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecargarCuentaBancariaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
