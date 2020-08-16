import { Component } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { Router } from "@angular/router";
import { StateServiceService } from '../Shared/Services/state-service.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {

  genderList: SelectItem[];
  selectedGender: String;

  ageCategoryList: SelectItem[];
  selectedAgeCategory: String;

  occupationList: SelectItem[];
  selectedOccupation: String;

  maritalStatusList: SelectItem[];
  selectedMaritalStatus: String;

  professionList: SelectItem[];
  selectedProfesssion: String;

  postCode: Number;

  annualIncome: Number;

  amountList: SelectItem[];
  amountToBeWithdrawn: Number;

  constructor(
    private router: Router,
    private stateSvc: StateServiceService
    ) {
    this.genderList = [
      { label: 'Male', value: { img: 'male.png', name: 'male' } },
      { label: 'Female', value: { img: 'woman.png', name: 'female' } },
      { label: 'Other', value: { img: 'other.png', name: 'other' } }
    ];

    this.ageCategoryList = [
      { label: '18 - 30', value: { img: 'age1.png', name: 'young' } },
      { label: '31 - 45', value: { img: 'age2.png', name: 'medium' } },
      { label: '46 - 60', value: { img: 'age3.png', name: 'old' } }
    ];

    this.occupationList = [
      { label: 'Select Occupation', value: null },
      { label: 'Private Sector', value: 'Manager' },
      { label: 'Self Employed', value: 'Self Employed' },
      { label: 'Government', value: 'Government' },
      { label: 'Student', value: 'Student' },
      { label: 'Umemployed', value: 'Umemployed' }
    ];

    this.professionList = [
      { label: 'Select Profession', value: null },
      { label: 'Doctor', value: 'Doctor' },
      { label: 'Engineer', value: 'Engineer' },
      { label: 'Carpenter', value: 'Carpenter' },
      { label: 'Farmer', value: 'Farmer' },
      { label: 'Teacher', value: 'Teacher' }
    ];

    this.maritalStatusList = [
      { label: 'Single', value: { img: 'single.png', name: 'single' } },
      { label: 'Married', value: { img: 'married.png', name: 'married' } }
    ];

    this.amountList = [
      { label: '$ 1,000', value: 1000 },
      { label: '$ 2,000', value: 2000 },
      { label: '$ 3,000', value: 3000 },
      { label: '$ 4,000', value: 4000 },
      { label: '$ 5,000', value: 5000 },
      { label: '$ 6,000', value: 6000 },
      { label: '$ 7,000', value: 7000 },
      { label: '$ 8,000', value: 8000 },
      { label: '$ 9,000', value: 9000 },
      { label: '$ 10,000', value: 10000 },
    ]
  }

  getYearsLeft(ageCategory: String) {
    if (ageCategory['name'] == "young") {
      return 24;
    } else if (ageCategory['name'] == "medium") {
      return 37;
    } else {
      return 42;
    }
  }

  getPrediction() {
    alert("success!!");
    const formData = {
      Gender: this.selectedGender,
      Age: this.getYearsLeft(this.selectedAgeCategory),
      Mstatus: this.selectedMaritalStatus,
      occupation: this.selectedOccupation,
      profession: this.selectedProfesssion,
      annualincome: this.annualIncome,
      amountwithdrawn: this.amountToBeWithdrawn,
      postcode: this.postCode
    }
    console.log(formData);
    this.stateSvc.setFormData(formData);
    this.router.navigate(['predictions']);
  }

}
