import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmptyRouteComponent } from './empty-route.component';

@NgModule({
    declarations: [EmptyRouteComponent],
    imports: [ CommonModule ],
    exports: [EmptyRouteComponent],
    providers: [],
})
export class EmptyRouteModule {}