import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerProfilComponent } from './banner-profil.component';
import { HttpClientModule } from '@angular/common/http';

describe('BannerProfilComponent', () => {
    let component: BannerProfilComponent;
    let fixture: ComponentFixture<BannerProfilComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [BannerProfilComponent, HttpClientModule],
        }).compileComponents();

        fixture = TestBed.createComponent(BannerProfilComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
