import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import {ProductService} from '../../service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
products: Product[] = [];
  constructor(
    private productService: ProductService) {
  }

  ngOnInit(){
    this.productService.getAll().subscribe(data=>{
      console.log(data);
      this.products = data;
    },error => {
      console.log(error);
    });
  }

}
