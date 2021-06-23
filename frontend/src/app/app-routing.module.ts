import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomepageComponent} from "./components/homepage/homepage.component";
import {ShoppingListComponent} from "./components/shopping-list/shopping-list.component";


const routes: Routes = [
  {path:'', component: HomepageComponent},
  {path:'shopping_list/:id', component: ShoppingListComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
