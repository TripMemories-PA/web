import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../../services/posts/posts.service';

@Component({
    selector: 'app-post-page',
    standalone: true,
    imports: [],
    templateUrl: './post-page.component.html',
    styleUrl: './post-page.component.css',
})
export class PostPageComponent implements OnInit {
    constructor(
        private _activatedRoute: ActivatedRoute,
        private postsService: PostsService,
    ) {}

    postId: string = '';

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
                console.log(response);
            },
            error: (error) => {
                console.error(error);
            },
        });
    }
}
