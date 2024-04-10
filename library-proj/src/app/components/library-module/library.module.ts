import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterSection } from './filter-section/filter-section.component';
import { GetBooksService } from '../../services/get-books.service';
import { FormsModule } from '@angular/forms';
import { ItemsSectionComponent } from './items-section/items-section.component';
import { PaginatorComponent } from '../paginator/paginator.component';
// import { ItemsSectionModule } from './items-section.module';
import { ItemComponent } from './items-section/item/item.component';
import { ItemsSectionRoutingModule } from './items-section-route.module';
import { ListBooksCache } from '../../services/books-cache.service';



@NgModule({
  declarations: [FilterSection, PaginatorComponent, ItemsSectionComponent, ItemComponent],
  imports: [
    ItemsSectionRoutingModule, CommonModule, FormsModule
  ],
  exports: [FilterSection, PaginatorComponent, ItemsSectionComponent, ItemComponent],
  providers: [ListBooksCache, GetBooksService]
})
export class LibraryModule { }
