import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCardFeedComponent } from './post-card-feed.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

describe('PostCardFeedComponent', () => {
    let component: PostCardFeedComponent;
    let fixture: ComponentFixture<PostCardFeedComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [PostCardFeedComponent, HttpClientModule, RouterModule.forRoot([])],
        }).compileComponents();

        fixture = TestBed.createComponent(PostCardFeedComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
