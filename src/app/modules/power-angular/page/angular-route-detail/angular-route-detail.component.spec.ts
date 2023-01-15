import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularRouteDetailComponent } from './angular-route-detail.component';

describe('AngularRouteDetailComponent', () => {
  let component: AngularRouteDetailComponent;
  let fixture: ComponentFixture<AngularRouteDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularRouteDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularRouteDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
