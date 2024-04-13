import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { YourListBooksComponent } from './your-list-books/your-list-books.component';
import { YourBookInfoComponent } from './your-book-info/your-book-info.component';
import { YourBooksFiltersComponent } from './your-books-filters/your-books-filters.component';


const routes: Routes = [
    { path: '', component: YourBooksFiltersComponent },
    { path: ':page', component: YourBooksFiltersComponent },
    { path: 'book-info/:id', component: YourBookInfoComponent },
    { path: ':page/book-info/:id', component: YourBookInfoComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ItemsSectionRoutingModule { }
