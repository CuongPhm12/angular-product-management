import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Product} from '../../model/product';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
  productForm = new FormGroup({});
  id: number=0;

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private router:Router
  ) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap)=>{
      this.id = Number(paramMap.get('id')) ;
      this.getProduct(this.id)

    });
  }

  //     // @ts-ignore

  //     this.productForm = new FormGroup({
  //       id: new FormControl(product.id),
  //       name: new FormControl(product.name),
  //       price:  new FormControl(product.price),
  //       description: new FormControl(product.description),
  //


  getProduct(id: number) {
    return this.productService.findById(id).subscribe(() => {
      // @ts-ignore
      const product:Product = this.getProduct(this.id);
      this.productForm = new FormGroup({
        id: new FormControl(product.id),
        name: new FormControl(product.name),
        price: new FormControl(product.price),
        description: new FormControl(product.description),
      });
    });
  }

    deleteProduct(id:number) {
      this.productService.deleteProduct(id).subscribe(() => {
        this.router.navigate(['/product/list']);
      }, error => {
        console.log(error);
      });
    }

  ngOnInit(): void {
  }

}

