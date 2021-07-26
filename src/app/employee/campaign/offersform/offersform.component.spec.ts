import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersformComponent } from './offersform.component';

describe('OffersformComponent', () => {
  let component: OffersformComponent;
  let fixture: ComponentFixture<OffersformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffersformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffersformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
