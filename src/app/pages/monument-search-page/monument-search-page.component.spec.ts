import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonumentSearchPageComponent } from './monument-search-page.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterModule } from '@angular/router';

describe('MonumentSearchPageComponent', () => {
    let component: MonumentSearchPageComponent;
    let fixture: ComponentFixture<MonumentSearchPageComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                MonumentSearchPageComponent,
                HttpClientTestingModule,
                RouterModule.forRoot([]),
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(MonumentSearchPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
