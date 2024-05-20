import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }


  public isOpen: boolean = false;

  ngOnInit(): void {

  }

  toggleMenu(){
    console.log(this.isOpen)
    this.isOpen = !this.isOpen;
    console.log(this.isOpen)
  }
}
