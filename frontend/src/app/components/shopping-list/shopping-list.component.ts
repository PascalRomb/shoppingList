import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Product} from "../../models/Product";
import {ShoppingListService} from "../../services/shopping-list.service";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  public list_id;
  public products: Product[];
  public selectedProduct = null;

  public productName: string;
  public productDescription: string;
  public productQty: number;
  public productImage;

  constructor(private _activatedRoute: ActivatedRoute,
              private shoppingListService: ShoppingListService,
              private productService: ProductService) { }



  ngOnInit(): void {
    this.list_id = this._activatedRoute.snapshot.paramMap.get('id');
    this.populateProducts();
  }

  onClickItem(item: any) {
    if(item.id) {
      this.productService.getOne(item.id).subscribe(value => {
        if(value) {
          this.selectedProduct = value;
        }
      })

    }
  }

  onDeleteItem(item:any) {
    if(item.id) {
      this.productService.delete(item.id).subscribe(value => {
        this.populateProducts();
        this.selectedProduct = undefined;
      }, error => console.error(error))
    }
  }

  private populateProducts() {
    if(this.list_id) {
      this.shoppingListService.getOne(this.list_id).subscribe(value => {
        if(value) {
          this.products = value.products;
        }
      }, error => console.error(error))
    }
  }

  public onAddProduct() {
    if(this.productName && this.productDescription && this.productQty) {
      let product = new Product(this.productName, this.productDescription, this.productQty, this.list_id);
      this.productService.create(product, this.productImage).subscribe(value => {
        this.productName = undefined;
        this.productDescription = undefined;
        this.productQty = undefined;
        this.productImage = undefined;
        this.populateProducts();
      }, error => console.error(error));
    }

  }


  onDeleteProduct(item: any) {
    this.onDeleteItem(item);
  }
}

