import { Routes } from '@angular/router';
import { AppLayoutComponent } from './layout/app.layout.component';
import { MypageComponent } from './core/components/pages/mypage/mypage.component';
import { CouponPagePrincipalComponent } from './core/components/coupon-page-principal/coupon-page-principal.component';

export const routes: Routes = [

  {
    path: '',
    component:AppLayoutComponent,
    children:[
      {path:'',component:MypageComponent},
      {path:'Coupons',component:CouponPagePrincipalComponent}
    ]
  }
];
