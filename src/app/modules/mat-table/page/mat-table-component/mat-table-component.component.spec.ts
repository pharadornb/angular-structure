import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatTableComponentComponent } from './mat-table-component.component';

describe('MatTableComponentComponent', () => {
  let component: MatTableComponentComponent;
  let fixture: ComponentFixture<MatTableComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatTableComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatTableComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
