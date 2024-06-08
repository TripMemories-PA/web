import { TestBed } from '@angular/core/testing';

import { ProfilService } from './profil.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuthComponent } from '../../pages/auth/auth.component';

describe('ProfilService', () => {
    let service: ProfilService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
        });
        service = TestBed.inject(ProfilService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
