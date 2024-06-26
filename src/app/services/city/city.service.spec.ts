import { TestBed } from '@angular/core/testing';

import { CityService } from './city.service';
import { HttpClientModule } from '@angular/common/http';

describe('CityService', () => {
    let service: CityService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule],
        });
        service = TestBed.inject(CityService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
