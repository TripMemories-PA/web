import { Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CreatePostCardComponent } from '../../../components/create-post-card/create-post-card.component';
import { DialogModule } from 'primeng/dialog';
import { NgForOf, NgIf } from '@angular/common';
import { PaginatorModule } from 'primeng/paginator';
import { PostCardComponent } from '../../../components/post-card/post-card.component';
import { SharedModule } from 'primeng/api';
import { PostModel } from '../../../models/post.model';

@Component({
    selector: 'app-user-posts',
    standalone: true,
    imports: [
        ButtonModule,
        CreatePostCardComponent,
        DialogModule,
        NgForOf,
        NgIf,
        PaginatorModule,
        PostCardComponent,
        SharedModule,
    ],
    templateUrl: './user-posts.component.html',
    styleUrl: './user-posts.component.css',
})
export class UserPostsComponent {
    @Input() posts: PostModel[] = [];
}
