import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDisableButtonComponent } from './card-disable-button.component';

describe('CardDisableButtonComponent', () => {
  let component: CardDisableButtonComponent;
  let fixture: ComponentFixture<CardDisableButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardDisableButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardDisableButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
