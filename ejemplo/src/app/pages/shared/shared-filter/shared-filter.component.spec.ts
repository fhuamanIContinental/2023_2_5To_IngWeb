import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedFilterComponent } from './shared-filter.component';

describe('SharedFilterComponent', () => {
  let component: SharedFilterComponent;
  let fixture: ComponentFixture<SharedFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharedFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
