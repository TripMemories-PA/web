import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonumentCardFeedComponent } from './monument-card-feed.component';

describe('MonumentCardFeedComponent', () => {
    let component: MonumentCardFeedComponent;
    let fixture: ComponentFixture<MonumentCardFeedComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [MonumentCardFeedComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(MonumentCardFeedComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
