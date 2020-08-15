import { Component, OnInit } from '@angular/core';
import { StateServiceService } from '../Shared/Services/state-service.service';

@Component({
  selector: 'app-predictions',
  templateUrl: './predictions.component.html',
  styleUrls: ['./predictions.component.css']
})
export class PredictionsComponent implements OnInit {

  formData: any;
  superAnnuation: number = 0;

  constructor(private stateSvc: StateServiceService) { }

  ngOnInit(): void {
    this.formData = this.stateSvc.formData;
    this.calcSuperAnnuation();
  }

  getYearsLeft(ageCategory: String) {
    if (ageCategory['name'] == "young") {
      return 60 - 24;
    } else if (ageCategory['name'] == "medium") {
      return 60 - 37;
    } else {
      return 60 - 42;
    }
  }

  calcSuperAnnuation() {
    console.log("prediction", this.formData)
    let n = this.getYearsLeft(this.formData.ageCategory['name']);
    this.superAnnuation += this.formData.amountToBeWithdrawn * (1 + (9.5 / (n) * 100)) ^ n;
  }

}
