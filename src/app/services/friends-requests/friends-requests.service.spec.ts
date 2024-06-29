import { TestBed } from '@angular/core/testing';

import { FriendsRequestsService } from './friends-requests.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('FriendsRequestsService', () => {
    let service: FriendsRequestsService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
        });
        service = TestBed.inject(FriendsRequestsService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
