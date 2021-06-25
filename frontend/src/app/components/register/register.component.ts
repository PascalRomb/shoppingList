import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {User} from "../../models/user";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public password: string;
  public username: string;
  public email: string;

  constructor(private authService: AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  onSignup() {

    this.authService.signup(this.username, this.email, this.password).subscribe((value: User) => {
      this.authService.login(value.username, this.password).subscribe(value => {
        this.router.navigate(["/"]);
      }, error => console.error("error", error))
    });

  }
}
