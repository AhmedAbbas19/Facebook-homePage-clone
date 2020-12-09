import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { User } from "./user.model";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Injectable()
export class AuthService {
  baseUrl = "http://localhost:3000";
  user = new BehaviorSubject<User>(null);
  constructor(private http: HttpClient, private router: Router) {}

  login(user: { email: string; password: string }) {
    if (user.email === "abc@gmail.com") {
      let dummyId = 1; //delete this
      this.http
        .get<User>(`${this.baseUrl}/users/${dummyId}`)
        .subscribe((user) => {
          localStorage.setItem("email", user.email);
          this.user.next(user);
          this.router.navigate([""]);
        });
    } else {
      throw new Error("Authentication Faild!");
    }
  }

  autoLogin() {
    let email = localStorage.getItem("email");
    let dummyId = 1; //delete this
    if (email) {
      this.http
        .get<User>(`${this.baseUrl}/users/${dummyId}`)
        .subscribe((user) => {
          this.user.next(user);
        });
      return true;
    } else {
      return false;
    }
  }

  logout() {
    localStorage.removeItem("email");
    this.router.navigate(["auth"]);
  }
}
