import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pay-vendor',
  templateUrl: './pay-vendor.component.html',
  styleUrls: ['./pay-vendor.component.css']
})
export class PayVendorComponent implements OnInit{
  carddata = [
    {
      cardTitle:"Paid vendors",
      amount:"O.00"
    },
    {
      cardTitle:"Up Comming Payments",
      amount:"O.00"
    },
    {
      cardTitle:"Over Due Payments",
      amount:"O.00"
    },
  ]
  ngOnInit(){}

}
