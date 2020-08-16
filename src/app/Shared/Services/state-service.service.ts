import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StateServiceService {

  constructor(private http: HttpClient) { }

  formData: any;

  getFormData(data: any) {
    return this.formData;
  }

  getPredictions() {
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post("localhost:5000/form", this.formData, httpOptions);
  }

  setFormData(data: any) {
    this.formData = data;
  }
  
}
