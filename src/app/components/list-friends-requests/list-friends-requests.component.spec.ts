import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFriendsRequestsComponent } from './list-friends-requests.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterModule } from '@angular/router';

describe('ListFriendsRequestsComponent', () => {
    let component: ListFriendsRequestsComponent;
    let fixture: ComponentFixture<ListFriendsRequestsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                ListFriendsRequestsComponent,
                HttpClientTestingModule,
                RouterModule.forRoot([]),
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(ListFriendsRequestsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
