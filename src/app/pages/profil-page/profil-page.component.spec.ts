import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilPageComponent } from './profil-page.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterModule } from '@angular/router';

describe('ProfilPageComponent', () => {
    let component: ProfilPageComponent;
    let fixture: ComponentFixture<ProfilPageComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ProfilPageComponent, HttpClientTestingModule, RouterModule.forRoot([])],
        }).compileComponents();

        fixture = TestBed.createComponent(ProfilPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
