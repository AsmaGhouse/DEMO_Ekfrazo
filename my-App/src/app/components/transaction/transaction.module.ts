import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { TransactionRoutingModule } from "./transaction-routing.module";
import { TransactionComponent } from "./transaction.component";

@NgModule({
    declarations:[TransactionComponent],
    imports:[
        CommonModule,
        TransactionRoutingModule,
        SharedModule
    ]
})


export class TransactionModule{}