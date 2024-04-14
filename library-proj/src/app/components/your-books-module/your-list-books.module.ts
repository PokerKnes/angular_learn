import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { YourListBooksComponent } from './your-list-books/your-list-books.component';
import { YourBookInfoComponent } from './your-book-info/your-book-info.component';
import { YourBooksPaginatorComponent } from './your-books-paginator/your-books-paginator.component';
import { YourListBooksService } from '../../services/your-list-books.service';
import { RouterOutlet, RouterLink, RouterLinkActive} from "@angular/router";
import { ItemsSectionRoutingModule } from './your-list-books-route.module';
import { YourBooksFiltersComponent } from './your-books-filters/your-books-filters.component';


@NgModule({
  declarations: [YourListBooksComponent, YourBooksPaginatorComponent, YourBookInfoComponent, YourBooksFiltersComponent],
  imports: [
    CommonModule, FormsModule, RouterOutlet, RouterLink, RouterLinkActive, ItemsSectionRoutingModule,DatePipe
  ],
  exports: [YourListBooksComponent, YourBooksPaginatorComponent, YourBookInfoComponent, YourBooksFiltersComponent],
  providers: [ ]
})
export class YourListBooksModule { }
