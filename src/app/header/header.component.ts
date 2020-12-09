import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { User } from "./../auth/user.model";
import { AuthService } from "./../auth/auth.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  user: User;
  // = {
  //   id: 1,
  //   firstName: "Ahmed",
  //   lastName: "Abbas",
  //   email: "ahmeddabbas19@gmail.com",
  //   avatar:
  //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQocR8G-b7HTmA8H4wQ32v7Y_mNUOE6Dkl89A&usqp=CAU",
  // };
  searchForm: FormGroup;
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.searchForm = new FormGroup({
      searchText: new FormControl(null, Validators.required),
    });
    this.authService.user.subscribe((user) => (this.user = user));
  }

  logout() {
    this.authService.logout();
  }
}
