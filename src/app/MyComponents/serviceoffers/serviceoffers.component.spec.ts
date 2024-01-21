import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceoffersComponent } from './serviceoffers.component';

describe('ServiceoffersComponent', () => {
  let component: ServiceoffersComponent;
  let fixture: ComponentFixture<ServiceoffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServiceoffersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServiceoffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
