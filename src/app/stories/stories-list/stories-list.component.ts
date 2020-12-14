import { Component, OnInit } from "@angular/core";
import { SpinnerService } from "../../shared/spinner.service";
import { HomeService } from "./../../home/home.service";
import { Story } from "./../../home/story.model";

@Component({
  selector: "app-stories-list",
  templateUrl: "./stories-list.component.html",
  styleUrls: ["./stories-list.component.scss"],
})
export class StoriesListComponent implements OnInit {
  stories: Story[] = [];
  loading = false;
  constructor(
    private homeService: HomeService,
    private spinnerService: SpinnerService
  ) {}

  ngOnInit() {
    this.spinnerService.loadingSub.subscribe((loading) => {
      this.loading = loading.url.includes("stories") ? loading.loading : false;
    });

    this.homeService.getAllStories().subscribe((stories: Story[]) => {
      this.stories = stories;
    });
  }
}
