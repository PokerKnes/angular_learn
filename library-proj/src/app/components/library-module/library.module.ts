import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterSection } from './test-request/filter-section.component';
import { GetBooksService } from '../../services/get-books.service';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [FilterSection],
  imports: [
    CommonModule, FormsModule
  ],
  exports: [FilterSection],
  providers: []
})
export class LibraryModule { }
