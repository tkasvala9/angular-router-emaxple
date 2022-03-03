import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductserviceService } from './../productservice.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(public ht: ProductserviceService) { }
  ngOnInit(): void {
    this.ht.getCartItems().subscribe((data) => this.insertIntoCartList(data));
  }
  cartList: any;
  insertIntoCartList(data: any) {
    this.cartList = data;
  }
}
