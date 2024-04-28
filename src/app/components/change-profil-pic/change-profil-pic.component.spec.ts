import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeProfilPicComponent } from './change-profil-pic.component';

describe('ChangeProfilPicComponent', () => {
  let component: ChangeProfilPicComponent;
  let fixture: ComponentFixture<ChangeProfilPicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangeProfilPicComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChangeProfilPicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
