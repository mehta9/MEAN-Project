import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { PostsService } from '../../posts.service';

@Component({
  selector: 'app-post-create',
  standalone: true,
  imports: [FormsModule, MatInputModule, MatCardModule, MatButtonModule],
  templateUrl: './post-create.component.html',
  styleUrl: './post-create.component.css'
})
export class PostCreateComponent {
  enteredContent="";
  enteredTitle = "";
  enteredValue='';


  constructor(public postsService: PostsService) {}
  onAddPost(form: NgForm){
    if(form.invalid){
      return;
    }
    this.postsService.addPost(form.value.title, form.value.content);
    form.resetForm();
  }
}
