import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInfoComponent } from './user-info.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

describe('UserInfoComponent', () => {
    let component: UserInfoComponent;
    let fixture: ComponentFixture<UserInfoComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [UserInfoComponent, HttpClientModule, RouterModule.forRoot([])],
        }).compileComponents();

        fixture = TestBed.createComponent(UserInfoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
