import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedTablePaggingComponent } from './shared-table-pagging.component';

describe('SharedTablePaggingComponent', () => {
  let component: SharedTablePaggingComponent;
  let fixture: ComponentFixture<SharedTablePaggingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedTablePaggingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharedTablePaggingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
