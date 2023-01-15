import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularRouteComponent } from './angular-route.component';

describe('AngularRouteComponent', () => {
  let component: AngularRouteComponent;
  let fixture: ComponentFixture<AngularRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularRouteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
