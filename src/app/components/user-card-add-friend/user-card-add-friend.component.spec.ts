import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCardAddFriendComponent } from './user-card-add-friend.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterModule } from '@angular/router';

describe('UserCardAddFriendComponent', () => {
    let component: UserCardAddFriendComponent;
    let fixture: ComponentFixture<UserCardAddFriendComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                UserCardAddFriendComponent,
                HttpClientTestingModule,
                RouterModule.forRoot([]),
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(UserCardAddFriendComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
