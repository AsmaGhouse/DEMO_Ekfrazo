import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CreditLimitComponent } from './components/credit-limit/credit-limit.component';
import { CashComponent } from './components/cash/cash.component';
import { TransactionComponent } from './components/transaction/transaction.component';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { FleetComponent } from './components/fleet/fleet.component';
import { CustomerComponent } from './components/customer/customer.component';
import { PayVendorComponent } from './components/pay-vendor/pay-vendor.component';
import { CardsComponent } from './components/cards/cards.component';
import { DriversComponent } from './components/drivers/drivers.component';

@NgModule({
  declarations: [
    AppComponent,
    CreditLimitComponent,
    CashComponent,
    TransactionComponent,
    InvoiceComponent,
    FleetComponent,
    CustomerComponent,
    PayVendorComponent,
    CardsComponent,
    DriversComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
