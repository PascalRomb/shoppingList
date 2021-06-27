import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ShoppingListService} from "../../services/shopping-list.service";
import {ShoppingList} from "../../models/ShoppingList";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  public shoppingListName: string;
  public shoppingLists: ShoppingList[];
  constructor(private _router:Router, private _shoppingListService: ShoppingListService) {
  }

  ngOnInit(): void {
    this.populateLists();
  }

  onClickElement(item: any) {
    this._router.navigate(['/shopping_list', item.id]);
  }

  onDeleteElement(item: any) {
    this._shoppingListService.delete(item.id).subscribe(value => {
      this.populateLists();
    }, error => console.error(error));
  }

  private populateLists() {
    this._shoppingListService.retrieve_lists().subscribe(value => {
      if(value) {
        this.shoppingLists = value;
      }
    }, error => console.error(error));
  }

  public onAddList() {
    if(this.shoppingListName){
      this._shoppingListService.create_list(this.shoppingListName).subscribe(value => {
        this.populateLists();
        this.shoppingListName = undefined;
      },error => console.error(error))

    }

  }
}
