import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastPostPoiPageComponent } from './last-post-poi-page.component';

describe('LastPostPoiPageComponent', () => {
    let component: LastPostPoiPageComponent;
    let fixture: ComponentFixture<LastPostPoiPageComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [LastPostPoiPageComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(LastPostPoiPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
