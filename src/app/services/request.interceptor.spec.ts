import { TestBed } from '@angular/core/testing';

import { RequestInterceptor } from './request.interceptor';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterModule } from '@angular/router';

describe('requestInterceptor', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [RouterModule.forRoot([]), HttpClientTestingModule],
            providers: [RequestInterceptor],
        });
    });

    it('should be created', () => {
        const interceptor: RequestInterceptor = TestBed.inject(RequestInterceptor);
        expect(interceptor).toBeTruthy();
    });
});
