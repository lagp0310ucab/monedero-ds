import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PagoExitosoPage } from './pago-exitoso.page';

describe('PagoExitosoPage', () => {
  let component: PagoExitosoPage;
  let fixture: ComponentFixture<PagoExitosoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagoExitosoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PagoExitosoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
