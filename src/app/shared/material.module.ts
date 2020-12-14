import { NgModule } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatDialogModule } from "@angular/material/dialog";
import { MatMenuModule } from "@angular/material/menu";
import { MatIconModule } from "@angular/material/icon";
import { StoryDialogComponent } from "./story-dialog/story-dialog.component";
import { MatListModule } from "@angular/material/list";
import { MatGridListModule } from "@angular/material/grid-list";
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
} from "@angular/material";
import { SpinnerComponent } from "./spinner/spinner.component";

const modules = [
  MatCardModule,
  MatSnackBarModule,
  MatProgressSpinnerModule,
  MatDialogModule,
  MatMenuModule,
  MatIconModule,
  MatFormFieldModule,
  MatButtonModule,
  MatInputModule,
  MatListModule,
  MatGridListModule,
];

@NgModule({
  declarations: [StoryDialogComponent, SpinnerComponent],
  imports: [...modules],
  entryComponents: [StoryDialogComponent],
  exports: [...modules, StoryDialogComponent, SpinnerComponent],
})
export class MaterialModule {}
