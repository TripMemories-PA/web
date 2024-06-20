import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../../services/posts/posts.service';
import { PostModel } from '../../models/post.model';
import { ButtonModule } from 'primeng/button';
import { NgOptimizedImage } from '@angular/common';
import { TimeAgoPipe } from '../../time-ago.pipe';
import { TooltipModule } from 'primeng/tooltip';

@Component({
    selector: 'app-post-page',
    standalone: true,
    imports: [ButtonModule, NgOptimizedImage, TimeAgoPipe, TooltipModule],
    templateUrl: './post-page.component.html',
    styleUrl: './post-page.component.css',
})
export class PostPageComponent implements OnInit {
    constructor(
        private _activatedRoute: ActivatedRoute,
        private postsService: PostsService,
    ) {}

    postId: string = '';
    post: PostModel | undefined;
    postDate: Date | undefined;
    postDateFormatted: string = '';

    ngOnInit() {
        this._activatedRoute.paramMap.subscribe((params) => {
            const param = params.get('id');
            this.postId = param as string;
            this.getPost(param as string);
        });
    }

    getPost(id: string) {
        this.postsService.getPost(id).subscribe({
            next: (response) => {
                this.post = response;
                this.postDate = response.createdAt;
                if (this.postDate) {
                    this.postDateFormatted =
                        this.postDate.toLocaleDateString() +
                        ' ' +
                        this.postDate.toLocaleTimeString();
                }
            },
            error: (error) => {
                console.error(error);
            },
        });
    }
}
