import { Component, Input, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { NgIf, NgOptimizedImage } from '@angular/common';
import { RatingModule } from 'primeng/rating';
import { SharedModule } from 'primeng/api';
import { FormsModule } from '@angular/forms';
import { PostModel } from '../../models/post.model';
import { Router } from '@angular/router';
import { PostsService } from '../../services/posts/posts.service';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { ProgressBarModule } from 'primeng/progressbar';

@Component({
    selector: 'app-post-card',
    standalone: true,
    imports: [
        CardModule,
        NgOptimizedImage,
        RatingModule,
        SharedModule,
        FormsModule,
        NgIf,
        ButtonModule,
        DialogModule,
        ProgressBarModule,
    ],
    templateUrl: './post-card.component.html',
    styleUrl: './post-card.component.css',
})
export class PostCardComponent implements OnInit {
    constructor(
        private router: Router,
        private postService: PostsService,
    ) {}

    @Input() post: PostModel = new PostModel();
    @Input() city: string | undefined = '';
    @Input() myPost: boolean | undefined = false;

    dateParsed: string[] = ['', ''];
    visible: boolean = false;
    loading: boolean = false;

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

    deletePost() {
        if (!this.post.id) {
            return console.error('No post');
        }
        this.postService.deletePost(this.post.id).subscribe({
            next: () => {
                window.location.reload();
            },
            error: (error) => {
                console.error(error);
            },
        });
    }

    ngOnInit(): void {
        if (this.post && this.post.createdAt) {
            this.dateParsed = this.parseDate(this.post.createdAt);
        }
    }
}
