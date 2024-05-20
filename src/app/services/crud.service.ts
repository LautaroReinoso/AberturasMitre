import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const httpOptions = {
  headers : new HttpHeaders ({
    'Content-Type':  'application/json',
  })
}

@Injectable({
  providedIn: 'root'
})

export class CrudService  {

  

  constructor(private httpClient:HttpClient) { }

  get(apiUrl:string) :  Observable<any[]> {

    return this.httpClient.get<any[]>(apiUrl);

  }

  delete(toDelete:any, apiUrl:string) : Observable<any> {
    
    const url = `${apiUrl}/${toDelete.id}`;
    return this.httpClient.delete<any>(url,httpOptions)

   }

  post(toAdd:any, apiUrl:string,isFormData: boolean = false) : Observable<any> {
      const options = isFormData ? {} : httpOptions;

      return this.httpClient.post<any>(apiUrl,toAdd, options)


    

  }

  put(toUpdate:any, apiUrl:string, isFormData: boolean = false) : Observable<any> {
    const url = `${apiUrl}/${toUpdate.id}`;
    
    let options = {};
    
    if (!isFormData) {
      options = { headers: httpOptions};
    }

    return this.httpClient.put<any>(url, toUpdate, options);
  }
}