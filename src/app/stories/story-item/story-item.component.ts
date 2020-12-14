import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
// import { concat } from "rxjs/operators";
import { SpinnerService } from "../../shared/spinner.service";
import { HomeService } from "./../../home/home.service";
import { Story } from "./../../home/story.model";

@Component({
  selector: "app-story-item",
  templateUrl: "./story-item.component.html",
  styleUrls: ["./story-item.component.scss"],
})
export class StoryItemComponent implements OnInit {
  story: Story = {
    id: 3,
    image: "https://picsum.photos/500/600",
    avatar: "https://picsum.photos/100/103",
  };
  storyLoading = false;
  constructor(
    private route: ActivatedRoute,
    private homeService: HomeService,
    private spinnerService: SpinnerService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(({ id }) => {
      this.homeService.getStory(id).subscribe((story: Story) => {
        this.story = story;
      });
    });

    this.spinnerService.loadingSub.subscribe((loading) => {
      this.storyLoading = loading.url.includes("stories")
        ? loading.loading
        : false;
    });
  }
}
