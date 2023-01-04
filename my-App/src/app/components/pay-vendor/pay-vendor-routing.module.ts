import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PayVendorComponent } from "./pay-vendor.component";

const routes:Routes = [
    {path:'pay-vendor',component:PayVendorComponent}
]
@NgModule({
    imports:[
        RouterModule.forChild(routes),
    ],
    exports:[RouterModule]
})


export class PayVendorRoutingModule{}