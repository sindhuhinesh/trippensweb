import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTestimonialsCarouselComponent } from './all-testimonials-carousel.component';

describe('AllTestimonialsCarouselComponent', () => {
  let component: AllTestimonialsCarouselComponent;
  let fixture: ComponentFixture<AllTestimonialsCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllTestimonialsCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllTestimonialsCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
