import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private http : HttpClient){}

  products :any[]=[];

ngOnInit(): void {
  this.getData();
}

getData(){
  this.http.get("https://fakestoreapi.com/products").subscribe((response : any)=>{
    this.products = response;
    console.log("product page :",this.products)
  })
}

}
