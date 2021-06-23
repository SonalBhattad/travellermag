import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BilingformComponent } from './bilingform.component';

describe('BilingformComponent', () => {
  let component: BilingformComponent;
  let fixture: ComponentFixture<BilingformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BilingformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BilingformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
