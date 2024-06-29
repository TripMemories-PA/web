import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentFormComponent } from './comment-form.component';
import { HttpClientModule } from '@angular/common/http';

describe('CommentFormComponent', () => {
    let component: CommentFormComponent;
    let fixture: ComponentFixture<CommentFormComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [CommentFormComponent, HttpClientModule],
        }).compileComponents();

        fixture = TestBed.createComponent(CommentFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
