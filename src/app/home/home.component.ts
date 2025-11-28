import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient){ }

  productData: any[] = [];

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.http.get("https://dummyjson.com/products").subscribe((response: any) =>{
      this.productData = response.products;
      console.log(this.productData)
    })
  }

}
