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
          { label: 'Category', icon: 'pi pi-fw pi-flag', routerLink: ['/Categories'] },
        ]
      },
      {
        label: 'ingredientes de suplementos',
        items: [
          { label: 'Creatina Monohidratada', icon: 'pi pi-fw pi-bolt', routerLink: ['/ingredientes/creatina-monohidratada'] },
          { label: 'Cafeína Anhidra', icon: 'pi pi-fw pi-coffee', routerLink: ['/ingredientes/cafeina-anhidra'] },
          { label: 'Beta-Alanina', icon: 'pi pi-fw pi-plus', routerLink: ['/ingredientes/beta-alanina'] },
          { label: 'Citrulina Malato', icon: 'pi pi-fw pi-ellipsis-h', routerLink: ['/ingredientes/citrulina-malato'] },
          { label: 'Taurina', icon: 'pi pi-fw pi-cloud', routerLink: ['/ingredientes/taurina'] },
          { label: 'Arginina', icon: 'pi pi-fw pi-map', routerLink: ['/ingredientes/arginina'] },
          { label: 'HMB', icon: 'pi pi-fw pi-shield', routerLink: ['/ingredientes/hmb'] },
          { label: 'Extracto de Té Verde', icon: 'pi pi-fw pi-leaf', routerLink: ['/ingredientes/extracto-te-verde'] },
          { label: 'Aceite de Pescado (Omega-3)', icon: 'pi pi-fw pi-globe', routerLink: ['/ingredientes/omega-3'] },
          { label: 'Electrolitos', icon: 'pi pi-fw pi-refresh', routerLink: ['/ingredientes/electrolitos'] },
          { label: 'ZMA', icon: 'pi pi-fw pi-box', routerLink: ['/ingredientes/zma'] },
          { label: 'CLA', icon: 'pi pi-fw pi-star-o', routerLink: ['/ingredientes/cla'] },
          { label: 'Ashwagandha', icon: 'pi pi-fw pi-flag', routerLink: ['/ingredientes/ashwagandha'] },
          { label: 'Cúrcuma', icon: 'pi pi-fw pi-sliders-h', routerLink: ['/ingredientes/curcuma'] },
          { label: 'Polvo de Remolacha', icon: 'pi pi-fw pi-chart-bar', routerLink: ['/ingredientes/polvo-remolacha'] },
          { label: 'Extracto de Pimienta Negra', icon: 'pi pi-fw pi-eye', routerLink: ['/ingredientes/extracto-pimienta'] },
          { label: 'Vitamina D', icon: 'pi pi-fw pi-sun', routerLink: ['/ingredientes/vitamina-d'] },
          { label: 'Maltodextrina', icon: 'pi pi-fw pi-layer-group', routerLink: ['/ingredientes/maltodextrina'] },
          { label: 'Azúcares', icon: 'pi pi-fw pi-percentage', routerLink: ['/ingredientes/azucares'] },
          { label: 'Sodio', icon: 'pi pi-fw pi-slash', routerLink: ['/ingredientes/sodio'] },
          { label: 'Dextrosa', icon: 'pi pi-fw pi-chart-line', routerLink: ['/ingredientes/dextrosa'] },
          { label: 'Glicerol', icon: 'pi pi-fw pi-chart-pie', routerLink: ['/ingredientes/glicerol'] },
          { label: 'Ingredient', icon: 'pi pi-fw pi-flag', routerLink: ['/Ingredients'] },
        ],
      },
      {
        label: 'Nutrientes de suplementos',
        items: [
          { label: 'Vitamina A', icon: 'pi pi-fw pi-eye', routerLink: ['/nutrientes/vitamina-a'] },
          { label: 'Vitamina B1', icon: 'pi pi-fw pi-sliders-h', routerLink: ['/nutrientes/vitamina-b1'] },
          { label: 'Vitamina B2', icon: 'pi pi-fw pi-th-large', routerLink: ['/nutrientes/vitamina-b2'] },
          { label: 'Vitamina B3', icon: 'pi pi-fw pi-chart-line', routerLink: ['/nutrientes/vitamina-b3'] },
          { label: 'Vitamina B5', icon: 'pi pi-fw pi-compass', routerLink: ['/nutrientes/vitamina-b5'] },
          { label: 'Vitamina B6', icon: 'pi pi-fw pi-sun', routerLink: ['/nutrientes/vitamina-b6'] },
          { label: 'Vitamina B7', icon: 'pi pi-fw pi-box', routerLink: ['/nutrientes/vitamina-b7'] },
          { label: 'Vitamina B9', icon: 'pi pi-fw pi-circle-on', routerLink: ['/nutrientes/vitamina-b9'] },
          { label: 'Vitamina B12', icon: 'pi pi-fw pi-star', routerLink: ['/nutrientes/vitamina-b12'] },
          { label: 'Vitamina C', icon: 'pi pi-fw pi-heart', routerLink: ['/nutrientes/vitamina-c'] },
          { label: 'Vitamina D', icon: 'pi pi-fw pi-sun', routerLink: ['/nutrientes/vitamina-d'] },
          { label: 'Vitamina E', icon: 'pi pi-fw pi-leaf', routerLink: ['/nutrientes/vitamina-e'] },
          { label: 'Vitamina K', icon: 'pi pi-fw pi-star-o', routerLink: ['/nutrientes/vitamina-k'] },
          { label: 'Calcio', icon: 'pi pi-fw pi-database', routerLink: ['/nutrientes/calcio'] },
          { label: 'Hierro', icon: 'pi pi-fw pi-compass', routerLink: ['/nutrientes/hierro'] },
          { label: 'Magnesio', icon: 'pi pi-fw pi-chart-pie', routerLink: ['/nutrientes/magnesio'] },
          { label: 'Zinc', icon: 'pi pi-fw pi-chart-bar', routerLink: ['/nutrientes/zinc'] },
          { label: 'Selenio', icon: 'pi pi-fw pi-cloud', routerLink: ['/nutrientes/selenio'] },
          { label: 'Cobre', icon: 'pi pi-fw pi-shield', routerLink: ['/nutrientes/cobre'] },
          { label: 'Manganeso', icon: 'pi pi-fw pi-flag', routerLink: ['/nutrientes/manganeso'] },
          { label: 'Nutrients', icon: 'pi pi-fw pi-flag', routerLink: ['/Nutrients'] },
        ],
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
