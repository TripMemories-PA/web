import { Component, OnInit } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { PaginatorModule } from 'primeng/paginator';
import { PostCardFeedComponent } from '../../components/post-card-feed/post-card-feed.component';
import { MonumentCardFeedComponent } from '../../components/monument-card-feed/monument-card-feed.component';
import { PostsService } from '../../services/posts/posts.service';
import { PostModel } from '../../models/post.model';
import { NgForOf } from '@angular/common';

@Component({
    selector: 'app-feed-page',
    standalone: true,
    imports: [
        InputTextModule,
        PaginatorModule,
        PostCardFeedComponent,
        MonumentCardFeedComponent,
        NgForOf,
    ],
    templateUrl: './feed-page.component.html',
    styleUrl: './feed-page.component.css',
})
export class FeedPageComponent implements OnInit {
    constructor(private postsService: PostsService) {}

    posts: PostModel[] = [];

    ngOnInit(): void {
        this.getPosts();
    }

    getPosts() {
        return this.postsService.getPosts().subscribe({
            next: (posts) => {
                this.posts = posts.data;
            },
            error: (error) => {
                console.error(error);
            },
        });
    }
}
