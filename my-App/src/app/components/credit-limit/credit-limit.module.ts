import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CreditLimitRoutingModule } from "./credit-limit-routing.module";
import { CreditLimitComponent } from "./credit-limit.component";

@NgModule({
    declarations:[
        CreditLimitComponent
    ],
    imports:[
        CommonModule,
        CreditLimitRoutingModule

    ]
})

export class CreditLimitModule{} 