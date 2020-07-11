import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryChargeViewComponent } from './delivery-charge-view.component';

describe('DeliveryChargeViewComponent', () => {
  let component: DeliveryChargeViewComponent;
  let fixture: ComponentFixture<DeliveryChargeViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveryChargeViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryChargeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
