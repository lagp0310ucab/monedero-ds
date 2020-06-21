import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecargaTarjetaSaldoExitosaPage } from './recarga-tarjeta-saldo-exitosa.page';

describe('RecargaTarjetaSaldoExitosaPage', () => {
  let component: RecargaTarjetaSaldoExitosaPage;
  let fixture: ComponentFixture<RecargaTarjetaSaldoExitosaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecargaTarjetaSaldoExitosaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecargaTarjetaSaldoExitosaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
