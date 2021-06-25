import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {MDBBootstrapModule} from "angular-bootstrap-md";
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { ProductComponent } from './components/product/product.component';
import { ListComponent } from './components/list/list.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import {JWT_OPTIONS, JwtModule} from "@auth0/angular-jwt";
import {AuthService} from "./services/auth.service";
import {AuthenticationGuard} from "./guards/authentication.guard";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {HttpInterceptor} from "./interceptors/http.interceptor";

export function jwtOptionsFactory(authService: AuthService) {
  return {
    tokenGetter: () => {
      return authService.getToken();
    },
    whitelistedDomains: ['localhost:5000']
  }
}

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavbarComponent,
    ShoppingListComponent,
    ProductComponent,
    ListComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    JwtModule.forRoot({
      jwtOptionsProvider: {provide: JWT_OPTIONS, useFactory: jwtOptionsFactory, deps: [AuthService]}
    }),
    FormsModule,
  ],
  providers: [AuthService,
    AuthenticationGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
