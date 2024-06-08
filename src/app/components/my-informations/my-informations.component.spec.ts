import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyInformationsComponent } from './my-informations.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterModule } from '@angular/router';

describe('MyInformationsComponent', () => {
    let component: MyInformationsComponent;
    let fixture: ComponentFixture<MyInformationsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [MyInformationsComponent, HttpClientTestingModule, RouterModule.forRoot([])],
        }).compileComponents();

        fixture = TestBed.createComponent(MyInformationsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
