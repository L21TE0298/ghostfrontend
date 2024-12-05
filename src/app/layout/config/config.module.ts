import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SidebarModule } from 'primeng/sidebar';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ButtonModule } from 'primeng/button';
import { InputSwitchModule } from 'primeng/inputswitch';
import { AppConfigComponent } from './app.config.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { UpdateCouponComponent } from '../../core/components/update-coupon/update-coupon.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SidebarModule,
        RadioButtonModule,
        ButtonModule,
        InputSwitchModule,
        HttpClientModule,
        RouterModule
    ],
    declarations: [
        AppConfigComponent,
        UpdateCouponComponent
    ],
    exports: [
        AppConfigComponent
    ]
})
export class AppConfigModule { }
