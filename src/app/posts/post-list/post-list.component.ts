import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';
import { Post } from '../post.model';
import { PostsService } from '../posts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [MatExpansionModule, CommonModule, MatButtonModule],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent implements OnInit, OnDestroy {
  // posts = [
  //   {title:"First Post", content:"This is the first post's content"},
  //   {title:"Second Post", content:"This is the Second post's content"},
  //   {title:"Third Post", content:"This is the Third post's content"},
  //   {title:"Forth Post", content:"This is the Forth post's content"},
  //   {title:"Fifth Post", content:"This is the Fifth post's content"}
  // ];
  posts: Post[] = [];
  private postsSub: Subscription = new Subscription;

  constructor(public postsService: PostsService) {}
  
  ngOnInit(): void {
    this.posts = this.postsService.getPosts();
    this.postsSub = this.postsService.getPostUpdateListener()
      .subscribe((posts: Post[]) =>{
        this.posts = posts;
      });
  }

  ngOnDestroy(): void {
    this.postsSub.unsubscribe();
  }
}
