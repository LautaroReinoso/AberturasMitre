import { Component, Input, OnInit, } from '@angular/core';
import { ICard } from 'src/app/interfaces/ICard';
import { Card } from 'src/app/models/card';

import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-sobre-nosotros',
  templateUrl: './sobre-nosotros.component.html',
  styleUrls: ['./sobre-nosotros.component.css']
})
export class SobreNosotrosComponent implements OnInit {

  @Input() cards:ICard[] = [];
  @Input() loggedIn:boolean = false;
  @Input() showEdit:boolean = false;

  activeIndex: number = 0;


  constructor(private cardService: CardService) {};

  ngOnInit(): void {
    this.startCarousel();
  };

  startCarousel(): void {
    setInterval(() => {
      this.rotateCards();
    }, 2000);  
  }

  rotateCards(): void {
    this.activeIndex = (this.activeIndex + 1) % this.cards.length;
  }
}
