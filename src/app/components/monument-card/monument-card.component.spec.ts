import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonumentCardComponent } from './monument-card.component';

describe('MonumentCardComponent', () => {
    let component: MonumentCardComponent;
    let fixture: ComponentFixture<MonumentCardComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [MonumentCardComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(MonumentCardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
