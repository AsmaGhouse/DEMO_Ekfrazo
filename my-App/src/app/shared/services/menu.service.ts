import { Injectable } from '@angular/core';
import { Menu } from '../interface/menu.interface';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }
  
  MENUITEMS: Menu[] = [
    { title: 'Credit Limit', path: 'credit-limit/credit-limit', icon: 'fa fa-credit-card', active: false },
    { title: 'Cash', path: 'cash/cash', icon: 'fa fa-money', active: true },
    { title: 'Transaction', path: 'transaction/transaction', icon: 'fa fa-gg-circle', active: false },
    { title: 'Invoice', path: 'invoice/invoice', icon: 'fa fa-newspaper-o', active: false },
    { title: 'Fleet', path: 'fleet/fleet', icon: 'fa fa-truck', active: false },
    { title: 'Customer', path: 'customer/customer', icon: 'fa fa-user', active: false },
    { title: 'Pay a vendor', path: 'pay-vendor/pay-vendor', icon: 'fa fa-cc-discover', active: false },
    { title: 'Cards', path: 'cards/cards', icon: 'fa fa-credit-card-alt', active: false },
    { title: 'Drivers', path: 'drivers/drivers', icon: 'fa fa-user-circle', active: false },
  ]
}
