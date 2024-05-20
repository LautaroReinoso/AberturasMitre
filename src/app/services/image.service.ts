import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { CrudService } from './crud.service';
import { environment } from '../../enviroment/enviroment.local';
import { IImage } from 'src/app/interfaces/IImage'

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  apiUrl = environment.apiUrlRoot + "/images";

  constructor(private crudService: CrudService) { }

  getImage(): Observable<IImage[]> {

    return this.crudService.get(this.apiUrl);

  }

  deleteImage(image: IImage): Observable<IImage> {

    return this.crudService.delete(image, this.apiUrl)

  }

  addImage(image: IImage) : Observable<IImage> {

    return this.crudService.post(image, this.apiUrl)

  }

  updateImage(image: IImage): Observable<IImage> {

    return this.crudService.put(image, this.apiUrl)

  }


}
