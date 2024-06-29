import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilPicUserComponent } from './profil-pic-user.component';

describe('ProfilPicUserComponent', () => {
    let component: ProfilPicUserComponent;
    let fixture: ComponentFixture<ProfilPicUserComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ProfilPicUserComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(ProfilPicUserComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
