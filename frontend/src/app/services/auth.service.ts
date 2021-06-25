import {Injectable} from '@angular/core';
import {JwtHelperService} from '@auth0/angular-jwt';
import {HttpClient} from "@angular/common/http";
import {User} from "../models/user";
import {tap} from "rxjs/operators";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private jwtHelperService: JwtHelperService
  constructor(private http: HttpClient, private router:Router) {
    this.jwtHelperService = new JwtHelperService();
  }

  public signup(username, email, password) {
    let user = new User(username, email, password);
    return this.http.post<User>("/api/v1/auth/signup", user);
  }

  public login(user, password) {
    let userObj = new User(user, user, password)
    return this.http.post<string>("/api/v1/auth/login", userObj)
      .pipe(tap(token => this.setToken(token)));
  }

  public getToken() {
    const token = localStorage.getItem('access_token');
    return token && !this.jwtHelperService.isTokenExpired(token) ? token : null;
  }

  public isAuthenticated() {
    return !!this.getToken();
  }

  public logout() {
    localStorage.removeItem('access_token');
    this.router.navigate(['/login']);
  }

  private setToken(token: string) {
    if(token)
      localStorage.setItem('access_token', token);
  }



}
