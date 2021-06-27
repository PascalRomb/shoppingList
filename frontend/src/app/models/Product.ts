

export class Product {
  id: number;
  name:string;
  description:string;
  quantity:number;
  image_path;
  list_id : number;

  constructor(name:string, description:string, quantity:number, list_id: number) {
    this.name = name;
    this.description = description;
    this.quantity = quantity;
    this.list_id = list_id;
  }

}
