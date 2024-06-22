import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {

  // it can be null or undefined
  form!: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup ({
      title: new FormControl(null),
      description: new FormControl(null),
      imagePath: new FormControl(null),
      author: new FormControl(null)
  });
  }

}
