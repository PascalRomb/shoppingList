import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "../models/Product";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }


  public getOne(productId):Observable<Product> {
    return this.http.get<Product>("/api/v1/products/" + productId);
  }

  public create(product: Product, productImage) {
    console.log("product image", productImage)
    const formData: FormData = new FormData();
    formData.append('files', productImage[0], productImage[0].name);
    formData.append('name', product.name);
    formData.append('description', product.description);
    formData.append('quantity', product.quantity.toString());
    formData.append('list_id', product.list_id.toString());

    return this.http.post("/api/v1/products", formData);
  }

}
