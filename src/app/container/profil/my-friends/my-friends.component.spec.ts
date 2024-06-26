import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFriendsComponent } from './my-friends.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('MyFriendsComponent', () => {
    let component: MyFriendsComponent;
    let fixture: ComponentFixture<MyFriendsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [MyFriendsComponent, HttpClientTestingModule],
        }).compileComponents();

        fixture = TestBed.createComponent(MyFriendsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
