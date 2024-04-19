import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test.component';
// import { RouterOutlet, RouterLink, RouterLinkActive} from "@angular/router";

@NgModule({
    declarations: [TestComponent],
    imports: [ CommonModule],
    exports: [TestComponent],
    providers: [],
})
export class TestModule {}