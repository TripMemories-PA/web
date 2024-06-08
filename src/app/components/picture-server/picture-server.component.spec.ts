import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PictureServerComponent } from './picture-server.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterModule } from '@angular/router';

describe('PictureServerComponent', () => {
    let component: PictureServerComponent;
    let fixture: ComponentFixture<PictureServerComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [PictureServerComponent, HttpClientTestingModule, RouterModule.forRoot([])],
        }).compileComponents();

        fixture = TestBed.createComponent(PictureServerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
