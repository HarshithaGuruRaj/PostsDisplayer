import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Post } from '../post.model';
import { PostService } from '../post.service';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {

  // it can be null or undefined
  form!: FormGroup;
  index: number = 0;
  editMode: boolean = false;
  constructor(private postService: PostService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let title = '';
    let description = '';
    let imagePath = '';
    let author = '';
    this.route.params.subscribe( (params:Params ) => {
      if(params["index"]){
        console.log(params.index);
        this.index=params["index"];
        
        const post = this.postService.getPost(this.index);
        title = post.title;
        description = post.description;
        imagePath = post.imagePath;
        author = post.author;

        this.editMode= true;
      }
    });
    this.form = new FormGroup ({
      title: new FormControl(title, [Validators.required]),
      description: new FormControl(description, [Validators.required]),
      imagePath: new FormControl(imagePath, [Validators.required]),
      author: new FormControl(author)
  });
  }

  onSubmit() {
    const title = this.form.value.title;
    const description = this.form.value.description;
    const imagePath = this.form.value.imagePath;
    const author = this.form.value.author;

    const post: Post = new Post(title, description, imagePath, author, new Date(), 0);

    if(this.editMode){
      this.postService.updatePost(this.index, post);
    }else{
      this.postService.addPosts(post);
    }
    

    this.router.navigate(['/post-list']);

  }

}
