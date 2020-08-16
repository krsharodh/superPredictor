import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StateServiceService {

  constructor(private http: HttpClient) { }

  formData: any;

  predictionData: any;

  getFormData(data: any) {
    return this.formData;
  }

  setPredictionData(data) {
    this.predictionData = data
  }

  getPredictionData() {
    return this.predictionData;
  }

  getPredictions() {
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post("http://127.0.0.1:5000/form", this.formData, httpOptions);
  }

  setFormData(data: any) {
    this.formData = data;
  }
  
}
