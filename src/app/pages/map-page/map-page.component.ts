import { Component } from '@angular/core';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';

@Component({
    selector: 'app-map-page',
    standalone: true,
    imports: [NgxMapboxGLModule],
    templateUrl: './map-page.component.html',
    styleUrl: './map-page.component.css',
})
export class MapPageComponent {}
