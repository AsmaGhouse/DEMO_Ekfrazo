import { Component, OnInit, ViewChild } from '@angular/core';
import { CollaspeService } from '../services/collaspe.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit{
 
  constructor(public _collapseService:CollaspeService) { }
  
  sidebarContent = true;

  ngOnInit(){
    let sideNav = document.getElementById('sideNav');
    sideNav?.classList.add('s-n');
    sideNav?.classList.remove('d-t');
  }
  OpenNav(){
   
    this.sidebarContent =  !this.sidebarContent;
    let sideNav = document.getElementById('sideNav');
    sideNav?.classList.remove('s-n');
    sideNav?.classList.add('d-t');
    console.log( this.sidebarContent)
  }
}
