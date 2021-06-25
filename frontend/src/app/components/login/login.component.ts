import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Route, Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public returnUrl;
  public user: string;
  public password: string;
  public areWrongCredentials:boolean = false;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private authService: AuthService) { }



  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login() {
    //make request
    this.authService.login(this.user, this.password);
    this.authService.login(this.user, this.password).subscribe(value => {
      this.router.navigate([this.returnUrl]);
    }, error => this.areWrongCredentials = (error.status == 404 || error.status == 401))
  }
}
