import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PictureServerComponent } from './picture-server.component';

describe('PictureServerComponent', () => {
  let component: PictureServerComponent;
  let fixture: ComponentFixture<PictureServerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PictureServerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PictureServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
