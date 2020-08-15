import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateServiceService {

  constructor() { }

  formData: any;

  getFormData(data: any) {
    return this.formData;
  }

  setFormData(data: any) {
    this.formData = data;
  }
  
}
