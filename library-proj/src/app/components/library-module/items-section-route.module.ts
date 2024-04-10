import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemsSectionComponent } from './items-section/items-section.component';
import { ItemComponent } from './items-section/item/item.component';
import { PaginatorComponent } from '../paginator/paginator.component';
import { FilterSection } from './filter-section/filter-section.component';

const routes: Routes = [
    { path: '', component: FilterSection },
    { path: ':id', component: ItemComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ItemsSectionRoutingModule { }
