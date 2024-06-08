import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPageComponent } from './register-page.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterModule } from '@angular/router';

describe('RegisterPageComponent', () => {
    let component: RegisterPageComponent;
    let fixture: ComponentFixture<RegisterPageComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [RegisterPageComponent, HttpClientTestingModule, RouterModule.forRoot([])],
        }).compileComponents();

        fixture = TestBed.createComponent(RegisterPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
