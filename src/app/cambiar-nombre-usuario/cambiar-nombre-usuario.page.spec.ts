import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CambiarNombreUsuarioPage } from './cambiar-nombre-usuario.page';

describe('CambiarNombreUsuarioPage', () => {
  let component: CambiarNombreUsuarioPage;
  let fixture: ComponentFixture<CambiarNombreUsuarioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CambiarNombreUsuarioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CambiarNombreUsuarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
