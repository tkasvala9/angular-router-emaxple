import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  constructor(private ht:HttpClient) { }
  getdata(){
    return this.ht.get(" http://localhost:3000/posts");
  }
  postdata(data:any){
    return this.ht.post("http://localhost:3000/cart",data);
  }
  getCartItems(){
    return this.ht.get("http://localhost:3000/cart")
  }
}
