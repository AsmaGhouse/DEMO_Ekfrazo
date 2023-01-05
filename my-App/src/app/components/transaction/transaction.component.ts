import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/shared/services/common.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
constructor(private _commonService:CommonService) {
  
}
  data:any;

  ngOnInit(): void {
    this.data = this._commonService.dummyData
    
  }

}
