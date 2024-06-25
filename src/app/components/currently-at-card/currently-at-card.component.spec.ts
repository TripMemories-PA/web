import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentlyAtCardComponent } from './currently-at-card.component';
import { RouterModule } from '@angular/router';

describe('CurrentlyAtCardComponent', () => {
    let component: CurrentlyAtCardComponent;
    let fixture: ComponentFixture<CurrentlyAtCardComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [CurrentlyAtCardComponent, RouterModule.forRoot([])],
        }).compileComponents();

        fixture = TestBed.createComponent(CurrentlyAtCardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
