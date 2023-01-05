import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  carddata = [
    {
      cardTitle:"Bronze Corporation",
      cardNumber:"*** *** *** 234",
      expdata:"20/23"
    },
    {
      cardTitle:"Huemanic Plc",
      cardNumber:"*** *** *** 5612",
      expdata:"20/23"
    },
    {
      cardTitle:"Huemanic Plc",
      cardNumber:"*** *** *** 5612",
      expdata:"05/30"
    },
    {
      cardTitle:"Zoop Virtual Credit",
      cardNumber:"*** *** *** 2345",
      expdata:"2/30"
    },
    {
      cardTitle:"Zoop Virtual Credit",
      cardNumber:"*** *** *** 2345",
      expdata:"2/30"
    },
  ]
ngOnInit(): void {
  
}
}
