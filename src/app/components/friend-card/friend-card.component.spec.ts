import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendCardComponent } from './friend-card.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterModule } from '@angular/router';

describe('FriendCardComponent', () => {
    let component: FriendCardComponent;
    let fixture: ComponentFixture<FriendCardComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [FriendCardComponent, HttpClientTestingModule, RouterModule.forRoot([])],
        }).compileComponents();

        fixture = TestBed.createComponent(FriendCardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
