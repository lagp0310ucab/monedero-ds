import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecargartarjetaPage } from './recargartarjeta.page';

describe('RecargartarjetaPage', () => {
  let component: RecargartarjetaPage;
  let fixture: ComponentFixture<RecargartarjetaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecargartarjetaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecargartarjetaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
