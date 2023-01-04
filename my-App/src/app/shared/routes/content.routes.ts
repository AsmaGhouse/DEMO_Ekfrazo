import { Routes } from "@angular/router";

export const contentRoutes:Routes =[
    {path:'cards',loadChildren:()=> import('../../components/cards/cards.module').then(m =>m.CardsModule)},
    {path:'cash',loadChildren:()=> import('../../components/cash/cash.module').then(m =>m.CashModule)},
    {path:'credit-limit',loadChildren:()=> import('../../components/credit-limit/credit-limit.module').then(m =>m.CreditLimitModule)},
    {path:'customer',loadChildren:()=> import('../../components/customer/customer.module').then(m =>m.CustomerModule)},
    {path:'drivers',loadChildren:()=> import('../../components/drivers/drivers.module').then(m =>m.DriverModule)},
    {path:'fleet',loadChildren:()=> import('../../components/fleet/fleet.module').then(m =>m.FleetModule)},
    {path:'invoice',loadChildren:()=> import('../../components/invoice/invoice.module').then(m =>m.InvoiceModule)},
    {path:'pay-vendor',loadChildren:()=> import('../../components/pay-vendor/pay-vendor.module').then(m =>m.PayVendorModule)},
    {path:'transaction',loadChildren:()=> import('../../components/transaction/transaction.module').then(m =>m.TransactionModule)}

]