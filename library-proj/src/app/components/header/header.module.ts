import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { RouterOutlet, RouterLink, RouterLinkActive} from "@angular/router";
import { GetBooksService } from '../../services/get-books.service';

@NgModule({
    declarations: [HeaderComponent],
    imports: [ CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
    exports: [HeaderComponent],
    providers: [],
})
export class HeaderModule {}