import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendRequestCardComponent } from './friend-request-card.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterModule } from '@angular/router';

describe('FriendRequestCardComponent', () => {
    let component: FriendRequestCardComponent;
    let fixture: ComponentFixture<FriendRequestCardComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                FriendRequestCardComponent,
                HttpClientTestingModule,
                RouterModule.forRoot([]),
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(FriendRequestCardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
