import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPasswordComponent } from './new-password.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterModule } from '@angular/router';

describe('NewPasswordComponent', () => {
    let component: NewPasswordComponent;
    let fixture: ComponentFixture<NewPasswordComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [NewPasswordComponent, HttpClientTestingModule, RouterModule.forRoot([])],
        }).compileComponents();

        fixture = TestBed.createComponent(NewPasswordComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
