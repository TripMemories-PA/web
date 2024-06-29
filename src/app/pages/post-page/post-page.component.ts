import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PostsService } from '../../services/posts/posts.service';
import { PostModel } from '../../models/post.model';
import { ButtonModule } from 'primeng/button';
import { NgOptimizedImage, Location } from '@angular/common';
import { TimeAgoPipe } from '../../time-ago.pipe';
import { TooltipModule } from 'primeng/tooltip';
import { AuthService } from '../../services/auth/auth.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { ConfirmPopup, ConfirmPopupModule } from 'primeng/confirmpopup';
import { CommentsSectionComponent } from '../../container/comments/comments-section/comments-section.component';

@Component({
    selector: 'app-post-page',
    standalone: true,
    imports: [
        ButtonModule,
        NgOptimizedImage,
        TimeAgoPipe,
        TooltipModule,
        ToastModule,
        ConfirmPopupModule,
        RouterLink,
        CommentsSectionComponent,
    ],
    providers: [MessageService, ConfirmationService],
    templateUrl: './post-page.component.html',
    styleUrl: './post-page.component.css',
})
export class PostPageComponent implements OnInit {
    constructor(
        private _activatedRoute: ActivatedRoute,
        private _location: Location,
        private postsService: PostsService,
        private authService: AuthService,
        private messageService: MessageService,
        private confirmationService: ConfirmationService,
    ) {}

    @ViewChild(ConfirmPopup) confirmPopup!: ConfirmPopup;

    postId: string = '';
    post: PostModel | undefined;
    postDate: Date | undefined;
    postDateFormatted: string = '';
    ok: string = '';
    error: string = '';
    alreadyLiked: boolean = false;
    showComments: boolean = false;

    ngOnInit() {
        this._activatedRoute.paramMap.subscribe((params) => {
            const param = params.get('id');
            this.postId = param as string;
            if (this.authService.user?.access_token) {
                this.getPost(param as string, true);
            } else {
                this.getPost(param as string);
            }
        });
    }

    getPost(id: string, isConnected: boolean = false) {
        this.postsService.getPost(id, isConnected).subscribe({
            next: (response) => {
                this.post = response;
                this.postDate = response.createdAt;
                this.alreadyLiked = response.isLiked ?? false;
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
                    setTimeout(() => {
                        window.location.reload();
                    }, 5000);
                },
                error: (error) => {
                    this.error = error.message;
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
                    this.ok = 'Post dislike';
                    this.messageService.add({
                        severity: 'success',
                        summary: 'Post disliké',
                        detail: 'Vous avez dislike ce post !',
                        life: 5000,
                    });
                    setTimeout(() => {
                        window.location.reload();
                    }, 5000);
                },
                error: (error) => {
                    this.error = error.message;
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

    confirm(event: Event) {
        this.confirmationService.confirm({
            target: event.target as EventTarget,
            message: 'Où souhaitez-vous partager ce post ?',
        });
    }

    getBack() {
        this._location.back();
    }

    closeComments() {
        this.showComments = false;
    }
}
