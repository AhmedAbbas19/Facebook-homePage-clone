import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { User } from "../auth/user.model";
import { Post } from "./post.model";
import { Story } from "./story.model";
import { HomeService } from "./home.service";
import { AuthService } from "../auth/auth.service";
import { SpinnerService } from "../shared/spinner.service";
import { MatDialog } from "@angular/material";
import { StoryDialogComponent } from "../shared/story-dialog/story-dialog.component";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  user: User;
  posts: Post[] = [];
  stories: Story[] = [];
  postForm: FormGroup;

  authLoading = false;
  storiesLoading = false;
  postsLoading = false;

  constructor(
    private homeService: HomeService,
    private authService: AuthService,
    private spinnerService: SpinnerService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.postForm = new FormGroup({
      message: new FormControl(null, Validators.required),
    });

    this.authService.user.subscribe((user) => (this.user = user));

    this.spinnerService.loadingSub.subscribe((loading) => {
      this.authLoading = loading.url.includes("users")
        ? loading.loading
        : false;
      this.storiesLoading = loading.url.includes("stories")
        ? loading.loading
        : false;
      this.postsLoading = loading.url.includes("posts")
        ? loading.loading
        : false;
    });

    this.homeService.getAllPosts().subscribe((posts) => (this.posts = posts));
    this.homeService
      .getAllStories()
      .subscribe((posts) => (this.stories = posts));
  }

  onSubmit() {
    if (this.postForm.invalid) {
      return;
    }
    let post: Post = {
      ...this.postForm.value,
      title: `${this.user.firstName} ${this.user.lastName}`,
      avatar: this.user.avatar,
      date: "12/1/2020",
    };
    this.postForm.reset();
    this.homeService
      .addPost(post)
      .subscribe((post: Post) => this.posts.unshift(post));
  }
  openDialog() {
    let dialogRef = this.dialog.open(StoryDialogComponent, {
      width: "500px",
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        let story: Story = { image: result, avatar: this.user.avatar };
        this.homeService.addStory(story).subscribe((story: Story) => {
          this.stories.unshift(story);
        });
      }
    });
  }
}
