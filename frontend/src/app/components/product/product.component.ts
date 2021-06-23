import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product = {quantity:3, name:'Mele', description:'frutto di origine italiana', imagePath:""}

  constructor() { }

  ngOnInit(): void {
  }

  public getUrl(imagePath) {
    if(imagePath == null || imagePath == '') return "assets/placeholder-image.png";
    return imagePath;
  }

}
