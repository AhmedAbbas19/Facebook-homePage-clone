import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { Post } from "./post.model";
import { Story } from "./story.model";

@Injectable()
export class HomeService {
  baseUrl = "http://localhost:3000";
  constructor(private http: HttpClient) {}

  getAllPosts() {
    return this.http
      .get<Post[]>(`${this.baseUrl}/posts`)
      .pipe(map((posts: Post[]) => posts.reverse()));
  }

  addPost(post: Post) {
    return this.http.post(`${this.baseUrl}/posts`, post);
  }

  getAllStories() {
    return this.http
      .get<Story[]>(`${this.baseUrl}/stories`)
      .pipe(map((stories: Story[]) => stories.reverse()));
  }

  addStory(story: Story) {
    return this.http.post(`${this.baseUrl}/stories`, story);
  }

  getStory(id: number) {
    return this.http.get<Story>(`${this.baseUrl}/stories/${id}`);
  }
}
