import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagazinelistComponent } from './magazinelist.component';

describe('MagazinelistComponent', () => {
  let component: MagazinelistComponent;
  let fixture: ComponentFixture<MagazinelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MagazinelistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MagazinelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
