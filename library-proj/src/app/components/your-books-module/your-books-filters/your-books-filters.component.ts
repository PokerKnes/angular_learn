import { Component } from '@angular/core';
import { IdataTransferYourBooks, YourListBooksService } from '../../../services/your-list-books.service';

@Component({
  selector: 'app-your-books-filters',
  templateUrl: './your-books-filters.component.html',
  styleUrl: './your-books-filters.component.scss',
})
export class YourBooksFiltersComponent {
  readFlag: boolean = false;
  unreadFlag: boolean = false;
  bookList: any[] = this.yourBooksService.cacheListBooks
  constructor(private yourBooksService: YourListBooksService) {}

  reverseCheckBox(event: Event) {
   
    const targetElement = event.target as HTMLInputElement;
    const targetValue = targetElement.value;
    const targetChecked = targetElement.checked;
    if (!this.readFlag && !this.unreadFlag) {
      if (targetValue == 'read') {
        this.readFlag = !this.readFlag;
      } else {
        this.unreadFlag = !this.unreadFlag;
      }
    } else {
      if (!targetChecked) {
        if (targetValue == 'read') {
          this.readFlag = !this.readFlag;
        } else {
          this.unreadFlag = !this.unreadFlag;
        }
      } else {
        this.readFlag = !this.readFlag;
        this.unreadFlag = !this.unreadFlag;
      }
    }
    this.yourBooksService.readFlag = this.readFlag;
    this.yourBooksService.unreadFlag = this.unreadFlag;
    this.readFilter(this.readFlag, this.unreadFlag)
  }
  readFilter(readFlag: boolean, unreadFlag: boolean) {
    if(!readFlag && !unreadFlag) {
      this.yourBooksService.readFilter('all')
    } else if (readFlag) {
      this.yourBooksService.readFilter('read')
    } else {
      this.yourBooksService.readFilter('unread')
    }
  }

  updateFilter() {
    this.readFilter(this.readFlag, this.unreadFlag)
  }
  ngOnInit(): void {
    this.yourBooksService
      .getDataObservable()
      .subscribe((data: IdataTransferYourBooks) => {
      });
      this.readFlag = this.yourBooksService.readFlag;
      this.unreadFlag = this.yourBooksService.unreadFlag;
  }
}
