import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BilingComponent } from './biling.component';

describe('BilingComponent', () => {
  let component: BilingComponent;
  let fixture: ComponentFixture<BilingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BilingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BilingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
