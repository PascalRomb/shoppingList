import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ShoppingList} from "../models/ShoppingList";
import {AuthService} from "./auth.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  constructor(private http:HttpClient, private authService: AuthService) {


  }

  public retrieve_lists():Observable<ShoppingList[]> {
    return this.http.get<ShoppingList[]>("/api/v1/shoppinglists");
  }

  public getOne(list_id): Observable<ShoppingList> {
      return this.http.get<ShoppingList>("/api/v1/shoppinglists/" + list_id)
  }

  public delete(list_id) {
    return this.http.delete("/api/v1/shoppinglists/" + list_id)
  }


  public create_list(nameList: string){
    let userId = this.authService.getLoggedUserId()
    let shoppingList = new ShoppingList(nameList, userId);
    return this.http.post<ShoppingList>("/api/v1/shoppinglists", shoppingList);
  }
}
