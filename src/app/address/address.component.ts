import { Component, OnInit } from '@angular/core';

declare var AddressFinder: any;

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let script = document.createElement("script");
    script.src = "https://api.addressfinder.io/assets/v3/widget.js";
    script.async = true;
    script.onload = this.initAf;
    document.body.appendChild(script);
  }

  initAf() {
    let widget = new AddressFinder.Widget(
      document.getElementById("addrs_1"),
      "ADDRESSFINDER_DEMO_KEY",
      "AU",
      {}
    );

    widget.on("result:select", function (fullAddress, metaData) {
      document.getElementById("addrs_1").nodeValue = metaData.address_line_1;
      document.getElementById("addrs_2").nodeValue = metaData.address_line_2;
      document.getElementById("suburb").nodeValue = metaData.locality_name;
      document.getElementById("state").nodeValue = metaData.state_territory;
      document.getElementById("postcode").nodeValue = metaData.postcode;
    });
  }

}
