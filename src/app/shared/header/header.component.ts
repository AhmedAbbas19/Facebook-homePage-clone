import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { User } from "../../auth/user.model";
import { AuthService } from "../../auth/auth.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  user: User;
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
