import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomepageComponent} from "./components/homepage/homepage.component";
import {ShoppingListComponent} from "./components/shopping-list/shopping-list.component";
import {LoginComponent} from "./components/login/login.component";
import {AuthenticationGuard} from "./guards/authentication.guard";
import {RegisterComponent} from "./components/register/register.component";


const routes: Routes = [
  {path:'', component: HomepageComponent, canActivate: [AuthenticationGuard]},
  {path:'shopping_list/:id', component: ShoppingListComponent, canActivate: [AuthenticationGuard]},
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
