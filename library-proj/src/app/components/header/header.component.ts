import { Component } from '@angular/core';
import { IqueryListBooks } from '../library-module/filter-section/filter-section.component';
import { GetBooksService, IdataTransferGetBooks } from '../../services/get-books.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(
    private dataService: GetBooksService,
  ) {}
  query: IqueryListBooks = {}
  
  ngOnInit(): void {
    this.dataService
      .getDataObservable()
      .subscribe((data: IdataTransferGetBooks) => {
        this.query = data.query;
      });
  }
}
