import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordFormComponent } from './password-form.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PasswordFormComponent', () => {
    let component: PasswordFormComponent;
    let fixture: ComponentFixture<PasswordFormComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [PasswordFormComponent, HttpClientTestingModule],
        }).compileComponents();

        fixture = TestBed.createComponent(PasswordFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
