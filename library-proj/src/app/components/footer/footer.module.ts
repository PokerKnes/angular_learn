import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
// import { RouterOutlet, RouterLink, RouterLinkActive} from "@angular/router";

@NgModule({
    declarations: [FooterComponent],
    imports: [ CommonModule],
    exports: [FooterComponent],
    providers: [],
})
export class FooterModule {}