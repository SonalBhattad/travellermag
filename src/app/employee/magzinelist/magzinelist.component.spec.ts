import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagzinelistComponent } from './magzinelist.component';

describe('MagzinelistComponent', () => {
  let component: MagzinelistComponent;
  let fixture: ComponentFixture<MagzinelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MagzinelistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MagzinelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
