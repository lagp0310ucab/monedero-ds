import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CambiarTelefonoUsuarioPage } from './cambiar-telefono-usuario.page';

describe('CambiarTelefonoUsuarioPage', () => {
  let component: CambiarTelefonoUsuarioPage;
  let fixture: ComponentFixture<CambiarTelefonoUsuarioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CambiarTelefonoUsuarioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CambiarTelefonoUsuarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
