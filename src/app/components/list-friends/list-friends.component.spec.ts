import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFriendsComponent } from './list-friends.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterModule } from '@angular/router';

describe('ListFriendsComponent', () => {
    let component: ListFriendsComponent;
    let fixture: ComponentFixture<ListFriendsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ListFriendsComponent, HttpClientTestingModule, RouterModule.forRoot([])],
        }).compileComponents();

        fixture = TestBed.createComponent(ListFriendsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
