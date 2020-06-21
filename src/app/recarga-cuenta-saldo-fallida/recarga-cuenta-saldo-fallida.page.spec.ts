import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecargaCuentaSaldoFallidaPage } from './recarga-cuenta-saldo-fallida.page';

describe('RecargaCuentaSaldoFallidaPage', () => {
  let component: RecargaCuentaSaldoFallidaPage;
  let fixture: ComponentFixture<RecargaCuentaSaldoFallidaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecargaCuentaSaldoFallidaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecargaCuentaSaldoFallidaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
