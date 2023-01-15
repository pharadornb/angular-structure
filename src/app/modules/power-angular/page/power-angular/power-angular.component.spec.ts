import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerAngularComponent } from './power-angular.component';

describe('PowerAngularComponent', () => {
  let component: PowerAngularComponent;
  let fixture: ComponentFixture<PowerAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PowerAngularComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PowerAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
