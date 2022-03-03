import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductserviceService } from './../productservice.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public ht: ProductserviceService) { }

  ngOnInit(): void {
    this.ht.getdata().subscribe((data)=>this.show(data));
  }
  hdata:any;
  show(data: any) {
    return this.hdata=data;
  }

  addToCart(item: any) {
    item.id = Math.floor(Math.random() * 100)
    this.ht.postdata(item).subscribe((data) => console.log(data))
  }

}
