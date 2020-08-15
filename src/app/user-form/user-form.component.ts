import { Component } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { Router } from "@angular/router";

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

  amountToBeWithdrawn: Number;

  constructor(private router: Router) {
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
  }

  getPrediction() {
    alert("success!!");
    console.log({
      gender: this.selectedGender["name"],
      ageCategory: this.selectedAgeCategory["name"],
      marritalStatus: this.selectedMaritalStatus["name"],
      occupation: this.selectedOccupation,
      profession: this.selectedProfesssion,
      annualIncome: this.annualIncome,
      amountToBeWithdrawn: this.amountToBeWithdrawn,
      postcode: this.postCode
    });
    this.router.navigate(['predictions']);
  }

}
