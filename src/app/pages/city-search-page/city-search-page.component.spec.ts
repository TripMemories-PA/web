import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitySearchPageComponent } from './city-search-page.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterModule } from '@angular/router';

describe('CitySearchPageComponent', () => {
    let component: CitySearchPageComponent;
    let fixture: ComponentFixture<CitySearchPageComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [CitySearchPageComponent, HttpClientTestingModule, RouterModule.forRoot([])],
        }).compileComponents();

        fixture = TestBed.createComponent(CitySearchPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
