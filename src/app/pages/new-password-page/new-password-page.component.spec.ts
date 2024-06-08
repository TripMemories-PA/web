import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPasswordPageComponent } from './new-password-page.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterModule } from '@angular/router';

describe('NewPasswordPageComponent', () => {
    let component: NewPasswordPageComponent;
    let fixture: ComponentFixture<NewPasswordPageComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [NewPasswordPageComponent, HttpClientTestingModule, RouterModule.forRoot([])],
        }).compileComponents();

        fixture = TestBed.createComponent(NewPasswordPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
