import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormularioOperacionesPage } from './formulario-operaciones.page';

describe('FormularioOperacionesPage', () => {
  let component: FormularioOperacionesPage;
  let fixture: ComponentFixture<FormularioOperacionesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioOperacionesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormularioOperacionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
