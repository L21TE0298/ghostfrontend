import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from '../../environment/environment.development';
import { HttpClient } from '@angular/common/http';
import { CouponCrearDTO, CouponDTO } from '../../core/components/interfaces/coupons.interface';
import { NutrientCrearDTO, NutrientDTO } from '../../core/components/interfaces/nutrients.interface';
import { IngredientDTO } from '../../core/components/interfaces/ingredients.interface';
import { CategoryCrearDTO, CategoryDTO } from '../../core/components/interfaces/categories,interface';

export interface AppConfig {
    inputStyle: string;
    colorScheme: string;
    theme: string;
    ripple: boolean;
    menuMode: string;
    scale: number;
}

interface LayoutState {
    staticMenuDesktopInactive: boolean;
    overlayMenuActive: boolean;
    profileSidebarVisible: boolean;
    configSidebarVisible: boolean;
    staticMenuMobileActive: boolean;
    menuHoverActive: boolean;
}

@Injectable({
    providedIn: 'root',
})
export class LayoutService {
    private apiUrl = 'http://localhost:9090/coupons'; 
    private apiUrlIngredients = 'http://localhost:9090/ingredients';
    private apiUrlCategories = 'http://localhost:9090/categories';
    private apiUrlNutrients = 'http://localhost:9090/nutrients';
  constructor(private http: HttpClient) {}

  getAllCoupons(): Observable<CouponDTO[]> {
    return this.http.get<CouponDTO[]>(this.apiUrl);
  }
  getAllNutrients(): Observable<NutrientDTO[]> {
    return this.http.get<NutrientDTO[]>(this.apiUrlNutrients);
  }
  getAllIngredients(): Observable<IngredientDTO[]> {
    return this.http.get<IngredientDTO[]>(this.apiUrlIngredients);
  }
  getAllCategories(): Observable<CategoryDTO[]> {
    return this.http.get<CategoryDTO[]>(this.apiUrlCategories);
  }

getActiveCoupons(): Observable<CouponDTO[]> {
    return this.http.get<CouponDTO[]>('http://localhost:9090/coupons/active');
  }
  
  getInactiveCoupons(): Observable<CouponDTO[]> {
    return this.http.get<CouponDTO[]>('http://localhost:9090/coupons/inactive');
  }
  
  registerCoupon(couponDTO: CouponCrearDTO): Observable<{ message: string; coupon: CouponDTO }> {
    return this.http.post<{ message: string; coupon: CouponDTO }>(this.apiUrl, couponDTO);
  }
  registerNutrient(nutrientDTO: NutrientCrearDTO): Observable<{ message: string; nutrient: NutrientDTO }> {
    return this.http.post<{ message: string; nutrient: NutrientDTO }>(this.apiUrlNutrients, nutrientDTO);
  }
  registerCategory(categoryDTO: CategoryCrearDTO): Observable<{ message: string; category: CategoryDTO }> {
    return this.http.post<{ message: string; category: CategoryDTO }>(this.apiUrlCategories, categoryDTO);
  }
  registerIngredient(couponDTO: CouponCrearDTO): Observable<{ message: string; coupon: CouponDTO }> {
    return this.http.post<{ message: string; coupon: CouponDTO }>(this.apiUrl, couponDTO);
  }
    getCouponById(idCoupon: number): Observable<CouponDTO> {
        return this.http.get<CouponDTO>(`${this.apiUrl}/${idCoupon}`);
      }
      getCategorieById(idCategory: number): Observable<CategoryDTO> {
        return this.http.get<CategoryDTO>(`${this.apiUrlCategories}/${idCategory}`);
      }
      getIngredientById(idIngredient: number): Observable<IngredientDTO> {
        return this.http.get<IngredientDTO>(`${this.apiUrlIngredients}/${idIngredient}`);
      }
      getNutrientById(idNutrient: number): Observable<NutrientDTO> {
        return this.http.get<NutrientDTO>(`${this.apiUrlNutrients}/${idNutrient}`);
      }
      // Actualizar un cupón
      updateCoupon(coupon: CouponDTO): Observable<any> {
        return this.http.put(`${this.apiUrl}/${coupon.idCoupon}`, coupon);
      }
      updateCategory(category: CategoryDTO): Observable<any> {
        return this.http.put(`${this.apiUrlCategories}/${category.idCategory}`, category);
      }
      updateIngredient(ingredient: IngredientDTO): Observable<any> {
        return this.http.put(`${this.apiUrlIngredients}/${ingredient.idIngredient}`, ingredient);
      }
      updateNutient(nutrient: NutrientDTO): Observable<any> {
        return this.http.put(`${this.apiUrlNutrients}/${nutrient.idNutrient}`, nutrient);
      }
    config: AppConfig = {
        ripple: false,
        inputStyle: 'outlined',
        menuMode: 'static',
        colorScheme: 'light',
        theme: 'lara-light-indigo',
        scale: 14,
    };

    state: LayoutState = {
        staticMenuDesktopInactive: false,
        overlayMenuActive: false,
        profileSidebarVisible: false,
        configSidebarVisible: false,
        staticMenuMobileActive: false,
        menuHoverActive: false
    };

    private configUpdate = new Subject<AppConfig>();

    private overlayOpen = new Subject<any>();

    configUpdate$ = this.configUpdate.asObservable();

    overlayOpen$ = this.overlayOpen.asObservable();

    onMenuToggle() {
        if (this.isOverlay()) {
            this.state.overlayMenuActive = !this.state.overlayMenuActive;
            if (this.state.overlayMenuActive) {
                this.overlayOpen.next(null);
            }
        }

        if (this.isDesktop()) {
            this.state.staticMenuDesktopInactive = !this.state.staticMenuDesktopInactive;
        }
        else {
            this.state.staticMenuMobileActive = !this.state.staticMenuMobileActive;

            if (this.state.staticMenuMobileActive) {
                this.overlayOpen.next(null);
            }
        }
    }

    showProfileSidebar() {
        this.state.profileSidebarVisible = !this.state.profileSidebarVisible;
        if (this.state.profileSidebarVisible) {
            this.overlayOpen.next(null);
        }
    }

    showConfigSidebar() {
        this.state.configSidebarVisible = true;
    }

    isOverlay() {
        return this.config.menuMode === 'overlay';
    }

    isDesktop() {
        return window.innerWidth > 991;
    }

    isMobile() {
        return !this.isDesktop();
    }

    onConfigUpdate() {
        this.configUpdate.next(this.config);
    }

}
