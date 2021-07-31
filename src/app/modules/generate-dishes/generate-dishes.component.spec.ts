import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateDishesComponent } from './generate-dishes.component';

describe('GenerateDishesComponent', () => {
  let component: GenerateDishesComponent;
  let fixture: ComponentFixture<GenerateDishesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerateDishesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateDishesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
