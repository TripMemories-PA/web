import { Component, Input, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { NgOptimizedImage } from '@angular/common';
import { MessageService, SharedModule } from 'primeng/api';
import { Router } from '@angular/router';
import { PostModel } from '../../models/post.model';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { InputIconModule } from 'primeng/inputicon';
import { PostsService } from '../../services/posts/posts.service';

@Component({
    selector: 'app-post-card-feed',
    standalone: true,
    imports: [
        CardModule,
        NgOptimizedImage,
        SharedModule,
        RatingModule,
        FormsModule,
        InputIconModule,
    ],
    providers: [MessageService],
    templateUrl: './post-card-feed.component.html',
    styleUrl: './post-card-feed.component.css',
})
export class PostCardFeedComponent implements OnInit {
    constructor(
        private router: Router,
        private messageService: MessageService,
        private postsService: PostsService,
    ) {}

    @Input() post: PostModel = new PostModel();
    @Input() city: string | undefined = '';

    dateParsed: string[] = ['', ''];
    postLiked: boolean | undefined = false;
    postLikesCount: number | undefined = 0;

    goToPost() {
        this.router.navigate([`/post/${this.post.id}`]);
    }

    parseDate(date: Date | string): string[] {
        if (!date) {
            return ['', ''];
        }
        const dateObj = new Date(date);
        if (isNaN(dateObj.getTime())) {
            return ['', ''];
        }
        return [
            dateObj.toLocaleDateString('fr-FR'),
            dateObj.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }),
        ];
    }

    ngOnInit(): void {
        if (this.post && this.post.createdAt) {
            this.postLiked = this.post.isLiked;
            this.postLikesCount = this.post.likesCount;
            this.dateParsed = this.parseDate(this.post.createdAt);
        }
    }

    likePost() {
        if (this.post?.id) {
            this.postsService.likePost(this.post.id).subscribe({
                next: (_) => {
                    this.messageService.add({
                        severity: 'success',
                        summary: 'Post liké',
                        detail: 'Vous avez liké ce post !',
                        life: 5000,
                    });
                    this.postLiked = true;
                    this.postLikesCount = (this.postLikesCount ?? 0) + 1;
                },
                error: (error) => {
                    this.messageService.add({
                        severity: 'error',
                        summary: 'Erreur lors du like',
                        detail: error.message,
                        life: 5000,
                    });
                },
            });
        }
    }

    removeLikePost() {
        if (this.post?.id) {
            this.postsService.deleteLikePost(this.post.id).subscribe({
                next: (_) => {
                    this.messageService.add({
                        severity: 'success',
                        summary: 'Post disliké',
                        detail: 'Vous avez dislike ce post !',
                        life: 5000,
                    });
                    this.postLiked = false;
                    this.postLikesCount = this.postLikesCount ? this.postLikesCount - 1 : 0;
                },
                error: (error) => {
                    this.messageService.add({
                        severity: 'error',
                        summary: 'Erreur lors du dislike',
                        detail: error.message,
                        life: 5000,
                    });
                },
            });
        }
    }
}
