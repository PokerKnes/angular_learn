import { Component, ElementRef, OnChanges, Output, EventEmitter, Input } from '@angular/core';
import { IdataTransferYourBooks, YourListBooksService } from '../../../services/your-list-books.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IqueryListBooks } from '../../library-module/filter-section/filter-section.component';
import { GetBooksService, IdataTransferGetBooks } from '../../../services/get-books.service';

@Component({
  selector: 'app-your-list-books',
  templateUrl: './your-list-books.component.html',
  styleUrl: './your-list-books.component.scss'
})
export class YourListBooksComponent {
  @Input() readFlag?: boolean;
  @Output() updateFilter = new EventEmitter();
  query: IqueryListBooks = {}
  listBooks: any;
  cacheListBooks: any;
  viewListBooks?: any[];
  currentPage: number = 1;
  countBooks: number = 1;
  countPages: number = 1;
  constructor(private dataService: GetBooksService, private router: Router, private route: ActivatedRoute, private yourBooksService: YourListBooksService) {}
  deleteBookYourself(item:any) {
    this.yourBooksService.deleteBook(item)
    this.listBooks = this.yourBooksService.listBooks
    let maxPages = Math.ceil(this.listBooks.length / 10);
    this.countBooks = this.listBooks.length
    this.countPages = maxPages
    if(this.currentPage <= maxPages) {
      this.calcViewListBook(this.currentPage)
    } else {
      // this.calcViewListBook(maxPages)
      if(maxPages === 1)
      this.router.navigate([`your-books`])
      else
      this.router.navigate([`your-books/${maxPages}`])
    }
  }

  readHandler(event: MouseEvent, item: any) {
    const targetElement = event.target as HTMLInputElement;
    const isChecked = targetElement.checked;
    this.yourBooksService.setRead(item.id, isChecked)
    this.listBooks = this.yourBooksService.listBooks
    this.updateFilter.emit();
  }

  navigationPages(page: string) {
      if(page === '1')
      this.router.navigate([`your-books`])
      else
      this.router.navigate([`your-books/${page}`])
  }

  ngOnInit(): void {
    this.yourBooksService
      .getDataObservableView()
      .subscribe((data: IdataTransferYourBooks) => {
        this.cacheListBooks = this.yourBooksService.cacheListBooks
        this.listBooks = data.listBooks
        this.currentPage = this.yourBooksService.currentPage!
        this.countPages = Math.ceil(this.listBooks.length / 10);
        this.calcViewListBook(this.currentPage);
    });
    this.cacheListBooks = this.yourBooksService.cacheListBooks
    this.query = this.dataService.query
    this.route.params.subscribe((params) => {
      let page = 1
      if (Object.keys(params).length !== 0) {
        page = +params['page']
      }
      this.listBooks = this.yourBooksService.cacheListBooks
      this.countPages = Math.ceil(this.listBooks.length / 10);
      this.calcViewListBook(page);
    });
    
  }

  calcViewListBook(page: number) {
    this.countBooks = this.listBooks.length
    this.countPages = Math.ceil(this.listBooks.length / 10);
    if((page > this.countPages) && (this.countPages > 0)) {
      page = this.countPages
    }
    this.currentPage = page;
    this.yourBooksService.updateData(this.countPages, this.currentPage)
    let upperRestriction = (page * 10) > this.listBooks.length ? this.listBooks.length : (page * 10);
    let viewList = this.listBooks.slice((page - 1) * 10, upperRestriction)
    this.viewListBooks = viewList
  }
  public redirectTo(item: any): void {
    // this.yourBooksService.setAddInfoBook(item);
    this.router.navigate([`book-info/${item.id}`], { relativeTo: this.route });
  }
}
