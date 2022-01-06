import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Observable} from 'rxjs';
import { environment } from 'src/environments/environment';


const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor(private http:HttpClient) {
  }

  getAll():Observable<Product[]> {
    return this.http.get<Product[]>(API_URL+'/product/list');
  }

  // saveProduct(product:Product):Observable<Product> {
  //   return this.http.post<Product>("http://localhost:8080/product",product);
  // }

  findById(id:number):Observable<Product>{
    return this.http.get<Product>(`${API_URL}/product/find/${id}`);
  }

  updateProduct(id:number,product:Product):Observable<Product>{
    return this.http.put<Product>(`${API_URL}/product/edit/${id}`,product)
  }
  deleteProduct(id:number){
    return this.http.delete<Product>(`${API_URL}/product/delete/${id}`);
  }

  saveProduct(product:Product):Observable<Product>{
    return this.http.post<Product>(API_URL+'/product/create', product)
  }
}


