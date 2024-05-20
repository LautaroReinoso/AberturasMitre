
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ICard } from 'src/app/interfaces/ICard';
import { IImage } from 'src/app/interfaces/IImage';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-card-edit',
  templateUrl: './card-edit.component.html',
  styleUrls: ['./card-edit.component.css']
})
export class CardEditComponent implements OnInit {

  @Input() cards:ICard[] = [];
  @Input() loggedIn:boolean = false;
  @Input() showEdit:boolean = false;
  @Output() newImgFromCardEdit = new EventEmitter();

  
  cardForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    // Inicializa el formulario con los controles y validaciones necesarias
    this.cardForm! = this.formBuilder.group({
      id: [ '',[Validators.required, Validators.maxLength(1)]],
      title: ['', [ Validators.minLength(3), Validators.maxLength(50)]],
      text: ['', [Validators.minLength(3), Validators.maxLength(80)]],
      image: ['', [Validators]] // Puedes agregar validaciones adicionales para la imagen si es necesario
    });
  }

  load(): void {
  //  console.log(this.cardForm)
    const newId = this.cardForm.get('id')?.value; // Obtener el valor del ID del formulario
    const matchingCard = this.cards.find(card => card.id === newId); // Buscar en el arreglo de tarjetas
    if (this.cardForm.valid) {
      if (matchingCard) {
        // Si se encuentra una tarjeta con el mismo ID, actualizar sus propiedades
        matchingCard.title = this.cardForm.get('id')?.value;
        matchingCard.text = this.cardForm.get('title')?.value;
        

        // Emitir el evento con las tarjetas actualizadas
        this.newImgFromCardEdit.emit(this.cards);
        this.cardForm.reset();
      } else {
        // Si no se encuentra ninguna tarjeta con el ID ingresado, agregar una nueva tarjeta al array
        const newCard: ICard = {
          id: newId,
          title: this.cardForm.get('title')?.value,
          text: this.cardForm.get('text')?.value,
          // Asegúrate de manejar la imagen de acuerdo a tus requerimientos
        };
        this.cards.push(newCard);
      }
      this.newImgFromCardEdit.emit(this.cards);
    } else {
      Object.keys(this.cardForm.controls).forEach(key => {
        const control = this.cardForm.get(key);
        if (control?.invalid) {
          control.markAsTouched(); // Marcar el control como "tocado" para que se muestre el mensaje de error
        }
      });
      return;
    }
    this.cardForm.reset();
  }
}
