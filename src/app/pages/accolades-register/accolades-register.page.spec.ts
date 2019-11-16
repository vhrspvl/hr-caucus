import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AccoladesRegisterPage } from './accolades-register.page';

describe('AccoladesRegisterPage', () => {
  let component: AccoladesRegisterPage;
  let fixture: ComponentFixture<AccoladesRegisterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccoladesRegisterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AccoladesRegisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
