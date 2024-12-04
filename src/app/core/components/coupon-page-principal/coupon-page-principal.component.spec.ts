import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouponPagePrincipalComponent } from './coupon-page-principal.component';

describe('CouponPagePrincipalComponent', () => {
  let component: CouponPagePrincipalComponent;
  let fixture: ComponentFixture<CouponPagePrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CouponPagePrincipalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CouponPagePrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
