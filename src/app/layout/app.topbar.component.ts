import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from "./service/app.layout.service";

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html',
    styleUrls: ['./app.topbar.component.css']
})
export class AppTopBarComponent {
    isProfileMenuVisible = false; // Controla la visibilidad del menú de perfil

    toggleProfileMenu() {
        this.isProfileMenuVisible = !this.isProfileMenuVisible; // Alterna el estado
    }
    @HostListener('document:click', ['$event'])
    closeProfileMenu(event: Event) {
        const targetElement = event.target as HTMLElement;
        if (!targetElement.closest('.layout-topbar-menu')) {
            this.isProfileMenuVisible = false;
        }
    }
    goToProfile() {
        console.log('Navegando al perfil...');
        // Agrega tu lógica de navegación aquí, por ejemplo, usando el router:
        // this.router.navigate(['/profile']);
    }

    logout() {
        console.log('Cerrando sesión...');
        // Agrega la lógica para cerrar sesión
    }

    items!: MenuItem[];

    @ViewChild('menubutton') menuButton!: ElementRef;

    @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

    @ViewChild('topbarmenu') menu!: ElementRef;

    constructor(public layoutService: LayoutService) { }
}
