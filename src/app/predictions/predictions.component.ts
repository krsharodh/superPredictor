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

  @ViewChild("vizContainer") containerDiv: ElementRef;

  constructor(private stateSvc: StateServiceService) { }

  ngOnInit(): void {
    this.formData = this.stateSvc.formData;
    this.calcSuperAnnuation();
    this.stateSvc.getPredictions().subscribe(res => {
      this.prediction = res;
      console.log(this.prediction);
    })
  }

  ngAfterViewInit() {
    this.initTableau();
  }

  initTableau() {
    const vizUrl = "https://public.tableau.com/views/GovHack-Dynamic/Dashboard";
    const options = {
      hideTabs: true,
      onFirstInteractive: () => {
        console.log("onFirstInteractive");
      },
      onFirstVizSizeKnown: () => {
        console.log("onFirstVizSizeKnown");
      }
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
    console.log("prediction", this.formData)
    let n = 60 - this.formData.Age;
    this.superAnnuation += this.formData.amountToBeWithdrawn * (1 + (5 / (n) * 100)) ^ n;
  }

}
