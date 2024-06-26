import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCardComponent } from './post-card.component';
import { HttpClientModule } from '@angular/common/http';

describe('PostCardComponent', () => {
    let component: PostCardComponent;
    let fixture: ComponentFixture<PostCardComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [PostCardComponent, HttpClientModule],
        }).compileComponents();

        fixture = TestBed.createComponent(PostCardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
