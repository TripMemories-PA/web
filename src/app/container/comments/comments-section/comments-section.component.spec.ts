import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsSectionComponent } from './comments-section.component';
import { HttpClientModule } from '@angular/common/http';

describe('CommentsSectionComponent', () => {
    let component: CommentsSectionComponent;
    let fixture: ComponentFixture<CommentsSectionComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [CommentsSectionComponent, HttpClientModule],
        }).compileComponents();

        fixture = TestBed.createComponent(CommentsSectionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
