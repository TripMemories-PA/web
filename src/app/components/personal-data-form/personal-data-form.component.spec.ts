import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalDataFormComponent } from './personal-data-form.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PersonalDataFormComponent', () => {
    let component: PersonalDataFormComponent;
    let fixture: ComponentFixture<PersonalDataFormComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [PersonalDataFormComponent, HttpClientTestingModule],
        }).compileComponents();

        fixture = TestBed.createComponent(PersonalDataFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
