import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CambiarApellidoUsuarioPage } from './cambiar-apellido-usuario.page';

describe('CambiarApellidoUsuarioPage', () => {
  let component: CambiarApellidoUsuarioPage;
  let fixture: ComponentFixture<CambiarApellidoUsuarioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CambiarApellidoUsuarioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CambiarApellidoUsuarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
