import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendsPageComponent } from './friends-page.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterModule } from '@angular/router';

describe('FriendsPageComponent', () => {
    let component: FriendsPageComponent;
    let fixture: ComponentFixture<FriendsPageComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [FriendsPageComponent, HttpClientTestingModule, RouterModule.forRoot([])],
        }).compileComponents();

        fixture = TestBed.createComponent(FriendsPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
