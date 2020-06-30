import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CambiarDireccionUsuarioPage } from './cambiar-direccion-usuario.page';

describe('CambiarDireccionUsuarioPage', () => {
  let component: CambiarDireccionUsuarioPage;
  let fixture: ComponentFixture<CambiarDireccionUsuarioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CambiarDireccionUsuarioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CambiarDireccionUsuarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
