import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SidebarModule } from 'primeng/sidebar';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ButtonModule } from 'primeng/button';
import { InputSwitchModule } from 'primeng/inputswitch';
import { AppConfigComponent } from './app.config.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MapComponent } from '../../core/components/map/map.component'; // Ensure MapComponent is standalone
import { Component } from '@angular/core';
import { PostalMapComponent } from '../../core/components/postal-map/postal-map.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SidebarModule,
        RadioButtonModule,
        ButtonModule,
        InputSwitchModule,
        HttpClientModule,
        MapComponent,
        PostalMapComponent
    ],
    declarations: [
        AppConfigComponent
    ],
    exports: [
        AppConfigComponent
    ]
})
export class AppConfigModule { }
