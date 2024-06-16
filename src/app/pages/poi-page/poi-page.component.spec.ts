import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoiPageComponent } from './poi-page.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterModule } from '@angular/router';

describe('PoiPageComponent', () => {
    let component: PoiPageComponent;
    let fixture: ComponentFixture<PoiPageComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [PoiPageComponent, HttpClientTestingModule, RouterModule.forRoot([])],
        }).compileComponents();

        fixture = TestBed.createComponent(PoiPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
