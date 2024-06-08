import { TestBed } from '@angular/core/testing';

import { FriendsRequestsService } from './friends-requests.service';

describe('FriendsRequestsService', () => {
    let service: FriendsRequestsService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(FriendsRequestsService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
