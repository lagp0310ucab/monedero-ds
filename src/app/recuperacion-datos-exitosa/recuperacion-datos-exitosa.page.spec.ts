import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecuperacionDatosExitosaPage } from './recuperacion-datos-exitosa.page';

describe('RecuperacionDatosExitosaPage', () => {
  let component: RecuperacionDatosExitosaPage;
  let fixture: ComponentFixture<RecuperacionDatosExitosaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecuperacionDatosExitosaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecuperacionDatosExitosaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
