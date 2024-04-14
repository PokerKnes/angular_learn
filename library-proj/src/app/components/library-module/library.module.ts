import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterSection } from './filter-section/filter-section.component';
import { GetBooksService } from '../../services/get-books.service';
import { FormsModule } from '@angular/forms';
import { ItemsSectionComponent } from './items-section/items-section.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { ItemComponent } from '../add-info-book/item/item.component';
import { ItemsSectionRoutingModule } from './items-section-route.module';
import { YourListBooksService } from '../../services/your-list-books.service';
import { Router, RouterModule } from '@angular/router';
import { BookAddInfoModule } from '../add-info-book/item/item.module';



@NgModule({
  declarations: [FilterSection, PaginatorComponent, ItemsSectionComponent],
  imports: [
    ItemsSectionRoutingModule, CommonModule, FormsModule, RouterModule, BookAddInfoModule
  ],
  exports: [FilterSection, PaginatorComponent, ItemsSectionComponent],
  providers: [RouterModule]
})
export class LibraryModule { }
