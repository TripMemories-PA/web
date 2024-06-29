import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { SharedModule } from 'primeng/api';
import { PostsService } from '../../../services/posts/posts.service';
import { CommentModel } from '../../../models/comment.model';
import { NgOptimizedImage } from '@angular/common';

@Component({
    selector: 'app-comments-section',
    standalone: true,
    imports: [DialogModule, SharedModule, NgOptimizedImage],
    templateUrl: './comments-section.component.html',
    styleUrl: './comments-section.component.css',
})
export class CommentsSectionComponent implements OnInit {
    constructor(private postService: PostsService) {}

    @Input() postId: string = '';
    @Input() postUrl: string = '';
    @Input() showDialog: boolean = false;
    show: boolean = false;
    @Output() setShowDialog: EventEmitter<any> = new EventEmitter();
    comments: CommentModel[] = [];

    ngOnInit(): void {
        this.openDialog();
        if (this.postId) {
            this.postService.getPostComments(this.postId).subscribe({
                next: (response) => {
                    this.comments = response.data;
                },
                error: (error) => {
                    console.error(error);
                },
            });
        }
    }

    openDialog(): void {
        this.show = true;
    }

    onCloseDialog(): void {
        this.setShowDialog.emit(false);
    }
}
