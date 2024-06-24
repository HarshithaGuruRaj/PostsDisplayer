import { Injectable } from "@angular/core";
import { PostService } from "./post.service";
import { Post } from "./post.model";
import { HttpClient } from "@angular/common/http";

//  https://live-posts-bcd24-default-rtdb.firebaseio.com/
@Injectable({ providedIn: 'root' })
export class BackendService {

    constructor(private postService: PostService, private http: HttpClient) { }
    // func1 Save
    saveData(){
        // step1: get list of posts from post.service
        const listOfPosts: Post[] = this.postService.getPosts();

        // step2: send list of posts to backend
        this.http.put("https://live-posts-bcd24-default-rtdb.firebaseio.com/posts.json", listOfPosts).subscribe((res) =>{
            console.log(res);
        });
    }


    //func2 Fetch
}