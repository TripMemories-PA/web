import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationUserComponent } from './information-user.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

describe('InformationUserComponent', () => {
    let component: InformationUserComponent;
    let fixture: ComponentFixture<InformationUserComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [InformationUserComponent, HttpClientModule, RouterModule.forRoot([])],
        }).compileComponents();

        fixture = TestBed.createComponent(InformationUserComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
