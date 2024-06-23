import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedPageComponent } from './feed-page.component';
import { HttpClientModule } from '@angular/common/http';

describe('FeedPageComponent', () => {
    let component: FeedPageComponent;
    let fixture: ComponentFixture<FeedPageComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [FeedPageComponent, HttpClientModule],
        }).compileComponents();

        fixture = TestBed.createComponent(FeedPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
