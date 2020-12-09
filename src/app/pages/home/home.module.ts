import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeRoutingModule } from "./home-routing.module";
import { HeaderComponent } from "../../header/header.component";
import { HomeComponent } from "./home.component";
import { MaterialModule } from "../../shared/material.module";
import { ReactiveFormsModule } from "@angular/forms";
import { HomeService } from "./home.service";
import { SpinnerComponent } from "../../shared/spinner/spinner.component";

@NgModule({
  declarations: [HomeComponent, HeaderComponent, SpinnerComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  providers: [HomeService],
})
export class HomeModule {}
