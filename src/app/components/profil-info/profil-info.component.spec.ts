import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilInfoComponent } from './profil-info.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterModule } from '@angular/router';

describe('ProfilInfoComponent', () => {
    let component: ProfilInfoComponent;
    let fixture: ComponentFixture<ProfilInfoComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ProfilInfoComponent, HttpClientTestingModule, RouterModule.forRoot([])],
        }).compileComponents();

        fixture = TestBed.createComponent(ProfilInfoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
