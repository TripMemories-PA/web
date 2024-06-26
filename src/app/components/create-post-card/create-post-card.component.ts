import { Component, Input } from '@angular/core';
import { RatingModule } from 'primeng/rating';
import { InputTextModule } from 'primeng/inputtext';
import { FileSelectEvent, FileUploadModule } from 'primeng/fileupload';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ChipsModule } from 'primeng/chips';
import { PostsService } from '../../services/posts/posts.service';
import { Router } from '@angular/router';
import { PostCreationModel } from '../../models/request/post.model';
import { FormsModule } from '@angular/forms';
import { MessageModule } from 'primeng/message';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-create-post-card',
    standalone: true,
    imports: [
        RatingModule,
        InputTextModule,
        FileUploadModule,
        InputTextareaModule,
        ChipsModule,
        FormsModule,
        MessageModule,
        NgIf,
    ],
    templateUrl: './create-post-card.component.html',
    styleUrl: './create-post-card.component.css',
})
export class CreatePostCardComponent {
    constructor(
        private postService: PostsService,
        private router: Router,
    ) {}

    file: File | null = null;
    error: string | null = null;
    success: string | null = null;
    loading: boolean = false;

    @Input() inputPoiId?: number;

    post: PostCreationModel = {
        title: '',
        content: '',
        imageId: 0,
        poiId: this.inputPoiId ?? 3407,
        note: undefined,
    };

    onUpload(event: FileSelectEvent) {
        this.file = event.currentFiles[0];
    }

    submitPost() {
        this.loading = true;
        if (!this.file) {
            console.log('no file');
            this.error = 'Veuillez ajouter une image';
            this.loading = false;
            return;
        }
        if (
            !this.post.title ||
            !this.post.content ||
            this.post.note === undefined ||
            !this.post.poiId
        ) {
            console.log('missing fields');
            this.error = 'Tout les champs sont obligatoires';
            this.loading = false;
            return;
        }
        const formData: FormData = new FormData();
        formData.append('file', this.file, this.file.name);
        this.postService.sendImagePost(formData).subscribe({
            next: (response) => {
                this.post.imageId = response.id;
                this.postService.createPost(this.post).subscribe({
                    next: (_) => {
                        this.success = 'Post créé avec succès, la page va se recharger';
                        this.loading = false;
                        setTimeout(() => {
                            window.location.reload();
                        }, 5000);
                    },
                    error: (error) => {
                        this.loading = false;
                        this.error = 'Une erreur est survenue lors de la création du post';
                        console.error(error);
                    },
                });
            },
            error: (error) => {
                this.loading = false;
                this.error = "Une erreur est survenue lors de l'envoi de l'image";
                console.error(error);
            },
        });
    }
}
