import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecargaCuentaSaldoExitosaPage } from './recarga-cuenta-saldo-exitosa.page';

describe('RecargaCuentaSaldoExitosaPage', () => {
  let component: RecargaCuentaSaldoExitosaPage;
  let fixture: ComponentFixture<RecargaCuentaSaldoExitosaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecargaCuentaSaldoExitosaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecargaCuentaSaldoExitosaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
