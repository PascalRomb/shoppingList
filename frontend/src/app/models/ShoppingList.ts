import {Product} from "./Product";

export class ShoppingList {
  name: string;
  owner_id: number;
  products: Product[];



  constructor(name: string, owner_id:number) {
    this.name = name;
    this.owner_id = owner_id;
  }

}
