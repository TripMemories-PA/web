import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCardAddFriendComponent } from './user-card-add-friend.component';

describe('UserCardAddFriendComponent', () => {
  let component: UserCardAddFriendComponent;
  let fixture: ComponentFixture<UserCardAddFriendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserCardAddFriendComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserCardAddFriendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
