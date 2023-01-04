import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PayVendorRoutingModule } from "./pay-vendor-routing.module";
import { PayVendorComponent } from "./pay-vendor.component";

@NgModule({
    declarations:[PayVendorComponent],
    imports:[
        CommonModule,
        PayVendorRoutingModule
    ],
})



export class PayVendorModule{}