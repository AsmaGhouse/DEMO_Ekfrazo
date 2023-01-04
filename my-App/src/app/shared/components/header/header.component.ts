import { Component, OnInit } from '@angular/core';
import { CollaspeService } from '../../services/collaspe.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userImage:string = 'assets/images/user.png';
  constructor(public _collapseService:CollaspeService) { }

  ngOnInit(): void {
   
 
  }
  collapseSidebar(){
  this._collapseService.openNav = !this._collapseService.openNav;

  }
}
