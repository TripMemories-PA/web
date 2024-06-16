import { TestBed } from '@angular/core/testing';

import { PoisService } from './pois.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PoisService', () => {
    let service: PoisService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
        });
        service = TestBed.inject(PoisService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
