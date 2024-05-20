import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectorRef} from '@angular/core';

import {  IImage } from 'src/app/interfaces/IImage';
import { NgZone } from '@angular/core';



@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit  {


  @Input() height = 800;
  @Input () isFullScreen = false;
  @Input () items : IImage[] = [] ;
   
  public finalHeight: string | number = 0;
  public currentPosition = 0;
  public marginLeft = 0;
  public totalWidth: number = 0;


  constructor( private ngZone: NgZone, private cdr: ChangeDetectorRef) {
    this.finalHeight = this.isFullScreen ? '100vh' : `${this.height}px`;
   }

  ngOnInit(): void {
    this.inicializarCarousel();
  };

  

  private inicializarCarousel(): void {
   
    // Lógica de inicialización del carousel
    this.items.forEach((i, index ) => {
      i.id = index + 1 ;
     //console.log(i.id)
      i.marginLeft = -100 * index ;
  
      this.setCurrentPosition(i.id);
    })
  
  }

  setCurrentPosition(position: number) {
    this.currentPosition = position;
    this.items.forEach((item, index) => {
      item.marginLeft = -100 * index - this.currentPosition;
    })
    //console.log(this.marginLeft);
  }

  setNext(){
      const foundItem = this.items.find(i => i.id === 0);
      let finalPercentage = 0;
      let backPosition = this.currentPosition - 1;
      
      if (backPosition >= 0) {
        finalPercentage = -100 * backPosition;
      } else {
        backPosition = this.items.length - 1;
        finalPercentage = -100 * backPosition;
      }
  
      if (foundItem) {
        foundItem.marginLeft = finalPercentage;
      }
  
      this.currentPosition = backPosition;
      this.marginLeft = this.currentPosition * -100;
      this.cdr.detectChanges();


  }
  setBack(){

      const foundItem = this.items.find(i => i.id === 0)
      let finalPercentage= 0;
      let backPosition = this.currentPosition -1;
      if (backPosition >= 0){
        finalPercentage = -100 * backPosition;
      } else {
        backPosition = this.items.length - 1;
        finalPercentage = -100 * backPosition;
      }
      if ( foundItem){
        foundItem.marginLeft = finalPercentage;
       }
       this.currentPosition = backPosition;
       this.marginLeft = this.currentPosition * -100;
      this.cdr.detectChanges();
  
       

  }


  loadImage(event: any) {
    this.ngZone.run(() => {
      const image = event.target.files;
      console.log(image);
      if (image.length > 0) {
        const reader = new FileReader();
        reader.readAsDataURL(image[0]);
        reader.onloadend = () => {
          const nuevaImagen: IImage= {
            id: this.items.length, // Asigna un id único (puede variar según tu lógica)
            marginLeft: 0,
            url: reader.result as string, // Asegúrate de definir imageUrl en tu interfaz
          };
  
          this.items.push(nuevaImagen);
        
        };
      }
    });
  }
  

}