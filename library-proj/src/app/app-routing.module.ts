import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { FilterSection } from './components/library-module/filter-section/filter-section.component';
import { EmptyRouteComponent } from './components/empty-route/empty-route.component';
import { YourListBooksComponent } from './components/your-books-module/your-list-books/your-list-books.component';
import { ItemComponent } from './components/add-info-book/item/item.component';
import { TestComponent } from './components/test-module/test.component';

const routes: Routes = [
  {
    path: 'main',
    component: MainComponent,
  },
  {
    path: 'book-search',
    loadChildren: ()=> import('./components/library-module/library.module').then((m)=>m.LibraryModule)
  },
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full',
  },
  {
    path: 'your-books',
    loadChildren: ()=> import('./components/your-books-module/your-list-books.module').then((m)=>m.YourListBooksModule)
  },
  {
    path: 'test',
    component: TestComponent,
  },
  {
    path: '**',
    component: EmptyRouteComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
