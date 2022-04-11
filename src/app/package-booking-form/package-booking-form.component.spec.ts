import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageBookingFormComponent } from './package-booking-form.component';

describe('PackageBookingFormComponent', () => {
  let component: PackageBookingFormComponent;
  let fixture: ComponentFixture<PackageBookingFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackageBookingFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PackageBookingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
