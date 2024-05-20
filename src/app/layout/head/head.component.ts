import { Component, OnInit } from '@angular/core';

import { IImage } from 'src/app/interfaces/IImage';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {


  private images: IImage[] = [];

  /* carouselData : ICarousel [] = [
    { id: 1,
      url: '../../../assets/images/one.jpg',
      title: {
          first: 'esto es un titulo',
          second: 'esto es un subtitulo',
      },
      marginLeft: 0,
      order: 1,
    },
    { id: 2,
      url: '../../../assets/images/two.jpg',
      title: {
          first: 'esto es el segundo titulo',
          second: 'esto es un subtitulo',
      },
      marginLeft: 0,
      order: 2,
    },
    { id: 3,
      url: '../../../assets/images/three.jpg',
      title: {
          first: 'este es el tercer titulo',
          second: 'Este es el tercer',
      },
      marginLeft: 0,
      order: 3,
    }
     ]; */

  constructor(private imageService: ImageService) { }




  ngOnInit(): void {
    this.loadImages();

  }

  loadImages(): void {
    this.imageService.getImage().subscribe(
      (images) => {
        if (images.length === 0) {
          console.error('No se encuentran imágenes');
        } else {
          this.images = images; // Asigna las imágenes recuperadas del servicio al arreglo local
        }
      },
      (error) => {
        console.error('Error al cargar las imágenes', error);
      }
    );
  }
}
