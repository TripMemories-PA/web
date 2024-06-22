import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProfilComponent } from './my-profil.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('MyProfilComponent', () => {
    let component: MyProfilComponent;
    let fixture: ComponentFixture<MyProfilComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [MyProfilComponent, HttpClientTestingModule],
        }).compileComponents();

        fixture = TestBed.createComponent(MyProfilComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
