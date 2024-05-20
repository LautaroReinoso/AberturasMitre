/* import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarouselService {

  public height: number = 0;
  public isFullScreen: boolean = false;
  public items: [] = [];

  public finalHeight: string | number = 0;
  public currentPosition = 0;
  public marginLeft = 0;
  public totalWidth: number = 0;

  constructor() { }

  setCurrentPosition(position: number): void {
    this.currentPosition = position;
    
  }

  setNext(): void{
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
}
 */