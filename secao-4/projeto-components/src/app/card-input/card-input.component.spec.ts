import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardInputComponent } from './card-input.component';

describe('CardInputComponent', () => {
  let component: CardInputComponent;
  let fixture: ComponentFixture<CardInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
