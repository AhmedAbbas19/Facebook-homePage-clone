import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { StoriesComponent } from "./stories.component";
import { StoryItemComponent } from "./story-item/story-item.component";

const routes: Routes = [
  {
    path: "",
    component: StoriesComponent,
    children: [{ path: ":id", component: StoryItemComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoriesRoutingModule {}
