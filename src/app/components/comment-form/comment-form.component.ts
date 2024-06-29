import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommentPostRequest } from '../../models/request/commentPost.request';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CommentsService } from '../../services/comments/comments.service';

@Component({
    selector: 'app-comment-form',
    standalone: true,
    imports: [InputTextareaModule, FormsModule, ButtonModule],
    templateUrl: './comment-form.component.html',
    styleUrl: './comment-form.component.css',
})
export class CommentFormComponent {
    @Input() postId?: string | number = '';
    content: string = '';
    @Output() emitter: EventEmitter<any> = new EventEmitter();

    constructor(private commentsService: CommentsService) {}

    postComment() {
        if (!this.content || !this.postId) {
            return;
        }
        const comment: CommentPostRequest = {
            content: this.content,
            postId: this.postId,
        };

        this.commentsService.storePostComments(comment).subscribe({
            next: (_) => {
                this.emitter.emit();
            },
            error: (error) => {
                console.error(error);
            },
        });
    }
}
