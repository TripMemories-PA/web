import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordFieldComponent } from './password-field.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterModule } from '@angular/router';

describe('PasswordFieldComponent', () => {
    let component: PasswordFieldComponent;
    let fixture: ComponentFixture<PasswordFieldComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [PasswordFieldComponent, HttpClientTestingModule, RouterModule.forRoot([])],
        }).compileComponents();

        fixture = TestBed.createComponent(PasswordFieldComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
