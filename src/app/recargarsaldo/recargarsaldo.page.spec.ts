import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecargarsaldoPage } from './recargarsaldo.page';

describe('RecargarsaldoPage', () => {
  let component: RecargarsaldoPage;
  let fixture: ComponentFixture<RecargarsaldoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecargarsaldoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecargarsaldoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
