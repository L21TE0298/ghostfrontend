import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { RatingModule } from 'primeng/rating';
import { StarFillIcon } from 'primeng/icons/starfill';

@Component({
  selector: 'app-mypage',
  standalone: true,
  imports: [ButtonModule, CardModule, RatingModule],
  templateUrl: './mypage.component.html',
  styleUrl: './mypage.component.css'
})
export class MypageComponent {

}
