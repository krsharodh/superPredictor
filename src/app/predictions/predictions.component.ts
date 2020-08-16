import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { StateServiceService } from '../Shared/Services/state-service.service';

declare var tableau: any;

@Component({
  selector: 'app-predictions',
  templateUrl: './predictions.component.html',
  styleUrls: ['./predictions.component.css']
})
export class PredictionsComponent implements OnInit, AfterViewInit {

  viz: any;

  prediction: any;
  formData: any;
  superAnnuation: number = 0;
  superAnnuationBefore: number = 0;

  chartData: any;
  chartOptions: any;


  @ViewChild("vizContainer") containerDiv: ElementRef;

  constructor(private stateSvc: StateServiceService) {
  }

  ngOnInit(): void {
    this.formData = this.stateSvc.formData;
    this.calcSuperAnnuation();
    this.prediction = this.stateSvc.getPredictionData();
    this.chartData = {
      labels: ['Amount gained after withdrawl', 'Amount Lost'],
      datasets: [
        {
          label: 'Maturity amount',
          backgroundColor: [
            "#FF6384",
            "#36A2EB"
          ],
          borderColor: [
            "#FF6384",
            "#36A2EB"
          ],
          data: [this.superAnnuationBefore, this.superAnnuationBefore - this.superAnnuation]
        }
      ]
    }
    this.chartOptions = {
      title: {
        display: true,
        text: 'Amount of money lost from super annuation',
        fontSize: 16
      },
      legend: {
        position: 'bottom'
      }
    };
  }

  ngAfterViewInit() {
    this.initTableau();
  }

  initTableau() {
    const vizUrl = "https://public.tableau.com/views/GovHack-Dynamic/Dashboard";
    const options = {
      hideTabs: true,
    };
    this.viz = new tableau.Viz(
      this.containerDiv.nativeElement,
      vizUrl,
      options
    );
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
    let n = 60 - this.formData.Age;

    this.superAnnuation += (this.formData.annualincome - this.formData.amountwithdrawn) * (1 + (5 / (n) * 100)) ^ n;
    this.superAnnuationBefore += this.formData.annualincome * (1 + (5 / (n) * 100)) ^ n;
  }

}
