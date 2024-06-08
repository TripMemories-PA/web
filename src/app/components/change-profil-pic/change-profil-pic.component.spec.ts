import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeProfilPicComponent } from './change-profil-pic.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterModule } from '@angular/router';

describe('ChangeProfilPicComponent', () => {
    let component: ChangeProfilPicComponent;
    let fixture: ComponentFixture<ChangeProfilPicComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ChangeProfilPicComponent, HttpClientTestingModule, RouterModule.forRoot([])],
        }).compileComponents();

        fixture = TestBed.createComponent(ChangeProfilPicComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
