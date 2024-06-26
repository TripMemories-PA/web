import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPostsComponent } from './my-posts.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('MyPostsComponent', () => {
    let component: MyPostsComponent;
    let fixture: ComponentFixture<MyPostsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [MyPostsComponent, HttpClientTestingModule],
        }).compileComponents();

        fixture = TestBed.createComponent(MyPostsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
