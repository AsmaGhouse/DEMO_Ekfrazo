import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { PayVendorRoutingModule } from "./pay-vendor-routing.module";
import { PayVendorComponent } from "./pay-vendor.component";

@NgModule({
    declarations:[PayVendorComponent],
    imports:[
        CommonModule,
        PayVendorRoutingModule,
        SharedModule
    ],
})



export class PayVendorModule{}