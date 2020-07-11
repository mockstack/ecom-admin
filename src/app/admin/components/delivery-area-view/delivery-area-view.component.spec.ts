import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryAreaViewComponent } from './delivery-area-view.component';

describe('DeliveryAreaViewComponent', () => {
  let component: DeliveryAreaViewComponent;
  let fixture: ComponentFixture<DeliveryAreaViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveryAreaViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryAreaViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
