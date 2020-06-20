import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CambiarCorreoElectronicoPage } from './cambiar-correo-electronico.page';

describe('CambiarCorreoElectronicoPage', () => {
  let component: CambiarCorreoElectronicoPage;
  let fixture: ComponentFixture<CambiarCorreoElectronicoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CambiarCorreoElectronicoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CambiarCorreoElectronicoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
