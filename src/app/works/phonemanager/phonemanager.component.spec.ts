import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonemanagerComponent } from './phonemanager.component';

describe('PhonemanagerComponent', () => {
  let component: PhonemanagerComponent;
  let fixture: ComponentFixture<PhonemanagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhonemanagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhonemanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
