import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecargaTarjetaSaldoFallidaPage } from './recarga-tarjeta-saldo-fallida.page';

describe('RecargaTarjetaSaldoFallidaPage', () => {
  let component: RecargaTarjetaSaldoFallidaPage;
  let fixture: ComponentFixture<RecargaTarjetaSaldoFallidaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecargaTarjetaSaldoFallidaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecargaTarjetaSaldoFallidaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
