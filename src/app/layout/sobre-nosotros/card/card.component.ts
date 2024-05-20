import { Component, OnInit, Input, AfterViewInit, ElementRef  } from '@angular/core';
import { ICard } from 'src/app/interfaces/ICard';
import { Card } from 'src/app/models/card';


 
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() height = 250;
  @Input () cards:ICard[] = [];


  

  public currentPosition = 0;
  public finalHeight: string | number = 0;
  public esDispositivoMovil = window.innerWidth <= 725;
  public  cardsLength = 0;
  public marginLeft = 0;
  
  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    this.inicializarCarousel()
  }

  private inicializarCarousel(): void {
    this.finalHeight = this.height;
    this.cardsLength = this.cards.length;
    this.cards.forEach((i, index) => {
      i.id = index;
     
      }
    )
   this.startCarousel()

  }

 startCarousel(): void {
    setInterval(() => {
      this.rotateCards();
    }, 10000); // 
  } 


  rotateCards(): void {
    this.currentPosition = (this.currentPosition + 1 )
    if(this.currentPosition === this.cardsLength){
      this.currentPosition = 0;
    }
    this.marginLeft = this.currentPosition
    console.log(this.marginLeft)
    this.setActive(this.marginLeft)
  }

 
  setActive (index: number): void {
    this.currentPosition = index;
  }
 



/*   getTranslateX(index: number):  number {
    if (this.esDispositivoMovil){
      return (index - this.activeIndex)
    }else {
      const distance = 5;
      return (index - this.activeIndex) * distance; 
    }
  } */
 // ancho

 ngAfterViewInit(): void {
  this.calcularAnchoTarjeta();
  window.addEventListener('resize', () => this.calcularAnchoTarjeta());
}

private calcularAnchoTarjeta(): void {
  const contenedorAncho = this.el.nativeElement.offsetWidth;
 
  const cantidadTarjetas = this.cards.length;
  
  const anchoTarjeta = contenedorAncho * cantidadTarjetas;
 

  // Verifica si es un dispositivo móvil (puedes ajustar este valor según tus necesidades)
  const esDispositivoMovil = window.innerWidth <= 725;

  // Establece la variable CSS según la condición
  const elementoGrande = document.querySelector('.grande') as HTMLElement;
  //console.log(elementoGrande);
  if (esDispositivoMovil){
    if (elementoGrande ){
      elementoGrande.style.width = anchoTarjeta + 'px'
    }
  }
   
}

  
}
