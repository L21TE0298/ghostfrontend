import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './layout/app.layout.component';
import { MypageComponent } from './core/components/pages/mypage/mypage.component';
import { CouponPagePrincipalComponent } from './core/components/coupon-page-principal/coupon-page-principal.component';
import { AddCouponComponent } from './core/components/add-coupon/add-coupon.component';
import { UpdateCouponComponent } from './core/components/update-coupon/update-coupon.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [

  {
    path: '',
    component:AppLayoutComponent,
    children:[
      { path: '', component: MypageComponent },
      { path: 'Coupons', component: CouponPagePrincipalComponent },
      { path: 'Coupons/Agregar', component: AddCouponComponent }, // Esta es la ruta correcta
      { path: 'Coupons/Actualizar/:idCoupon', component: UpdateCouponComponent },
    ]
  }
];
