import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PagoFallidoPage } from './pago-fallido.page';

describe('PagoFallidoPage', () => {
  let component: PagoFallidoPage;
  let fixture: ComponentFixture<PagoFallidoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagoFallidoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PagoFallidoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
