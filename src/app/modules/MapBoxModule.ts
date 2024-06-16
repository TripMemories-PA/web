import { NgModule, Optional, SkipSelf } from '@angular/core';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';

@NgModule({
    imports: [
        NgxMapboxGLModule.withConfig({
            accessToken: 'YOUR_MAPBOX_ACCESS_TOKEN', // Remplacez par votre token
        }),
    ],
    exports: [NgxMapboxGLModule],
})
export class MapboxWrapperModule {
    constructor(@Optional() @SkipSelf() parentModule: MapboxWrapperModule) {
        if (parentModule) {
            throw new Error(
                'MapboxWrapperModule is already loaded. Import it in the AppModule only.',
            );
        }
    }
}
