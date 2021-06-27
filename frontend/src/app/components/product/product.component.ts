import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../../models/Product";
import {HttpInterceptor} from "../../interceptors/http.interceptor";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product: Product;
  @Output() onDeleteEventEmitter: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  public getUrl(imagePath) {
    console.log("imagePath" , imagePath)
    if(imagePath == null || imagePath == '') return "assets/placeholder-image.png";
    return HttpInterceptor.URL + "/api/v1/static/" + imagePath;
  }

  onBuy() {
    this.onDeleteEventEmitter.emit(this.product);
  }
}
