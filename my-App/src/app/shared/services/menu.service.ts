import { Injectable } from '@angular/core';
import { Menu } from '../interface/menu.interface';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }
  
  MENUITEMS: Menu[] = [
    { title: 'Credit Limit', path: 'credit-limit/credit', icon: 'credit-card', active: false },
    { title: 'Cash', path: 'cash/cash', icon: 'credit-card', active: true },
    { title: 'Transaction', path: 'transaction/transaction', icon: 'credit-card', active: false },
    { title: 'Invoice', path: 'invoice/invoice', icon: 'credit-card', active: false },
    { title: 'Fleet', path: 'fleet/fleet', icon: 'credit-card', active: false },
    { title: 'Customer', path: 'customer/customer', icon: 'credit-card', active: false },
    { title: 'Pay a vendor', path: 'pay-vendor/pay-vendor', icon: 'credit-card', active: false },
    { title: 'Cards', path: 'cards/cards', icon: 'credit-card', active: false },
    { title: 'Drivers', path: 'drivers/drivers', icon: 'credit-card', active: false },
  ]
}
