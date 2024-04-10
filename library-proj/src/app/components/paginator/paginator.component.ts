import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { ListBooksCache } from '../../services/books-cache.service';
@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.scss',
})
export class PaginatorComponent {
  constructor(private cacheService: ListBooksCache) {}
  @Output() loadPage = new EventEmitter<string>();
  @Input() countPages: number = 1;
  @Input() changeSimulate: boolean = true;
  currentPage: number = 1;
  leftEllipsis: boolean = false;
  rightEllipsis: boolean = false;
  firstButtonValue: number = 1;
  changeFirstButton: number = 2;
  changeSecondButton: number = 3;
  changeThirdButton: number = 4;
  lastButtonValue: number = 0;
  providePage(page: string) {
    this.loadPage.emit(page);
  }

  calcButtonsValues(event: MouseEvent, value: number) {
    if (this.currentPage == value) return;
    this.currentPage = value;
    this.cacheService.setCurrentPage(this.currentPage);
    
    if (this.lastButtonValue < 6) {
      this.providePage(value + '');
      return;
    }
    const targetElement = event.target as HTMLElement;
    const className = targetElement.className;
    if (className == 'firstPage') {
      this.changeFirstButton = 2;
      this.changeSecondButton = 3;
      this.changeThirdButton = 4;
      this.leftEllipsis = false;
      this.rightEllipsis = true;
      this.cacheService.setPaginatorData(
        this.changeFirstButton,
        this.changeSecondButton,
        this.changeThirdButton,
        this.leftEllipsis,
        this.rightEllipsis
      );
      
      this.providePage(value + '');
      return;
    } else if (className == 'lastPage') {
      this.changeFirstButton = this.lastButtonValue - 3;
      this.changeSecondButton = this.lastButtonValue - 2;
      this.changeThirdButton = this.lastButtonValue - 1;
      this.leftEllipsis = true;
      this.rightEllipsis = false;
      this.cacheService.setPaginatorData(
        this.changeFirstButton,
        this.changeSecondButton,
        this.changeThirdButton,
        this.leftEllipsis,
        this.rightEllipsis
      );
      
      this.providePage(value + '');
      return;
    }
    if (
      value - 2 <= this.firstButtonValue ||
      value + 2 >= this.lastButtonValue
    ) {
      if (
        value - 2 == this.firstButtonValue ||
        value + 2 == this.lastButtonValue
      ) {
        this.changeFirstButton = value - 1;
        this.changeSecondButton = value;
        this.changeThirdButton = value + 1;
      }
    } else {
      this.changeFirstButton = value - 1;
      this.changeSecondButton = value;
      this.changeThirdButton = value + 1;
    }
    if (this.changeFirstButton - 1 != this.firstButtonValue) {
      this.leftEllipsis = true;
    } else {
      this.leftEllipsis = false;
    }
    if (this.changeThirdButton + 1 != this.lastButtonValue) {
      this.rightEllipsis = true;
    } else {
      this.rightEllipsis = false;
    }
    this.cacheService.setPaginatorData(
      this.changeFirstButton,
      this.changeSecondButton,
      this.changeThirdButton,
      this.leftEllipsis,
      this.rightEllipsis
    );
    
    this.providePage(value + '');
  }

  ngOnChanges(): void { 
    console.log(123)
    if (!this.cacheService.flagResetPaginatorCache) {

      this.lastButtonValue = this.cacheService.countPages;
      this.currentPage = this.cacheService.currentPagePaginator;
      this.changeFirstButton = this.cacheService.changeFirstButton;
      this.changeSecondButton = this.cacheService.changeSecondButton;
      this.changeThirdButton = this.cacheService.changeThirdButton;
      this.leftEllipsis = this.cacheService.leftEllipsis;
      this.rightEllipsis = this.cacheService.rightEllipsis;
    } else {

      this.currentPage = 1;
      this.changeFirstButton = 2;
      this.changeSecondButton = 3;
      this.changeThirdButton = 4;
      this.lastButtonValue = this.countPages;
      if (this.lastButtonValue > 5) {
        this.rightEllipsis = true;
      }
      this.leftEllipsis = false;
    }
  }
}
