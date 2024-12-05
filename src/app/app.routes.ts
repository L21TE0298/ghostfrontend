import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './layout/app.layout.component';
import { MypageComponent } from './core/components/pages/mypage/mypage.component';
import { CouponPagePrincipalComponent } from './core/components/coupon-page-principal/coupon-page-principal.component';
import { AddCouponComponent } from './core/components/add-coupon/add-coupon.component';
import { UpdateCouponComponent } from './core/components/update-coupon/update-coupon.component';
import { NgModule } from '@angular/core';
import { PagePrincipalIngredientComponent } from './core/components/page-principal-ingredient/page-principal-ingredient.component';
import { AddIngredientComponent } from './core/components/add-ingredient/add-ingredient.component';
import { UpdateIngredientComponent } from './core/components/update-ingredient/update-ingredient.component';
import { PagePrincipalCategoryComponent } from './core/components/page-principal-category/page-principal-category.component';
import { AddCategoryComponent } from './core/components/add-category/add-category.component';
import { UpdateCategoryComponent } from './core/components/update-category/update-category.component';
import { PagePrincipalNutrientComponent } from './core/components/page-principal-nutrient/page-principal-nutrient.component';
import { AddNurientComponent } from './core/components/add-nurient/add-nurient.component';
import { UpdateNutrientComponent } from './core/components/update-nutrient/update-nutrient.component';

export const routes: Routes = [

  {
    path: '',
    component:AppLayoutComponent,
    children:[
      { path: '', component: MypageComponent },
      { path: 'Coupons', component: CouponPagePrincipalComponent },
      { path: 'Coupons/Agregar', component: AddCouponComponent }, // Esta es la ruta correcta
      { path: 'Coupons/Actualizar/:idCoupon', component: UpdateCouponComponent },
      { path: 'Ingredients', component: PagePrincipalIngredientComponent },
      { path: 'Ingredients/Agregar', component: AddIngredientComponent }, // Esta es la ruta correcta
      { path: 'Ingredients/Actualizar/:idIngredient', component: UpdateIngredientComponent },
      { path: 'Categories', component: PagePrincipalCategoryComponent },
      { path: 'Categories/Agregar', component: AddCategoryComponent }, // Esta es la ruta correcta
      { path: 'Categories/Actualizar/:idCategory', component: UpdateCategoryComponent },
      { path: 'Nutrients', component: PagePrincipalNutrientComponent },
      { path: 'Nutrients/Agregar', component: AddNurientComponent }, // Esta es la ruta correcta
      { path: 'Nutrients/Actualizar/:idNutrient', component: UpdateNutrientComponent }
    ]
  }
];
