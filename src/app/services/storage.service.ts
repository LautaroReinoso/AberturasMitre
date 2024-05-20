import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  // Método para guardar datos en el almacenamiento local
  loadLocalStorage(key: string, data: any): void {
    localStorage.setItem(key, JSON.stringify(data));
  }

  // Método para obtener datos del almacenamiento local
  getLocalStorage(key: string): any {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  }

  // Método para borrar datos del almacenamiento local
  deleteDeLocalStorage(key: string): void {
    localStorage.removeItem(key);
  }

  // Métodos similares para el almacenamiento de sesión (sessionStorage)
  // ...

}