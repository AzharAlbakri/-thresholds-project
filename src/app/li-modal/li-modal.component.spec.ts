import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiModalComponent } from './li-modal.component';

describe('LiModalComponent', () => {
  let component: LiModalComponent;
  let fixture: ComponentFixture<LiModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
