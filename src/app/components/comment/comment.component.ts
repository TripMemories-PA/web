import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { User } from '../../models/user';
import { TimeAgoPipe } from '../../time-ago.pipe';
import { NgIf } from '@angular/common';
import { CommentsService } from '../../services/comments/comments.service';

@Component({
    selector: 'app-comment',
    standalone: true,
    imports: [AvatarModule, PanelModule, ButtonModule, TimeAgoPipe, NgIf],
    templateUrl: './comment.component.html',
    styleUrl: './comment.component.css',
})
export class CommentComponent {
    @Input() commentId?: string | number;
    @Input() comment?: string;
    @Input() isLiked?: boolean;
    @Input() isMyPost?: boolean;
    @Input() author?: User;
    @Input() nbrLikes?: number;
    @Input() date?: Date;
    @Output() emitter: EventEmitter<any> = new EventEmitter();

    constructor(private commentsService: CommentsService) {}

    like() {
        if (this.commentId) {
            this.isLiked = true;
        }
    }

    dislike() {
        if (this.commentId) {
            this.isLiked = false;
        }
    }

    deleteComment() {
        if (this.commentId) {
            this.commentsService.deletePostComment(this.commentId).subscribe({
                next: (_) => {
                    this.emitter.emit();
                },
                error: (error) => {
                    console.error(error);
                },
            });
        }
    }
}
