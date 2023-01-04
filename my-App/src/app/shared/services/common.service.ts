import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private _httpClient: HttpClient) { }
  dummyData = [
    {
      orderId:"3525",
      transactionsId:"2335325",
      invoiceNo:"331",
      orderStatus:"Shipped",
      paymentDate:"12/30/2021",
      paymentMethod:"Cash On Delivery",
      paymentStatus:" Pending",
      shippingAmount:"Rs 50/-",
      subTotalAmount:"Rs 550/-",
      totalAmount:"Rs 600/-"
    },
    {
      orderId:"3525",
      transactionsId:"2335325",
      invoiceNo:"332",
      orderStatus:"Cancelled",
      paymentDate:"20/30/2021",
      paymentMethod:"Cash On Delivery",
      paymentStatus:" Pending",
      shippingAmount:"Rs 50/-",
      subTotalAmount:"Rs 550/-",
      totalAmount:"Rs 600/-"
    },
    {
      orderId:"3525",
      transactionsId:"2335325",
      invoiceNo:"333",
      orderStatus:"Delivered",
      paymentDate:"11/30/2021",
      paymentMethod:"Cash On Delivery",
      paymentStatus:"Paid",
      shippingAmount:"Rs 50/-",
      subTotalAmount:"Rs 550/-",
      totalAmount:"Rs 600/-"
    }
   ]
  
  get(url: string): Observable<any> {
    return this._httpClient.get(url);
  }
  post(url: string, model: any): Observable<any> {
    const body = JSON.stringify(model);
    return this._httpClient.post(url, body)
  }
  postImage(url: string, model: any): Observable<any> {
    let httpHeaders = new HttpHeaders()
    .set('isFile', '');
    return this._httpClient.post(url, model,{
      headers:httpHeaders
    })
  }
  put(url: string, id: number, model: any): Observable<any> {
    const body = JSON.stringify(model);
    
    return this._httpClient.post(url + id, body)
  }
  delete(url:string,id:number){
    return this._httpClient.delete(url + id);

  }

}
