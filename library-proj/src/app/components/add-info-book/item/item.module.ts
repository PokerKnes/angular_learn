import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { ItemComponent } from './item.component';
import { ItemsSectionRoutingModule } from '../../library-module/items-section-route.module';

@NgModule({
  declarations: [ItemComponent],
  imports: [
    ItemsSectionRoutingModule, CommonModule, RouterOutlet, RouterLink, RouterLinkActive
  ],
  exports: [ItemComponent],
  providers: [RouterModule]
})
export class BookAddInfoModule { }
