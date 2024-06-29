import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFriendsUserComponent } from './list-friends-user.component';

describe('ListFriendsUserComponent', () => {
    let component: ListFriendsUserComponent;
    let fixture: ComponentFixture<ListFriendsUserComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ListFriendsUserComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(ListFriendsUserComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
