import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Input,Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IImage } from 'src/app/interfaces/IImage';
import { ImageService } from 'src/app/services/image.service';


@Component({
  selector: 'app-carousel-edit',
  templateUrl: './carousel-edit.component.html',
  styleUrls: ['./carousel-edit.component.css']
})
export class CarouselEditComponent implements OnInit {

  @Input() image: IImage [] = [];
  @Input() loggedIn:boolean = false;
  @Input() showEdit:boolean = false;
  @Output() newBannerImgEvent:EventEmitter<any> = new EventEmitter();

  carouselForm!: FormGroup;
  selectedFile: File | null = null;

  constructor(private http: HttpClient,private imageService:ImageService,private formBuilder: FormBuilder ) { }

  ngOnInit(): void {
    this.initializeForm();
  }
  initializeForm(): void {
    // Inicializa el formulario con los controles y validaciones necesarias
  this.carouselForm! = this.formBuilder.group({
    id: ['', [Validators.required, Validators.maxLength(1)]],
    title: ['', [Validators.minLength(2),Validators.maxLength(60)]],
    subtitle: ['', [Validators.minLength(2),Validators.maxLength(60)]],
    image: ['', [Validators.required, Validators.minLength(1)]]
  })
  }
  loadCarousel(){
    const matchingImage = this.image.find(image => image.id === newIdImage); 
    const newIdImage = this.carouselForm.get('id')?.value;

    if (this.carouselForm.valid) {
      if (matchingImage) {
        // Si se encuentra una tarjeta con el mismo ID, actualizar sus propiedades
        matchingImage.id = this.carouselForm.get('id')?.value;
        matchingImage.title = this.carouselForm.get('title')?.value;
        matchingImage.subtitle = this.carouselForm.get('subtitle')?.value;
        matchingImage.url = this.carouselForm.get('image')?.value
       

        // Emitir el evento con las tarjetas actualizadas
        this.newBannerImgEvent.emit(this.image);
        this.carouselForm.reset();
      } else {
        // Si no se encuentra ninguna tarjeta con el ID ingresado, agregar una nueva tarjeta al array
          const newImage: IImage = {
          id: newIdImage,
          title: this.carouselForm.get('title')?.value,
         
          // Asegúrate de manejar la imagen de acuerdo a tus requerimientos
            
        };

        this.image.push(newImage); 
      }
      this.newBannerImgEvent.emit(this.image);
    }
  }
  onFileChange(event: any): void {
    if (event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];
    }
  }
}

