import { Component, Input, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { NgOptimizedImage } from '@angular/common';
import { SharedModule } from 'primeng/api';
import { Router } from '@angular/router';
import { PostModel } from '../../models/post.model';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { InputIconModule } from 'primeng/inputicon';

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
    templateUrl: './post-card-feed.component.html',
    styleUrl: './post-card-feed.component.css',
})
export class PostCardFeedComponent implements OnInit {
    constructor(private router: Router) {}

    @Input() post: PostModel = new PostModel();
    @Input() city: string | undefined = '';

    dateParsed: string[] = ['', ''];

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
            this.dateParsed = this.parseDate(this.post.createdAt);
        }
    }
}
