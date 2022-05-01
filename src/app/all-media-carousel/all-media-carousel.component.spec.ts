import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllMediaCarouselComponent } from './all-media-carousel.component';

describe('AllMediaCarouselComponent', () => {
  let component: AllMediaCarouselComponent;
  let fixture: ComponentFixture<AllMediaCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllMediaCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllMediaCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
