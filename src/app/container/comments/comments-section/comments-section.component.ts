import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { SharedModule } from 'primeng/api';
import { PostsService } from '../../../services/posts/posts.service';
import { CommentModel } from '../../../models/comment.model';
import { NgForOf, NgOptimizedImage } from '@angular/common';
import { CommentComponent } from '../../../components/comment/comment.component';
import { CommentFormComponent } from '../../../components/comment-form/comment-form.component';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
    selector: 'app-comments-section',
    standalone: true,
    imports: [
        DialogModule,
        SharedModule,
        NgOptimizedImage,
        CommentComponent,
        NgForOf,
        CommentFormComponent,
    ],
    templateUrl: './comments-section.component.html',
    styleUrl: './comments-section.component.css',
})
export class CommentsSectionComponent implements OnInit {
    constructor(
        private postService: PostsService,
        private authService: AuthService,
    ) {}

    @Input() postId: string = '';
    @Input() postUrl?: string = '';
    @Input() showDialog: boolean = false;
    show: boolean = false;
    @Output() setShowDialog: EventEmitter<any> = new EventEmitter();
    comments: CommentModel[] = [];
    id = this.authService.user?.id;

    ngOnInit(): void {
        this.openDialog();
        if (this.postId) {
            this.getComments();
        }
    }

    openDialog(): void {
        this.show = true;
    }

    getComments(): void {
        this.postService.getPostComments(this.postId).subscribe({
            next: (response) => {
                this.comments = response.data;
            },
            error: (error) => {
                console.error(error);
            },
        });
    }

    get IdAuthor(): number {
        if (this.authService.user?.id) {
            return parseInt(this.authService.user.id);
        }
        return -1;
    }

    onCloseDialog(): void {
        this.setShowDialog.emit(false);
    }
}
