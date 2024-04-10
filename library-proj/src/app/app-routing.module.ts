import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { FilterSection } from './components/library-module/filter-section/filter-section.component';
import { EmptyRouteComponent } from './components/empty-route/empty-route.component';

const routes: Routes = [
  {
    path: 'main',
    component: MainComponent,
  },
  // {
  //   path: 'book-list',
  //   component: FilterSection,loadChildren:   
  // },
  {
    path: 'book-list',
    loadChildren: ()=> import('./components/library-module/library.module').then((m)=>m.LibraryModule)
  },
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full',
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
