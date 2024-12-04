import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';


@Component({
  selector: 'app-menu',
  templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

  model: any[] = [];

  constructor(public layoutService: LayoutService) { }

  ngOnInit() {
    this.model = [
      {
        label: 'Inicio',
        items: [
          { label: 'Página de inicio', icon: 'pi pi-fw pi-home', routerLink: ['/'] }
        ]
      },
      {
        label: 'Categorías de suplementos',
        items: [
          { label: 'Pre-Workout', icon: 'pi pi-fw pi-box', routerLink: ['/uikit/button'] },
          { label: 'Proteinas', icon: 'pi pi-fw pi-box', routerLink: ['/uikit/button'] },
          { label: 'Multivitamínicos', icon: 'pi pi-fw pi-box', routerLink: ['/uikit/button'] },
          { label: 'BCAAs', icon: 'pi pi-fw pi-box', routerLink: ['/uikit/button'] },
          { label: 'Ganadores de peso', icon: 'pi pi-fw pi-box', routerLink: ['/uikit/button'] },
          { label: 'Glutamina', icon: 'pi pi-fw pi-box', routerLink: ['/uikit/button'] },
          { label: 'Óxido Nítrico', icon: 'pi pi-fw pi-box', routerLink: ['/uikit/button'] },
          { label: 'L-Carnitina', icon: 'pi pi-fw pi-box', routerLink: ['/uikit/button'] },
          { label: 'Caseina', icon: 'pi pi-fw pi-box', routerLink: ['/uikit/button'] },
          { label: 'Post-Workout', icon: 'pi pi-fw pi-box', routerLink: ['/uikit/button'] },
        ]
      },
      {
        label: 'Ejercicios',
        items: [
          {
            label: 'Submenu 1', icon: 'pi pi-fw pi-bookmark',
            items: [
              {
                label: 'Submenu 1.1', icon: 'pi pi-fw pi-bookmark', routerLink: ['/documentation'],
              }
            ]
          },
          {
            label: 'Submenu 2', icon: 'pi pi-fw pi-bookmark',
            items: [
              {
                label: 'Submenu 2.1', icon: 'pi pi-fw pi-bookmark', routerLink: ['/documentation'],
              }
            ]
          }
        ]
      },
      {
        label: 'Coupons',
        items: [
          { label: 'Coupons', icon: 'pi pi-tags', routerLink: ['/Coupons'] }
        ]
      },
      {
        label: 'Carrito',
        items: [
          { label: 'Carrito', icon: 'pi pi-fw pi-shopping-cart', routerLink: ['/documentation'] }
        ]
      },
      {
        label: 'Contacto',
        items: [
          { label: 'Facebook', icon: 'pi pi-fw pi-facebook', routerLink: ['/documentation'] },
          { label: 'Instagram', icon: 'pi pi-fw pi-instagram', routerLink: ['/documentation'] },
          { label: 'WhatsApp', icon: 'pi pi-fw pi-whatsapp', routerLink: ['/documentation'] },
          { label: 'Email', icon: 'pi pi-fw pi-envelope', routerLink: ['/documentation'] }
        ]
      }
    ];
  }
}
