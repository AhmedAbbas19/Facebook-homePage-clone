import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StoriesRoutingModule } from "./stories-routing.module";
import { StoriesListComponent } from "./stories-list/stories-list.component";
import { HomeService } from "../home/home.service";
import { MaterialModule } from "../shared/material.module";
import { StoriesComponent } from "./stories.component";
import { StoryItemComponent } from "./story-item/story-item.component";
import { SpinnerComponent } from "../shared/spinner/spinner.component";

@NgModule({
  declarations: [StoriesListComponent, StoriesComponent, StoryItemComponent],
  imports: [CommonModule, StoriesRoutingModule, MaterialModule],
  providers: [HomeService],
})
export class StoriesModule {}
